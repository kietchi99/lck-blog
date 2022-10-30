import React, { useState } from 'react'
import { Box, Grid, Stack, Typography, Avatar, styled } from '@mui/material'
import { useRouter } from 'next/router'
import { getBlogBySlug, getAllBlogs, getNewBlogs, getAllTags} from 'lib/api'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import TagList from 'components/TagList'
import PostList from 'components/PostList'
import CommentList from 'components/CommentList'
import Breadcrumb from 'components/Breadcrumb'
import Content from 'components/Content'
import TextField from 'components/TextField'
import Top from 'components/Top'
import moment from 'moment'


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

const BlogDetail = ({ blog, newBlogs, tags }) => {
    const router = useRouter()
    if(!router.isFallback && !blog.slug) {
        return <ErrorPage statusCode='404'/>
    }
    const [loading, setLoading] = useState(false) 

    const handleLoading = () => {
        setLoading(true)
    }
    return (
        <div style={{position: 'relative' }}>
            <Navbar loading={loading}/> 
            <Box sx={{padding: '20px 20px 0 20px'}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={8}>
                        <Box>
                            <Breadcrumb link={blog.category}/>
                        </Box>
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
                        <Content content={blog.content}/>
                        <CommentTitle mt={3}>
                            <Typography width='130px' variant='h5'>1 Bình luận</Typography>
                        </CommentTitle>
                        <TextField />
                        <CommentBox mt={3} p={3}>
                            <CommentList />
                        </CommentBox>
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
        </div>
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
    const paths = blogs?.map(blog=>({
        params: {
            slug: blog.slug.current
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export default BlogDetail
