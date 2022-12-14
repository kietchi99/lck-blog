//sanity
import client from '../config'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

export function urlFor(source){
    return builder.image(source)
}

const blogfields = `
    _id,
    'tags': tags[]{
        _type == 'reference' => @->
    },
    title,
    'slug': slug.current,
    subtitle,
    date,
    'coverimage': coverimage.asset->url,
    'author': author->{ name, 'avatar': avatar.asset->url },
    hero,
    'category': category->{ title, 'slug': slug.current},
`

const tagfields = `
    title,
    'slug': slug.current
`

export async function getNewBlogs(){
    const results = await client.fetch(`*[_type == "blog"]| order(date desc){${blogfields}}[0..5]`)
    return results; 
}

export async function getAllTags(){
    const results = await client.fetch(`*[_type == "tag"]{${tagfields}}`)
    return results; 
}

export async function getAllBlogs(){
    const results = await client.fetch(`*[_type == "blog"]{${blogfields}}`)
    return results; 
}

export async function getPaginatedBlogs(offset=0, tag=false, category=false) {
    let url = ''
    if(tag) url = `*[_type == "blog" && "${tag}" in tags[]->slug.current] | {${blogfields}}[${offset}...${offset + 1} ]`
    else if(category) url = `*[_type == "blog" && category->slug.current == "${category}"] | {${blogfields}}[${offset}...${offset + 1} ]`
    else url = `*[_type == "blog"] | {${blogfields}}[${offset}...${offset + 1}]`
    const results = await client.fetch(url);
        
    return results;
}

export async function getBlogBySlug(slug) {
    const result = await client
        .fetch(`*[_type == "blog" && slug.current == $slug]{ 
            ${blogfields}
            content[]{..., "asset": asset->}
        }`, {slug})
        .then(res => res?.[0])
    return result; 
}

export async function getBlogByCategory(category) {
    const result = await client
        .fetch(`*[_type == "blog" && category->slug.current == "${category}"] | {${blogfields}}[0...6]`)
    return result; 
}

export async function getHero() {
    const result = await client
        .fetch(`*[_type == "blog" && hero==true] | {${blogfields}}`)
    return result; 
}
