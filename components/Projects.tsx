import { batchInvoice, newsWebsite, portofolioImg, vcyber, wecare } from '@/public'
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
                                alt='portofolioImg' />
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
            <div className='w-full flex flex-col items-center justify-center gap-28 mt-10 lg:-ml-8'>
                <div className='flex flex-col xl:flex-row-reverse gap-6'>
                    <a
                        className='w-full xl:w-1/2 h-auto relative group'
                        href="https://github.com/JasonWijaya2/news-website"
                        target='_blank'>
                        <div>
                            <Image className="w-full h-full object-contain"
                                src={newsWebsite}
                                alt='newsWebsite' />
                        </div>
                    </a>
                    <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-left xl:-mr-16 z-10'>
                        <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                            Feature Project
                        </p>
                        <h3 className='text-2xl font-bold'>
                            Simple News Website
                        </h3>
                        <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                            This News Website can sort by category, country, and search for the topic.
                            This News Website using News API.
                            This website can only be run via localhost due to CORS from the News API and with limited request.
                            {" "}
                            <a
                                href='https://newsapi.org/'
                                target='_blank'
                                className='text-textGreen'>
                                Click here to see News API
                            </a>
                        </p>
                        <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                            <li>Reactjs</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                            <li>Vite</li>
                            <li>News API</li>
                        </ul>
                        <div className='text-2xl flex gap-4'>
                            <a
                                className='hover:text-textGreen duration-300'
                                href="https://github.com/JasonWijaya2/news-website"
                                target='_blank'>
                                <TbBrandGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Project Three */}
            <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                <div className='flex flex-col xl:flex-row gap-6'>
                    <a
                        className='w-full xl:w-1/2 h-auto relative group'
                        href="https://vcyber-shop.vercel.app/"
                        target='_blank'>
                        <div>
                            <Image className="w-full h-full object-contain"
                                src={vcyber}
                                alt='vcyberImg' />
                        </div>
                    </a>
                    <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                        <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                            Feature Project
                        </p>
                        <h3 className='text-2xl font-bold'>
                            V Cyber Gaming Gear Shop Website
                        </h3>
                        <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                            This is a gaming gear sales simulation website that implements Redux state management. This website can sign in to a google account using Next Auth and can simulate payments using Stripe.com. While this website is still not responsive for the mobile version.
                        </p>
                        <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                            <li>Nextjs</li>
                            <li>Typescript</li>
                            <li>Tailwindcss</li>
                            <li>StripeJS</li>
                            <li>NextAuth</li>
                            <li>Redux</li>
                        </ul>
                        <div className='text-2xl flex gap-4'>
                            <a
                                className='hover:text-textGreen duration-300'
                                href="https://github.com/JasonWijaya2/vcyber-shop"
                                target='_blank'>
                                <TbBrandGithub />
                            </a>
                            <a
                                className='hover:text-textGreen duration-300'
                                href="https://vcyber-shop.vercel.app/"
                                target='_blank'>
                                <RxOpenInNewWindow />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Project Four */}
            <div className='w-full flex flex-col items-center justify-center gap-28 mt-10 lg:-ml-8'>
                <div className='flex flex-col xl:flex-row-reverse gap-6'>
                    <a
                        className='w-full xl:w-1/2 h-auto relative group'
                        href="https://drive.google.com/file/d/1hu6MosORDnoRVdG5u8oKOnRNWI5-LmHZ/view?usp=sharing"
                        target='_blank'>
                        <div>
                            <Image className="w-full h-full object-contain"
                                src={batchInvoice}
                                alt='batchInvoice' />
                        </div>
                    </a>
                    <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start text-left xl:-mr-16 z-10'>
                        <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                            Feature Project
                        </p>
                        <h3 className='text-2xl font-bold'>
                            Batch Invoice
                        </h3>
                        <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                            This project, for the Finance and Accounting Division in the Philippines, aims to create invoice documents through batching. This project is intended solely for internal users at Kalbe International, it will only be able to demonstrate a demo version.
                            {" "}
                            <a
                                href='https://drive.google.com/file/d/1hu6MosORDnoRVdG5u8oKOnRNWI5-LmHZ/view?usp=sharing'
                                target='_blank'
                                className='text-textGreen'>
                                Click here to see Batch Invoice Demo
                            </a>
                        </p>
                        <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                            <li>Reactjs</li>
                            <li>Javascript</li>
                            <li>ChakraUI</li>
                            <li>MySQL</li>
                            <li>Prisma ORM</li>
                            <li>Express.js</li>
                        </ul>
                        <div className='text-2xl flex gap-4'>
                            <a
                                className='hover:text-textGreen duration-300'
                                href="https://drive.google.com/file/d/1hu6MosORDnoRVdG5u8oKOnRNWI5-LmHZ/view?usp=sharing"
                                target='_blank'>
                                <RxOpenInNewWindow />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Project Five */}
            <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
                <div className='flex flex-col xl:flex-row gap-6'>
                    <a
                        className='w-full xl:w-1/2 h-auto relative group'
                        href="https://drive.google.com/drive/folders/1ZLA2Vl2RiwDvRqt3nIXN1pIqmzrJ_mjG?usp=sharing"
                        target='_blank'>
                        <div>
                            <Image className="w-full h-full object-contain"
                                src={wecare}
                                alt='wecare' />
                        </div>
                    </a>
                    <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                        <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                            Feature Project
                        </p>
                        <h3 className='text-2xl font-bold'>
                            We Care App
                        </h3>
                        <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                            This project has three Application, App for Patient, App for Doctor, and App for Pharmacy.
                            We Care Patient for public user, We Care Doctor for Doctor and We Care Pharmacy who has a relation with Kalbe International.
                            This project is intended solely for internal users at Kalbe International, it will only be able to demonstrate a demo version.
                            {" "}
                            <a
                                href='https://drive.google.com/drive/folders/1ZLA2Vl2RiwDvRqt3nIXN1pIqmzrJ_mjG?usp=sharing'
                                target='_blank'
                                className='text-textGreen'>
                                Click here to see We Care
                            </a>
                        </p>
                        <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                            <li>React Native</li>
                            <li>MySQL</li>
                            <li>Prisma ORM</li>
                            <li>Express.js</li>
                        </ul>
                        <div className='text-2xl flex gap-4'>
                            <a
                                className='hover:text-textGreen duration-300'
                                href="https://drive.google.com/drive/folders/1ZLA2Vl2RiwDvRqt3nIXN1pIqmzrJ_mjG?usp=sharing"
                                target='_blank'>
                                <RxOpenInNewWindow />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects