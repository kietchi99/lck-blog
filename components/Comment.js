import React from 'react'
import { Box, Stack, Typography, Avatar, styled } from '@mui/material'

const Comment = () => {
    const StyledTypography = styled(Typography)(({theme})=>({
        color: theme.palette.secondary.main
    }))

    const CommentContent = styled(Box)(({theme})=>({
        background: '#efefef',
        borderRadius: '10px',
        padding: '10px 10px'
    }))
        
    const Reply = styled(Typography)(({theme})=>({
        "&:hover": {
        cursor: "pointer",
        color: theme.palette.primary.main,
        } 
    }))

    return (
        <Box>
        <Stack direction='row' spacing={2} >
            <Avatar alt="Travis Howard" sx={{ width: 30, height: 30 }} src="/static/images/avatar/2.jpg" />
            <Box sx={{width: '100%'}} >
            <Stack>
                <CommentContent>
                <Box>
                    <Typography sx={{fontSize: '14px'}}>Chí Kiệt</Typography>
                </Box>
                <Box>
                    <StyledTypography pl={2}>
                    Hehe boy
                    </StyledTypography>
                </Box>
                </CommentContent>
                <Box>
                <Stack direction='row'>
                    <Box>
                    <Reply variant='caption' mr={2} ml={2}>Reply</Reply>
                    </Box>
                    <Box><StyledTypography variant='caption'>20-11-2022</StyledTypography></Box>
                </Stack>
                </Box>
            </Stack>
            </Box>
        </Stack>
        </Box>
    )
}

export default Comment
