import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[20px] w-11/12 max-w-2xl mx-auto'>
      <NavLink to={`/blog/${post.id}`} >
        <span className="font-bold text-lg">{post.title}</span>
      </NavLink>
      <p>
        By
        <span className="text-sm my-1"> {post.author} </span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
            <span className="font-semibold underline cursor-pointer">{post.category}</span>
        </NavLink>
      </p>
      <p className="text-sm"> Posted on {post.date} </p>
      <p className="mt-4 mb-2"> {post.content}</p>
      <div className='flex gap-4'>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className="text-xs font-semibold underline text-blue-700 cursor-pointer ">{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
