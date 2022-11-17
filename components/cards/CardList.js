//react
import React from 'react'

//material
import { Grid } from '@mui/material'

//components
import Card from './Card'
import CardListItem from '../cardListItem/CardListItem'

const CardList = ({ items=[], filter}) => {

    const listItems = items.map(page=>page.map(item=>{
        return filter===0? <Card key={item.slug} item={item}/> : <CardListItem key={item.slug} item={item}/>
    }))

    return (
        <Grid spacing={2} container mb={6}>
            {listItems}
        </Grid>
    )
}

export default CardList