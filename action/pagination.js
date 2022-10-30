import useSWRInfinite from 'swr/infinite'
import useSWR from 'swr'
import { fetcher } from 'action'

let currentPage

export const useGetBlogsPages = () => {
    const result = useSWRInfinite(
        (index, previousPageData) => {
            if (index === 0 ) {
                return '/api/blogs'
                currentPage = index
            }

            if (!previousPageData.length) {
                return null
            }

            return `/api/blogs?offset=${index * 6}`
        },
        fetcher
    )

    let hitEnd = false;
    const { data } = result;

    if (data) {
        hitEnd = data[data.length - 1].length === 0
    }

    if (!data && !currentPage) return {...result, hitEnd, pending: true}

    return {...result, hitEnd}
}