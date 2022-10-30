import React from 'react'
import  { CircularProgress as Circular, LinearProgress as Linear, Box}  from '@mui/material'

export const CircularProgress = () => <Box><Circular disableShrink /></Box>

export const LinearIndeterminate = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Linear />
        </Box>
    );
}



