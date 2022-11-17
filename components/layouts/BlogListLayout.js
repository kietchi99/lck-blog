//material
import { Box, Grid, Stack, Button, } from '@mui/material'

//components
import Navbar from 'components/main/Navbar'
import Footer from 'components/main/Footer'
import CardList from '../cards/CardList'
import PostList from 'components/post/PostList'
import TagList from 'components/tags/TagList'
import { CircularProgress } from 'components/progress/Progress'
import Filtering from 'components/filterIcon/Filtering'

export default function BlogListLayout({ 
  blogs, 
  newBlogs, 
  data, 
  tags, 
  size, 
  setSize, 
  hitEnd, 
  pending, 
  handleFiltering, 
  filter 
}) {
  return (
    <>
      <Navbar />
      <Box sx={{padding: '20px 20px 0 20px'}}>
        <Box pt={2}>
          <Filtering handleFiltering = {handleFiltering}/>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={8}>
            <Stack justifyContent='center'>
              <CardList filter={filter} items={data || [blogs]}/>
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
              <PostList items={newBlogs}/>
              <TagList items={tags}/> 
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  )
}