import Navbar from '@/app/ui/navbar';
import Image from 'next/image';
import React from 'public/skill-images/react.svg'
import Express from 'public/skill-images/express.svg'
import Javascript from 'public/skill-images/javascript.svg'
import JWT from 'public/skill-images/JWT.svg'
import bootstrap from 'public/skill-images/bootstrap.svg'
import mongoDb from 'public/skill-images/mongodb.svg'
import ROR from 'public/skill-images/rails.svg'
import git from 'public/skill-images/git.svg'
import mui from 'public/skill-images/material-ui-1.svg'
import gql from 'public/skill-images/graphql.svg'
import mysql from 'public/skill-images/mysql.svg'
import rest from 'public/skill-images/rest-api-icon.svg'
import ProjectDisplay from '../ui/home/project-display';

export default function Page() {

  let icons = [
    {icon: React, name: 'React'}, 
    {icon: Express, name: 'Express'}, 
    {icon: ROR, name: 'Ruby on Rails'}, 
    {icon: Javascript, name: 'Javascript'}, 
    {icon: mongoDb, name: 'MongoDB'}, 
    {icon: mysql, name: 'MySQL'}, 
    {icon: git, name: 'Git'}, 
    {icon: bootstrap, name: 'Bootstrap'}, 
    {icon: mui, name: 'Material UI'},  
    {icon: JWT, name: 'JWT'}, 
    {icon: gql, name: 'GraphQL'}, 
    {icon: rest, name: 'Rest APIs'}, 
  ]

  return (
    <>
      <div className='mt-[150px] md:mb-[150px]'>
        <div className='flex justify-center items-center'>
          <div>
            <div className='absolute xl:mt-[117px] mt-[45px] hidden md:block'>
              <p className='font-medium xl:text-[40px] text-[20px] h-fit bg-white'>Software Engineer</p>
            </div>
            <h1 className='font-medium xl:text-[100px] border-b-4 text-[40px]'>Thanesh Kumar</h1>
          </div>
        </div>
      </div> 
      <div className='m-7'>
        <div className='flex items-center p-10'>
          <h1 className='font-medium text-[30px] heading-font'>About</h1>
          <hr className='ms-2 h-0.5 border-2 border-black w-full mt-2.5'></hr>
        </div>
        <div className='md:pe-10 md:ps-10 pe-5 ps-5'> 
          <div className='border border-black rounded p-5 flex flex-col'>
            <p className='text-center md:text-md text-sm'>I am a passionate and dedicated developer with a solid background in building web and native applications. With a Bachelor of Engineering degree from Dr. N.G.P Institute of Technology, Coimbatore, and a CGPA of 8.84, I have honed my skills in various programming languages and technologies. My education, combined with hands-on experience, has equipped me with the expertise to deliver high-quality, innovative solutions.</p>
            <div className='flex md:flex-row flex-col gap-5 p-5 justify-evenly'>
              <div className='border-2 border-black rounded p-5 flex flex-col gap-5'>
                <p className='text-center font-medium md:text-md text-sm'>Experiance</p>
                <p className='text-center font-medium text-gray-500 md:text-md text-sm'>Intern: 3 months</p>
              </div> 
              <div className='border-2 border-black rounded p-5 flex flex-col gap-5'>
                <p className='text-center font-medium md:text-md text-sm'>Qualification</p>
                <p className='text-center font-medium text-gray-500 md:text-md text-sm'>B.E. CSE</p>
              </div>
              <div className='border-2 border-black rounded p-5 flex flex-col gap-5'>
                <p className='text-center font-medium md:text-md text-sm'>Preferred Language</p>
                <p className='text-center font-medium text-gray-500 md:text-md text-sm'>Javascript</p>
              </div> 
            </div>
          </div>
        </div>
      </div>
      <div className='ms-7'>
        <div className='flex items-start justify-center md:flex-row flex-col p-5'>
          <div className='p-5 md:block flex w-full items-center md:w-fit'>
            <hr className='md:ms-2 me-2 md:mb-[80px] h-0.5 border-2 border-black mt-2.5 md:rotate-[270deg] w-full'></hr>
            <h1 className='font-medium text-[35px] rotate-275 heading-font md:rotate-[270deg]'>Skills</h1>
            <hr className='ms-2 md:mt-[80px] h-0.5 border-2 border-black mt-2.5 md:rotate-[270deg] w-full'></hr>
          </div>
          <div className='flex flex-col '>
            <p className='text-center md:p-10 md:pt-0 pb-10 pt-0 pl-0 md:mr-5 flex justify-center'>I am proficient in Java, JavaScript, and C, and I have extensive experience with libraries, frameworks, and tools such as React.js, Express.js, Ruby on Rails, Node.js, Redux, Git, and JSON Web Token (JWT). My database expertise includes MySQL and MongoDB.</p>
            <div className='flex flex-row md:gap-20 gap-10 flex-wrap justify-center'>
              {icons.map((icon) => 
                <div className='flex justify-center flex-col items-center gap-2'>
                  <Image src={icon.icon} alt={icon.name} width={50} />
                  <p>{icon.name}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='ms-7'>
        <div className='flex items-center p-10'>
          <hr className='me-2 h-0.5 border-2 border-black w-full mt-2.5'></hr>
          <h1 className='font-medium text-[35px] heading-font'>Projects</h1>
          <hr className='ms-2 h-0.5 border-2 border-black w-full mt-2.5'></hr>
        </div>
        <div>
          <ProjectDisplay />
        </div>
      </div>
    </>
  );
}