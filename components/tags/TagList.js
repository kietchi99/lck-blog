//react
import React from 'react'

// material
import { Box, Paper, Stack, styled, Typography } from '@mui/material'

//components
import Tag from './Tag'

const ListTagFrame = styled(Paper)(({theme})=>({
    color: theme.palette.secondary.main,
    padding: '10px',
    borderRadius: '10px'
}))

const ListTag = ({items}) => {
    const listItems = items.map((tag)=><Tag key={tag.slug} item={tag} />)
    return (
        <ListTagFrame elevation={0}>
            <Stack spacing={1}>
                <Typography variant='h5' sx={{color: 'black'}}>
                    Main Tags
                </Typography>
                <Box>
                    {listItems}
                </Box>
            </Stack>
        </ListTagFrame>
    )
}

export default ListTag
