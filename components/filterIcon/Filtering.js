//react
import React from 'react'

//material
import { IconButton } from '@mui/material'
import { ViewList } from "@mui/icons-material/"

const Filtering = ({ handleFiltering }) => {
    return (
        <IconButton 
            onClick={()=>handleFiltering()}
        >
            <ViewList />
        </IconButton>
    )
}

export default Filtering
