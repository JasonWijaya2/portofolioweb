import { portofolioImg } from '@/public'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'

const Projects = () => {
  return (
    <section
      id="project" 
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
        <SectionTitle title="My Project" />
        {/* Project One */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row gap-6'>
                <a
                  className='w-full xl:w-1/2 h-auto relative group'
                  href=""
                  target='_blank'>
                <div>
                    <Image className="w-full h-full object-contain"
                      src={portofolioImg}
                      alt='portofolioImg'/>
                </div>
                </a>
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                    <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                        Feature Project
                    </p>
                    <h3 className='text-2xl font-bold'>
                        Portofolio Website
                    </h3>
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                        This Portofolio Website is the first project I have made on my own. This project Inspired by the designed of Brittany Chiang.
                        {" "}
                        <a 
                          href='https://brittanychiang.com/'
                          target='_blank' 
                          className='text-textGreen'>
                            Click here to see Brittany Chiang Portoolio Website
                        </a>
                    </p>
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                        <li>Nextjs</li>
                        <li>Typescript</li>
                        <li>Tailwindcss</li>
                        <li>Framer Motion</li>
                        <li>Vercel</li>
                    </ul>
                    <div className='text-2xl flex gap-4'>
                        <a
                          className='hover:text-textGreen duration-300'
                          href="https://github.com/JasonWijaya2/portofolioweb"
                          target='_blank'>
                            <TbBrandGithub />
                        </a>
                        <a
                          className='hover:text-textGreen duration-300'
                          href="https://jasonwijayaportofolio-jason-wijayas-projects.vercel.app/"
                          target='_blank'>
                            <RxOpenInNewWindow />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Project Two */}
        {/* Project Three */}
    </section>
  )
}

export default Projects