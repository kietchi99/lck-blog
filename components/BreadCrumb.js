import React from 'react'
import { Link, Typography, styled, Breadcrumbs } from '@mui/material'
import { NavigateNext } from "@mui/icons-material/";

const Breadcrumb = ({link}) => {
    function handleClick(event) {
        event.preventDefault();
        console.info('You clicked a breadcrumb.');
    }
    const StyedLink = styled(Link)(({theme})=>({
        "&:hover": {
        color: theme.palette.primary.main,
        } 
    }))
    const breadcrumbs = [
        <StyedLink key="1" underline="none" color="inherit" href="/" onClick={handleClick}>
            Trang chủ
        </StyedLink>,
        <StyedLink
            underline="none"
            key="2"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            onClick={handleClick}
        >
            {link.title}
        </StyedLink>
    ]

    return (
        <Breadcrumbs
            separator={<NavigateNext fontSize="small" />}
            aria-label="breadcrumb"
        >
            {breadcrumbs}
        </Breadcrumbs>
    )
}

export default Breadcrumb