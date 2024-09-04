'use client'

import { projects } from "@/app/lib/projects";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {

  let { id } = useParams()

  let project = projects[Number(id)]

  return (
    <>
      <div className="md:m-16 m-8">
        <div className="flex items-center gap-5">
          <div className="hover:bg-gray-200 rounded-full p-1.5">
            <Link href={'/projects'}>
              <ArrowLeftIcon width={35} />
            </Link>
          </div>
          <h4 className="font-medium md:text-[25px] text-[20px]">{project.name}</h4>
        </div>
        <div className="mt-5 w-[100%] flex gap-4 items-center">
          {/* <div className="flex w-full gap-4 md:flex-row flex-col"> */}
            {project.displayImg?.map(img => (
              <div>
                <Image src={img} alt='img'/>
              </div>
            ))}
          {/* </div> */}
        </div>
        <div className="mt-5 mb-5 md:m-5">
          <div className={'p-5 bg-gray-200 rounded-md flex items-start flex-col w-full'} key={project.name}>
            <div className="bg-white flex flex-row justify-start mt-2 mb-2 p-4 rounded w-full gap-5">
              <h4 className='font-medium'>Deployment</h4>
              <Link href={project.dLink} className="underline" target="new" >{project.dLink}</Link>
            </div>
            <div className="bg-white flex flex-row justify-start mt-2 mb-2 p-4 rounded w-full gap-5">
              <h4 className='font-medium'>Status</h4>  
              <h4 className='font-small'>{project.status}</h4>
            </div>
            <div className="bg-white flex flex-row justify-start mt-2 mb-2 p-4 rounded w-full gap-5">
              <h4 className='font-medium'>Repository</h4>
              <Link href={project.git} className="underline" target="new">{project.git}</Link>
            </div>
            <div className="bg-white flex flex-row justify-start mt-2 mb-2 p-4 rounded w-full gap-5">
              <h4 className='font-medium'>Type</h4>
              <h4 className='font-small'>{project.type}</h4>
            </div>
          </div>
          <h4 className="m-5 font-medium text-xl">Tech Stack</h4>
          <div className={'md:m-5 mt-5 mb-5 bg-gray-200 rounded-md flex flex-wrap items-center xl:flex-row flex-wrap justify-around'} key={project.name}>
            {
              project.tech.map((tech: String) => (
                <div className="bg-white flex flex-col justify-center m-4 p-4 rounded">
                  {tech}
                </div>                  
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}






