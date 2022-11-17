//sanity
import { Box, Grid, Stack, Typography, styled} from '@mui/material'

// next
import Link from 'next/link'

//components
import Navbar from 'components/main/Navbar'
import Footer from 'components/main/Footer'
import PostList from 'components/post/PostList'
import TagList from 'components/tags/TagList'
import Hero from 'components/hero/Hero'
import SmallCard from 'components/cards/SmallCard'

//hooks
import { getNewBlogs, getAllTags, getBlogByCategory, getHero } from 'lib/sanity/queries/blogs';

const TypographyStyled = styled(Typography)(({theme})=>({
  color: 'black',
  fontWeight: '700',
  "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer"
    } 
  }))

export default function Home({ tips, games, newBlogs, tags, hero}) {
  return (
    <>
      <Navbar />
      <Box sx={{padding: '20px 20px 0 20px'}}>
        {hero.length > 0 && <Hero item={hero}/>}
        <Grid container spacing={3} mt={4}>
          <Grid item xs={12} sm={12} md={8}>
            <Box mb={3} p={2} sx={{borderRadius: '10px', background: 'white'}}>
              <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Link href="/blogs/categories/games">
                  <TypographyStyled>xem thêm</TypographyStyled>
                </Link>
              </Box>
              <Box>
                <Grid container>
                  {games.map(game=><Grid key={game.slug} item xs={6} sm={6} md={4}><SmallCard item={game}/></Grid>)}
                </Grid>
              </Box>
            </Box>
            <Box mb={3} p={2} sx={{borderRadius: '10px', background: 'white'}}>
              <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                <Link href="/blogs/categories/tips">
                  <TypographyStyled>xem thêm</TypographyStyled>
                </Link>
              </Box>
              <Box>
                <Grid container>
                  {tips.map(tip=><Grid key={tip.slug} item xs={6} sm={6} md={4}><SmallCard item={tip}/></Grid>)}
                </Grid>
              </Box>
            </Box>
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

export async function getStaticProps() {
  const games = await getBlogByCategory("game")
  const tips = await getBlogByCategory("thu-thuat")
  const tags = await getAllTags()
  const newBlogs = await getNewBlogs()
  const hero = await getHero()

  return {
    props: {
      newBlogs, tags, tips, games, hero
    }
  }
}