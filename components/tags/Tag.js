//react
import React from 'react'

//material
import { Paper, Box, styled, Typography } from '@mui/material'

//next
import Link from 'next/link'

const Tag = ({ item }) => {
    const TagPaper = styled(Box)(({theme})=>({
        padding: '5px 17px', 
        background: '#efefef', 
        display: 'inline-block', 
        margin: '4px', 
        cursor: 'pointer',
        borderRadius: '8px',
        color: theme.palette.secondary.main,
        "&:hover": {
            background: theme.palette.primary.main,
            color: 'white'
        }
    }))
    
    return (
        <Link href={`/blogs/tags/${item.slug}`}>
            <TagPaper elevation={0} >
                {item.title}
            </TagPaper> 
        </Link>
    )
}

export default Tag


