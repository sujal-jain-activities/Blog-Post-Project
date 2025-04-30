import Navbar from "@/components/general/Navbar";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { prisma } from "./utils/dp";
import { PrismaClient } from "@prisma/client";
import BlogPostCard from "@/components/general/BlogPostCard";
import { Suspense } from "react";
const getData = async()=>{
    const data = await prisma.post.findMany({
      select:{
        title:true,
        imgUrl:true,
        authorImage:true,
        authorName:true,
        authorId:true,
        createdAt:true,
        updatedAt:true,
        id:true,
        content:true,
        published:true,
      }
})
    return data
}


export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await getData()
  return (
    <div className="flex items-center justify-center w-full ">
    <div className="py-6 w-[65rem] sm:w-[65rem] mx-auto">
      <h1 className="text-3xl font-bold  tracking-tight mb-8">LATEST POST</h1>
      <Suspense fallback={<div className="flex items-center justify-center w-full h-full"><h1 className="text-3xl font-bold  tracking-tight mb-8">Loading...</h1></div>}>
      <BlogPost/>
      </Suspense>
    </div>
    </div>
  )
}

const BlogPost = async()=>{
    const data = await getData()
    return(
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"> 
        {data.map((item,index)=>{
          return (
            <BlogPostCard data={item} key={item.id}/>
          )
        })}
      </div>
    )
}

function BlogPostsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm h-[400px] flex flex-col overflow-hidden"
          key={index}
        >
          {/* Image skeleton */}
          <Skeleton className="h-48 w-full rounded-none" />

          <div className="p-4 flex-1 flex flex-col gap-3">
            {/* Title skeleton */}
            <Skeleton className="h-6 w-3/4" />

            {/* Content skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>

            {/* Footer skeleton */}
            <div className="mt-auto flex items-center justify-between pt-4">
              <div className="flex items-center">
                <Skeleton className="h-8 w-8 rounded-full mr-2" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}