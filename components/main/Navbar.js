//react
import React, { useState } from 'react'

//material
import { IconButton, Typography, AppBar, Toolbar, Box, styled, Drawer, Avatar, Button } from '@mui/material'
import { Menu as MenuIcon, Search, Brightness4 } from '@mui/icons-material/'

//next
import Link from 'next/link'

//next auth 
import { signIn } from 'next-auth/react';

//components
import Dialog from 'components/search/Dialog'

//hooks
import useCurrentUser from 'hooks/useCurrentUser';

const MenuItems = [
    { Name: "Trang chủ", Link: "/" },
    { Name: "Tất cả", Link: "/blogs" },
    { Name: "Game", Link: "/blogs/categories/games" },
    { Name: "Thủ thuật", Link: "/blogs/categories/tips" },
    { Name: "Liên hệ", Link: "/me" },
]

const NavbarFrame = styled(AppBar)(({theme})=>({
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backdropFilter: 'blur(30px)',
    boxShadow: '0px 1px 6px rgba(0, 0, 0, 0.1)'
}))

const TypographyStyled =  styled(Typography)(({theme})=>({
    fontSize: "14px",
    color: theme.palette.secondary.main,
    "&:hover": {
        color: theme.palette.primary.main
    }
}))

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const LogoBox = styled(Box)({
    display: "flex",
    gap: 25,
})

const LogoTitle =  styled(Typography)(({theme})=>({
    cursor: "pointer", 
    fontWeight: 800,
    color: 'black',
    "&:hover": {
        color: theme.palette.primary.main
    }
}))

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

const Navbar = () => {
    
    const [SearchDialog, setSearchDialog] = useState(false)
    const [isDrawerOpen,setIsDrawerOpen] = useState(false)

    const handleClickOpenSearchDialog = () => {
        setSearchDialog(true);
    }

    const handleClickCloseSearchDialog = () => {
        setSearchDialog(false);
    }

    const listItems = MenuItems.map((item) => (
        <Link key={item.Name} href={`${item.Link}`}>
            <TypographyStyled variant='h5' mb={2}>
                {item.Name}
            </TypographyStyled>
        </Link>
        
    ))
    
    const { currentUser, mutate } = useCurrentUser();

    return (
        <>
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
                    <Link href="/">
                        <LogoTitle variant="h4">
                            Kietcii
                        </LogoTitle>
                    </Link>
                </LogoBox>
                <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                    {listItems}
                </MenuBox>
                <RightBox>
                    <StyledIconButton 
                        color='primary' 
                        size="small"
                        onClick={handleClickOpenSearchDialog}
                    >
                        <Search color='primary'/>
                    </StyledIconButton>
                    <StyledIconButton color='primary' size="small">
                        <Brightness4 color='primary'/>
                    </StyledIconButton>
                    {currentUser && <Avatar alt="Remy Sharp" src={currentUser.avatar} />}
                    {!currentUser && <Button onClick={()=>signIn('google') } variant="contained" disableElevation>
                        Đăng nhập
                    </Button>}
                </RightBox>
            </StyledToolbar>
        </NavbarFrame>
        <Dialog 
            setSearchDialog={handleClickCloseSearchDialog} 
            SearchDialog={SearchDialog}
        />
        </>
    )
}

export default Navbar
