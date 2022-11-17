// swr
import useSWR from 'swr'
import useSWRInfinite from 'swr/infinite'

const fetcher = url => fetch(url).then(res => res.json())

export const useGetBlogsPages = (query) => {
    const result = useSWRInfinite(
        (index, previousPageData) => {
            if (index === 0 ) {
                if(query?.tag) return `/api/blogs?tag=${query.tag}`
                if(query?.category) return `/api/blogs?category=${query.category}`
                return '/api/blogs'
            }

            if (!previousPageData.length) {
                return null
            }
            if (query?.tag) return `/api/blogs?tag=${query?.tag}&&offset=${index * 1}`
            if (query?.category) return `/api/blogs?category=${query?.category}&&offset=${index * 1}`
            return `/api/blogs?offset=${index * 1}`
        },
        fetcher
    )
    let hitEnd = false;
    const { data } = result;

    if (data) {
        hitEnd = data[data.length - 1].length === 0
    }
    console.log(hitEnd)

    if(!data) return {...result, hitEnd, pending: true}

    return {...result, hitEnd}
}