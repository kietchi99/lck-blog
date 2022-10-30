import React from 'react'
import { Box, Grid, Paper, Typography, styled, CardMedia, Stack, Avatar } from '@mui/material'
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
        <PostFrame elevation={0}>
            <Box>
                <PostTitle> {item.title} </PostTitle>
            </Box>
            <Box mt={1} mb={1}>
                <Typography ml={2}> {item.subtitle} </Typography>
            </Box>
            <Box pl={2}>
                {item.tags?.map(tag=><CardTag>#{tag.title}</CardTag>)}
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
