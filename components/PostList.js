import React from 'react'
import Post from './Post'
import { Box, Stack, Typography, styled, Paper } from '@mui/material'

const ListPostFrame = styled(Paper)(({theme})=>({
    color: theme.palette.secondary.main,
    padding: '10px',
    borderRadius: '10px'
}))

const ListPost = ({ items, loading }) => {
    const listItems = items.map((item)=>{
        return < Post key={item.slug} item={item} loading={loading} />
    })

    return (
        <ListPostFrame elevation={0}>
            <Stack spacing={2}>
                <Box>
                    <Typography variant='h5' sx={{color: 'black'}}> New posts </Typography>
                </Box>
                <Stack spacing={2}> {listItems} </Stack>
            </Stack>
        </ListPostFrame>

    )
}

export default ListPost
