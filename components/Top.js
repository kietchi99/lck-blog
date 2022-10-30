import React from 'react'
import { IconButton } from '@mui/material'
import { KeyboardArrowUp } from "@mui/icons-material/";

const Top = () => {
    return (
        <IconButton 
            sx= {{
                position: 'absolute', 
                bottom: '100px', 
                right: '20px', 
                background: '#d9f0ff'
            }} 
            variant="contained" 
            color="primary">
            <KeyboardArrowUp />
        </IconButton>
    )
}
export default Top
