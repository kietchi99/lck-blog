//react
import React from 'react'

//next
import Link from 'next/link'

//matterial
import { Grid, CardActions, Card as CardItem, CardContent, CardMedia, Typography, Stack, Box, IconButton, styled, Avatar} from '@mui/material'
import { Share } from '@mui/icons-material'
import { margin } from '@mui/system'

//moment
import moment from 'moment'


const CardTitle = styled(Typography)(({theme})=>({
    color: 'black',
    cursor: "pointer",
    fontWeight: 700,
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

const Card = ({ item }) => {
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
                    {item.tags?.map(tag=>(
                        <Link
                            key={tag.slug.current}
                            href={`/blogs/tags/${tag.slug.current}`}
                        >
                            <CardTag key={tag.title}>#{tag.title}</CardTag>
                        </Link>
                    ))}
                </Box>
                </CardContent>
                <CardContent>
                <Link href={`/blogs/${item.slug}`}>
                    <CardTitle gutterBottom variant="h5" component="div">
                        {item.title}
                    </CardTitle>
                </Link>
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
