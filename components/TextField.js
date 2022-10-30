import React from 'react'
import { TextField as Text, styled, Box } from '@mui/material'

const TextField = () => {
    const TextBox  = styled(Box)(({theme})=>({
        background: 'white',
        borderRadius: '10px'
    }))

    return (
        <TextBox mt={3} p={3}>
        <Text width='100%' id="fullWidth" fullWidth label="Nhập bình luận" variant="standard" />
        </TextBox>
    )
}

export default TextField
