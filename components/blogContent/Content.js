//react
import React from 'react'

//netx
import Image from 'next/image'

//sanity
import BlockContent from '@sanity/block-content-to-react'
import { urlFor } from 'lib/sanity/queries/blogs'

//material
import { Box, Stack, styled, Button, Divider } from '@mui/material'

//react share
import { FacebookShareButton, TwitterShareButton } from "react-share"
import { FacebookIcon, TwitterIcon } from "react-share";


const serializers = {
    types: {
        image: ({node: {asset, alt}}) => {
            return (
                <div>
                    <Image src={urlFor(asset.url).height(300).fit('max')} alt={alt}/>
                    <div className="image-alt">{alt}</div>
                </div>
            )
        }
    }
}

//styled
const ContentBox = styled(Box)(({theme})=>({
    background: 'white',
    borderRadius: '10px'
}))

const Content = ({ content, title }) => {
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
                    <TwitterShareButton
                        title={`${title}`}
                        url={"http://localhost:3000/blogs/chia-se-mot-so-skin-tuy-bien-con-tro-chuot-dep-cho-windows"}
                    >
                        <TwitterIcon size={32} round />
                    </TwitterShareButton>
                    <FacebookShareButton
                        url={"http://localhost:3000/blogs/chia-se-mot-so-skin-tuy-bien-con-tro-chuot-dep-cho-windows"}
                        quote={`${title}`}
                    >
                        <FacebookIcon size={32} round />
                    </FacebookShareButton>
                </Stack>
            </Box>
        </ContentBox>
    )
}

export default Content