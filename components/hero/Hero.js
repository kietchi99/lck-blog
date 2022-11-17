//react
import React from 'react'

//material
import { Paper, Grid, Box, Stack, styled, CardMedia, Typography, Avatar } from '@mui/material'

//moment
import moment from 'moment'

//next
import Link from 'next/link'


const Hero = ({item}) => {
    const HerroTitle = styled(Typography)(({theme})=>({
        color: 'black',
        fontWeight: '600',
        paddingBottom: '14px',
        "&:hover": {
            color: theme.palette.primary.main,
            cursor: "pointer"
        } 
    }))
    const HerroContent = styled(Typography)(({theme})=>({
        lineHeight: '30px',
        fontSize: '20px'
    }))

    const HeroFrame = styled(Paper)(({theme})=>({
        color: theme.palette.secondary.main,
        padding: '10px'
    }))
    
    return (
        item&&
        <HeroFrame>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}> 
                    <CardMedia 
                        sx={{borderRadius: '30px'}}
                        height= '100%'
                        component="img"
                        image={item[0]?.coverimage}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} pt={3} pb={3} pl={6} pr={3}>
                    <Stack spacing={2} justifyContent="space-between">
                        <Box>
                            <Link href={`/blogs/${item[0]?.slug}`}>
                                <HerroTitle variant='h4'>
                                    {item[0]?.title}
                                </HerroTitle>
                            </Link>
                            <HerroContent>
                                {item[0]?.subtitle}
                            </HerroContent>
                        </Box >
                        <Stack direction='row' spacing={2} sx={{fontsize: '1px'}}>
                            <Avatar alt="Travis Howard" sx={{ width: 30, height: 30, border: '2px solid #1565c0'}} src={item[0]?.author.avatar} />
                            <Typography variant='caption' pt={1} color='secondary'>{item[0]?.author.name}.  {moment(item[0]?.date).format('MM/DD/YYYY')}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </HeroFrame>
    )
}

export default Hero
