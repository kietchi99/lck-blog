//react
import React from 'react'

//sanity
import { Box, Grid, Stack, Typography, Avatar, styled } from '@mui/material'

//moment
import moment from 'moment'

//hooks
import { getBlogBySlug, getAllBlogs, getNewBlogs, getAllTags} from 'lib/sanity/queries/blogs'

//components
import Navbar from 'components/main/Navbar'
import Footer from 'components/main/Footer'
import TagList from 'components/tags/TagList'
import PostList from 'components/post/PostList'
import CommentList from 'components/comments/CommentList'
import Content from 'components/blogContent/Content'
import CurrentUserComments from 'components/comments/currentUserComments'

const CommentTitle = styled(Box)(({theme})=>({
    textAlign: 'center',
    borderBottom: '3px solid transparent',
    borderImage: 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)',
    borderImageSlice: 1,
    width: '40%'
}))
const CommentBox = styled(Box)(({theme})=>({
    background: 'white',
    borderRadius: '10px'
}))

const BlogDetail = ({ blog, newBlogs, tags, params}) => {
    return (
        <>
            <Navbar /> 
            <Box sx={{padding: '20px 20px 0 20px'}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={8}>
                        <Box mt={2}>
                            <Typography variant='h4' sx={{fontWeight: 700}}>
                                {blog.title}
                            </Typography>
                        </Box>
                        <Box mt={2}>
                            <Stack direction='row'>
                                <Avatar alt="Travis Howard" sx={{ width: 30, height: 30, marginRight: '4px', border: '2px solid #1565c0'}} src={blog?.author?.avatar} />
                                <Typography variant='caption' mt={1} color='secondary'>{blog.author.name}. {moment(blog.date).format('MM/DD/YYYY')}</Typography>
                            </Stack>
                        </Box>
                        <Content title={blog.title} content={blog.content}/>
                        <CommentTitle mt={3}>
                            <Typography width='130px' variant='h5'>1 Bình luận</Typography>
                        </CommentTitle>

                        <CommentBox mt={3} p={3}>
                            <CurrentUserComments blogId={blog._id}/>
                            <CommentList blogId={blog._id}/>
                        </CommentBox>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Stack spacing={5}>
                            <PostList items={newBlogs} />
                            <TagList items={tags}/>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </>
    )
}

export async function getStaticProps({params}) {
    const newBlogs = await getNewBlogs()
    const tags = await getAllTags()
    const blog = await getBlogBySlug(params.slug)
    return {
        props: {
            blog, newBlogs, tags 
        }
    }
}

export async function getStaticPaths() {
    const blogs = await getAllBlogs()
    const paths = blogs.map(blog=>{
        return {
            params: {
                slug: blog.slug
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export default BlogDetail
