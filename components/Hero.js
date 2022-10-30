import React from 'react'
import { Paper, Grid, Box, Stack, styled, CardMedia, Typography, Avatar, Link} from '@mui/material'
import moment from 'moment'

const Hero = ({items=[], loading}) => {
    const blog = items.map(page=>page.find(item=>{
        if(item.hero) return item 
    }))
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
        blog&&
        <HeroFrame>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}> 
                    <CardMedia 
                        sx={{borderRadius: '30px'}}
                        height= '100%'
                        component="img"
                        image={blog[0].coverimage}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} pt={3} pb={3} pl={6} pr={3}>
                    <Stack spacing={2} justifyContent="space-between">
                        <Box>
                            <Link 
                                href={`/blogs/${blog[0].slug}`}
                                onClick={()=>loading()}
                            >
                                <HerroTitle variant='h4'>
                                    {blog[0].title}
                                </HerroTitle>
                            </Link>
                            <HerroContent>
                                {blog[0].subtitle}
                            </HerroContent>
                        </Box >
                        <Stack direction='row' spacing={2} sx={{fontsize: '1px'}}>
                            <Avatar alt="Travis Howard" sx={{ width: 30, height: 30, border: '2px solid #1565c0'}} src={blog[0].author.avatar} />
                            <Typography variant='caption' pt={1} color='secondary'>{blog[0].author.name}.  {moment(blog[0].date).format('MM/DD/YYYY')}</Typography>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </HeroFrame>
    )
}

export default Hero
