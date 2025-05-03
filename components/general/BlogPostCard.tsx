import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

interface IappProps {
     data: {
        id: string;
        title: string;
        content: string;
        published: boolean;
        authorId: string;
        authorName: string;
        imgUrl: string;
        authorImage: string;
        createdAt: Date;
        updatedAt: Date;
    }
}

const BlogPostCard = ({data}:IappProps) => {
  return (
    <div className='group w-80 relative overflow-hidden rounded-lg bg-zinc-950 mx-auto shadow-white-md'>
        <Link href={`/post/${data.id}`} className='block w-full h-full '>
            <div className='relative w-full h-64 overflow-hidden'>
            <Image src={data.imgUrl} alt='Image for blog' fill className='object-cover transition-transform duration-300 hover:scale-105' unoptimized/>
            </div>
            <div className='p-4'>
                <h3 className='text-lg font-semibold text-white group-hover:text-blue-500 transition-colors duration-300'>
                    {data.title}
                </h3>
                <p className='text-sm text-gray-400 mt-2 line-clamp-3'>{data.content}</p>
                <div className='flex items-center justify-between mt-4'>
                    <div className='flex item-center space-x-2'>
                        <div className='relative w-8 h-8 rounded-full overflow-hidden'>
                            <img src={data.authorImage} alt='Author Image'  width={32} height={32}  className='object-cover'/>
                        </div>
                        <p className='text-sm items-center text-gray-300'>{data.authorName}</p>
                    </div>
                    <p className='text-sm text-gray-500'>{new Date(data.createdAt).toLocaleDateString()}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default BlogPostCard

