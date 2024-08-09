'use client'

import { ChevronLeftIcon, ChevronRightIcon, LinkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import { projects } from "@/app/lib/projects";
import Link from "next/link";


export default function ProjectDisplay() {

  const [active, setActive] = useState(0)

  const handleNext = () => {
    if(active === (projects.length - 1)) return

    setActive(active + 1)
    
  }

  const handlePrev = () => {
    if(active === 0) return

    setActive(active - 1)
  }


  return (
    <>
      {projects.map((project, index) => (
        <div className={clsx('m-5 bg-gray-200 rounded-md flex items-center xl:flex-row flex-col',
          {'hidden': index !== active}
        )} key={project.name}>
          {/* <Link href={`projects/${index}`}> */}
            <Image src={project.img} alt="HRA" width={650} className='p-5 rounded-[1.5rem]'/>
          {/* </Link> */}
          <div className='flex flex-col gap-10'>
            {/* <Link href={`projects/${index}`}> */}
            <div className="h-[50%]">
              <h4 className='font-medium xl:text-[50px] text-[15px] animate-slide-out'>{project.name}</h4>
            </div> 
            {/* </Link> */}
            <div className='flex gap-3 xl:justify-start justify-center xl:mb-0 mb-5 h-[50%]'>
              <button className='w-[50px] bg-gray-300 p-3 rounded hover:bg-gray-500' onClick={handlePrev}>
                <ChevronLeftIcon />
              </button>
              <button className='w-[50px] bg-gray-300 p-3 rounded hover:bg-gray-500' onClick={handleNext}>
                <ChevronRightIcon />
              </button>
              <Link href={`projects/${index}`}>
                <button className='w-[50px] bg-gray-300 p-3 rounded hover:bg-gray-500'>
                  <LinkIcon />
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}