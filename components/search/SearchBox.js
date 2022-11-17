//react
import React from 'react'

//material
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingIndicator from './LoadingIndicator';
import InputAdornment from '@mui/material/InputAdornment';

//react-instantsearch-dom
import { connectSearchBox } from 'react-instantsearch-dom';

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => {

    const onInputChange = (event) => {
        refine(event.currentTarget.value);
    }

    return (
        <Box
            component="form"
            noValidate
            role="search"
            onSubmit={(event) => event.preventDefault()}
            sx={{
                width: 500,
                maxWidth: '100%'
            }}
        >
            <TextField
                type="search" 
                variant="standard"
                placeholder="Tìm kiếm..."
                fullWidth 
                id="fullWidth" 
                value={currentRefinement}
                onChange={onInputChange}
                InputProps={{
                    disableUnderline: true,
                    startAdornment: (
                        <InputAdornment position="start">
                            <LoadingIndicator
                                isSearchStalled={isSearchStalled}
                            />
                        </InputAdornment>
                    )
                }}
            />
        </Box> 
    )
}

const CustomSearchBox = connectSearchBox(SearchBox)

export default CustomSearchBox