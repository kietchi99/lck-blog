import useSWR from 'swr'

export const fetcher = url => fetch(url).then(res => res.json())