import React from "react";
import { Box, Stack, Typography, styled } from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material/";

const Footer = () => {
    const FooterFrame = styled(Stack)(({theme})=>({
        padding: '30px',
        backgroundColor: "white",
        boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)',
        marginTop: '50px',
        color: theme.palette.secondary.main
    }))

    const SocialBox = styled(Box)({
        display: "flex",
        gap: 10,
        justifyContent: 'center'
    })

    const StyledIcon =  {
        cursor: "pointer",
        opacity: 0.8,
        "&:hover": {
            opacity: 1
        } 
    }

    return (
        <FooterFrame>
        <Typography align='center' mb={2}>
            Hey, this is my blog
        </Typography>
        <SocialBox>
            <Facebook sx={StyledIcon}/>
            <Instagram sx={StyledIcon}/>
            <Twitter sx={StyledIcon}/>
        </SocialBox>
        <Typography align='center' mt={2}>
            @Coppyright 2022 by Lâm Chí Kiệt
        </Typography>
        </FooterFrame>
    );
};

export default Footer;