import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import CardList from 'components/CardList'
import PostList from 'components/PostList'
import TagList from 'components/TagList'
import Top from 'components/Top'
import Hero from 'components/Hero'
import { CircularProgress } from 'components/Progress'
import Filtering from 'components/Filtering'
import { Box, Grid, Stack, Button, } from '@mui/material'
import useSWR from 'swr'
import { useGetBlogsPages } from 'action/pagination';
import { getPaginatedBlogs, getNewBlogs, getAllTags} from 'lib/api';

export default function Home({ blogs, newBlogs, tags }) {
  const [filter, setFilter] = useState(0)

  const handleFiltering = () => {
    setFilter(+!filter)
  }

  const { data, size, setSize, hitEnd, pending=false } = useGetBlogsPages();
  const [loading, setLoading] = useState(false) 

  const handleLoading = () => {
    setLoading(true)
  }
  return (
    <>
      <Navbar loading={loading}/>
      <Box sx={{padding: '20px 20px 0 20px'}}>
        <Hero items={data || [blogs]} loading={handleLoading}/>
        <Box pt={2}>
          <Filtering handleFiltering = {handleFiltering}/>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={8}>
            <Stack justifyContent='center'>
              <CardList loading={handleLoading} filter={filter} items={data || [blogs]}/>
              <Box mt={4} sx={{display: 'flex', justifyContent: 'center'}}>
                {
                  pending
                  ?<CircularProgress />
                  :<Button 
                    variant="contained" 
                    disableElevation
                    onClick={() => setSize(size + 1)}
                    disabled={hitEnd}
                  >
                    Read more
                  </Button>
                }
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Stack spacing={5}>
              <PostList items={newBlogs} loading={handleLoading}/>
              <TagList items={tags}/> 
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Footer />
      <Top />
    </>
  )
}

export async function getStaticProps() {
  const blogs = await getPaginatedBlogs()
  const tags = await getAllTags()
  const newBlogs = await getNewBlogs()
  return {
    props: {
      blogs, newBlogs, tags
    }
  }
}