import React from 'react'
import { Paper, styled } from '@mui/material'

const Tag = ({ item }) => {
    const TagPaper = styled(Paper)(({theme})=>({
        padding: '5px 17px', 
        background: '#efefef', 
        display: 'inline-block', 
        margin: '4px', 
        fontsize: '14px', 
        cursor: 'pointer',
        borderRadius: '8px',
        color: theme.palette.secondary.main,
        "&:hover": {
            background: '#2979ff',
            color: 'white'
        }
    }))
    
    return (
        <TagPaper elevation={0} > { item.title } </TagPaper> 
    )
}

export default Tag


