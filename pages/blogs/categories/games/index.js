//react
import { useState } from 'react'

//hooks
import { useGetBlogsPages } from 'hooks/pagination';
import { getPaginatedBlogs, getNewBlogs, getAllTags } from 'lib/sanity/queries/blogs';

//components
import BlogListLayout from 'components/layouts/BlogListLayout'

export default function Game({ blogs, newBlogs, tags }) {

  const [filter, setFilter] = useState(0)

  const handleFiltering = () => {
    setFilter(+!filter)
  }

  const { data, size, setSize, hitEnd, pending=false } = useGetBlogsPages({category: "game"})

  return (
    <BlogListLayout 
      blogs={blogs}
      newBlogs={newBlogs}
      data={data}
      tags={tags}
      size={size}
      setSize={setSize}
      hitEnd={hitEnd}
      pending={pending}
      handleFiltering={handleFiltering}
      filter={filter}
    />
  )
}

export async function getStaticProps() {
  const blogs = await getPaginatedBlogs(0, false, "game")
  const tags = await getAllTags()
  const newBlogs = await getNewBlogs()
  return {
    props: {
      blogs, newBlogs, tags
    }
  }
}