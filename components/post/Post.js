//react
import React from 'react'

//material
import { Box, Grid, Paper, Typography, styled, CardMedia } from '@mui/material'

//moment
import moment from 'moment'

//next
import Link from 'next/link'

const PostFrame = styled(Paper)(({theme})=>({
    color: theme.palette.secondary.main,
    padding: '10px',
    borderRadius: '10px'
}))

const PostTitle = styled(Typography)(({theme})=>({
    color: 'black',
    "&:hover": {
        color: theme.palette.primary.main,
        cursor: "pointer"
    } 
}))

const Post = ({item}) => {
    return (
        <PostFrame elevation={0} sx={{borderRadius: '7px'}}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <CardMedia
                        height='100%'
                        sx={{borderRadius: '5px'}}
                        component="img"
                        image={item.coverimage}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Box>
                        <Link 
                            href={`/blogs/${item.slug}`}
                        >
                            <PostTitle> {item.title} </PostTitle>
                        </Link>
                    </Box>
                    <Box>
                        <Typography variant='caption'> {moment(item.date).format('MM/DD/YYYY')} </Typography>
                    </Box>
                </Grid>
            </Grid>
        </PostFrame>
    )
}

export default Post
