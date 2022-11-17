//react
import React from 'react'

//next
import Link from 'next/link'

//material
import { Box, Paper, Typography, styled, Stack, Avatar } from '@mui/material'

//monent
import moment from 'moment'


const PostFrame = styled(Paper)(({theme})=>({
    color: theme.palette.secondary.main,
    padding: '15px',
    borderRadius: '10px',
    marginTop: '15px',
    marginLeft: '18px'
}))

const PostTitle = styled(Typography)(({theme})=>({
    color: 'black',
    fontWeight: 600,
    fontSize: '20px',
    "&:hover": {
        color: theme.palette.primary.main,
        cursor: "pointer"
    } 
}))

const CardTag = styled(Typography)(({theme})=>({
    cursor: "pointer",
    display: 'inline-block',
    margin: '0 5px',
    color: theme.palette.primary.main
}))

const List = ({item}) => {
    return (
        <PostFrame width='100%' elevation={0}>
            <Box>
                <Link href={`/blogs/${item.slug}`}>
                    <PostTitle> 
                        {item.title}
                    </PostTitle>
                </Link>
            </Box>
            <Box mt={1} mb={1}>
                <Typography ml={2}> {item.subtitle} </Typography>
            </Box>
            <Box pl={2}>
                {item.tags?.map(tag=>(
                    <Link
                        key={tag.slug.current}
                        href={`/blogs/tags/${tag.slug.current}`}
                    >
                        <CardTag key={tag.title}>#{tag.title}</CardTag>
                    </Link>
                ))}
            </Box>
            <Box>
                <Stack direction='row'>
                    <Avatar alt="Travis Howard" sx={{ width: 18, height: 18, marginRight: '4px', marginTop: '6px', border: '1px solid #1565c0'}} src={item.author.avatar} />
                    <Typography variant='caption' mt={1} color='secondary'>{item.author.name}.  {moment(item.date).format('MM/DD/YYYY')}</Typography>
                </Stack>
            </Box>
        </PostFrame>
    )
}

export default List
