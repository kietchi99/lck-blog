import React from 'react'
import Link from 'next/link'
import { Grid, CardActions, Card as CardItem, CardContent, CardMedia, Typography, Stack, Box, IconButton, styled, Avatar} from '@mui/material'
import { Share, FavoriteBorder } from '@mui/icons-material'
import { margin } from '@mui/system'
import moment from 'moment'

const CardTitle = styled(Typography)(({theme})=>({
    cursor: "pointer",
    fontWeight: 600,
    "&:hover": {
        color: theme.palette.primary.main,
        cursor: "pointer"
    } 
}))
const CardTag = styled(Typography)(({theme})=>({
    cursor: "pointer",
    display: 'inline-block',
    margin: '0 5px',
    color: theme.palette.primary.main
}))

const Card = ({ item, loading }) => {
    return (
        <Grid item xs={12} sm={6}>
            <CardItem sx={{ maxWidth: '100%'}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.coverimage}
                    alt="green iguana"
                />
                <CardContent>
                <Box>
                    {item.tags?.map(tag=><CardTag>#{tag.title}</CardTag>)}
                </Box>
                </CardContent>
                <CardContent>
                <CardTitle gutterBottom variant="h5" component="div" sx={{fontweight: '700px'}}>
                    <Link 
                        href={`/blogs/${item.slug}`}
                        onClick={()=>loading()}
                    >
                        {item.title}
                    </Link>
                </CardTitle>
                <Typography variant="body2" color="text.secondary">
                    {item.subtitle}
                </Typography>
                </CardContent>
            <CardActions>
                <Stack direction='row' justifyContent="space-between" width='100%'>
                    <Stack direction='row'>
                        <Avatar alt="Travis Howard" sx={{ width: 30, height: 30, marginRight: '4px', border: '2px solid #1565c0'}} src={item.author.avatar} />
                        <Typography variant='caption' mt={1} color='secondary'>{item.author.name}.  {moment(item.date).format('MM/DD/YYYY')}</Typography>
                    </Stack>
                    <Box>
                        <IconButton size="small" color="primary">
                            <Share />
                        </IconButton>
                    </Box>
                </Stack>
            </CardActions>
        </CardItem>
    </Grid>
    )
}

export default Card
