//react
import React from 'react'

//material
import { Paper, Grid, Box, styled, CardMedia, Typography } from '@mui/material'

//moment
import moment from 'moment'

//next
import Link from 'next/link'

const TypographyStyled = styled(Typography)(({theme})=>({
    color: 'black',
    fontWeight: '700',
    paddingBottom: '4px',
    "&:hover": {
        color: theme.palette.primary.main,
        cursor: "pointer"
    } 
}))

const SmallCard = ({ item }) => {
    
    return (
        <Paper sx={{padding: '10px'}} elevation={0}>
            <Grid container>
                <Grid item xs={12}> 
                    <CardMedia 
                        sx={{borderRadius: '10px'}}
                        height= '100%'
                        component="img"
                        image={item.coverimage}
                    />
                    <Typography variant='caption' mt={1} color='secondary'>{moment(item.date).format('MM/DD/YYYY')}</Typography>
                </Grid>
                <Grid item xs={12} pt={3} pb={1}>
                    <Box>
                        <Link href={`/blogs/${item.slug}`}>
                            <TypographyStyled>
                                {item.title}
                            </TypographyStyled>
                        </Link>
                    </Box >
                </Grid>
            </Grid>
        </Paper>
    )
}

export default SmallCard
