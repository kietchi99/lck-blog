import React from 'react'
import Card from './Card'
import List from './List'
import { Grid } from '@mui/material'

const CardList = ({ items=[], filter, loading }) => {
    const listItems = items.map(page=>page.map(item=>{
        return filter===0? <Card loading={loading} key={item.slug} item={item}/> : <List loading={loading} key={item.slug} item={item}/>
    }))

    return (
        <Grid spacing={2} container>
            {listItems}
        </Grid>
    )
}

export default CardList
