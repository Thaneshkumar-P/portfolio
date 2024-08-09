import { projects } from "@/app/lib/projects"
import Image from "next/image"
import Link from "next/link"

export default function ProjectCard() {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex gap-4 flex-wrap justify-center">
          {projects.map((project, index) => (
            <Link href={`projects/${index}`}>
              <div className={'m-5 bg-gray-200 rounded-md flex items-center flex-col w-fit'} key={project.name}>
                <Image src={project.img} alt="HRA" width={300} className='p-5 rounded-[1.5rem] w-fit' loading="lazy"/>
                <div className='flex flex-col gap-10 mb-5 ml-5 mr-5'>
                  <h4 className='font-medium text-[25px]'>{project.name}</h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}