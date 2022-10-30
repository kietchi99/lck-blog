import React, { useState } from 'react'
import { IconButton, Typography, AppBar, Toolbar, Box, styled, Drawer } from '@mui/material'
import { Menu as MenuIcon, Search, Brightness4  } from '@mui/icons-material/'
import { LinearIndeterminate  } from 'components/Progress'

const Navbar = ({loading}) => {
    const MenuItems = [
        { Name: "Home", Link: "/" },
        { Name: "Products", Link: "#" },
        { Name: "Portfolio", Link: "#" },
        { Name: "Blog", Link: "#" },
        { Name: "Contact us", Link: "#" },
    ]

    const NavbarFrame = styled(AppBar)(({theme})=>({
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        color: theme.palette.secondary.main,
        backdropFilter: 'blur(30px)',
        boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)'
    }))

    const StyledTypography = styled(Typography)(({theme})=>({
        cursor: "pointer",
        fontSize: "14px",
        "&:hover": {
        color: theme.palette.primary.main,
        cursor: "pointer"
        } 
    }))

    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    })

    const LogoBox = styled(Box)({
        display: "flex",
        gap: 25,
        color: 'black'
    })

    const MenuBox = styled(Box)({
        display: "flex",
        gap: 30,
    })

    const RightBox = styled(Box)({
        display: "flex",
        gap: 12
    })

    const StyledIconButton = styled(IconButton)({
        backgroundColor: '#eef0f2'
    })

    const listItems = MenuItems.map((item) => (
        <StyledTypography key={item.Name} variant='h5' mb={2}>
            {item.Name}
        </StyledTypography>
    ))
    const [isDrawerOpen,setIsDrawerOpen] = useState(false)
    return (
        <NavbarFrame position={"sticky"}>
            <StyledToolbar>
                <LogoBox>
                    <Box>
                        <IconButton
                            onClick={()=> setIsDrawerOpen(true)}
                        >
                            <MenuIcon 
                                sx={{
                                display: { xs: "block", sm: "block", md: "none" },
                                }}
                            />
                        </IconButton>
                        <Drawer 
                            anchor='left'
                            open={isDrawerOpen}
                            onClose={()=>setIsDrawerOpen(false)}
                        >
                            <Box p={2} width='250px' textAlign='center' role='presentation'>
                                {listItems}
                            </Box>
                        </Drawer>
                    </Box>
                    <Typography variant="h4" sx={{cursor: "pointer", fontWeight: 800}}>
                        Kietcii
                    </Typography>
                </LogoBox>
                <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                    {listItems}
                </MenuBox>
                <RightBox>
                    <StyledIconButton color='primary' size="small">
                        <Search color='primary'/>
                    </StyledIconButton>
                    <StyledIconButton color='primary' size="small">
                        <Brightness4 color='primary'/>
                    </StyledIconButton>
                </RightBox>
            </StyledToolbar>
            {loading && <LinearIndeterminate />}
        </NavbarFrame>
    )
}

export default Navbar
