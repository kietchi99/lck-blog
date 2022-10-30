import React from 'react'
import Comment from './Comment'
import { Box, styled } from '@mui/material'

const ListCommentFrame = styled(Box)(({theme})=>({
    background: 'white',
    borderRadius: '10px'
}))

const ListComment = () => {
    const listItems = [1, 2].map((value)=><Comment key={value}/>)
    return (
        <ListCommentFrame mt={3} p={2}>
            {listItems}
        </ListCommentFrame>
        
    )
}

export default ListComment
