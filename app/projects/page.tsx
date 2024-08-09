import Navbar from '@/app/ui/navbar';
import ProjectCard from '../ui/projects/project-card';


export default function Page() {



  return (
    <>
      <div className='flex justify-center'>
        <p className='text-[40px]'>List of Projects</p>
      </div>
      <ProjectCard />
    </>
  );
}