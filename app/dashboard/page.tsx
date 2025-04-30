
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { prisma } from '../utils/dp'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import BlogPostCard from '@/components/general/BlogPostCard'

const getData = async(userId:string)=>{
    const data = await prisma.post.findMany({
      where:{
        authorId:userId
      },
      orderBy:{
        createdAt:'desc'
      }
    })
    return data
}



const page = async() => {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    const data = await getData(user?.id as string)
  return (
    <>
    <div className='flex flex-col items-center justify-center w-full '>
      <div className=' w-full sm:w-[65rem] flex justify-between pt-4 '>
          <h2 className='font-bold text-3xl'>Your Blogs</h2>
          <Link href='/dashboard/create' className={buttonVariants({size:'lg',variant:'secondary'})}>Create Post</Link>
      </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:w-[65rem] w-full mx-auto mt-4'>
          {data.map((item,index)=>(
            <BlogPostCard data={item} key={item.id}/>
          ))}
      </div>
      </>
  )
}

export default page