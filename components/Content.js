import React from 'react'
import BlockContent from '@sanity/block-content-to-react'
import { Box, Stack, styled, Button, Divider } from '@mui/material'
import { Facebook, Twitter } from "@mui/icons-material/";
import { urlFor } from 'lib/api'

const ContentBox = styled(Box)(({theme})=>({
    background: 'white',
    borderRadius: '10px'
}))

const serializers = {
    types: {
        image: ({node: {asset, alt}}) => {
            return (
                <div>
                    <img src={urlFor(asset.url).height(300).fit('max')}/>
                    <div className="image-alt">{alt}</div>
                </div>
            )
        }
    }
}

const Content = ({ content }) => {
    return (
        <ContentBox mt={2} pt={6} pr={6} pl={6} pb={1}>
            <Box>
                <BlockContent 
                    serializers={serializers}
                    blocks={content}
                />
            </Box>
            <Divider />
            <Box pt={1}>
                <Stack direction='row' spacing={1}>
                <Button size="small" startIcon={<Facebook />} variant="contained" disableElevation>
                    Facebook
                </Button>
                <Button startIcon={<Twitter />} variant="contained" disableElevation>
                    Twitter
                </Button>
                </Stack>
            </Box>
        </ContentBox>
    )
}

export default Content

