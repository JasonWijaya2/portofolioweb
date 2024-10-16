import SectionTitle from "./SectionTitle"
import { AiFillThunderbolt } from "react-icons/ai"
import Image from "next/image"
import { profileImg } from "@/public"

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8">
        <SectionTitle title="About Me"/>
        <div className="flex flex-col lgl:flex-row gap-16">
            <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
                <p>
                    Hello! My Name is Jason Wijaya. I am a graduate of
                    <span className="text-textGreen"> Brawijaya University, Computer Science Faculty, and Computer Engineering Study Program in 2024</span>. 
                    When I was still studying, I was the Vice Chairman of
                    <span className="text-textGreen"> Raion Community </span>.
                    Then, I also participated in Merdeka Belajar in the 
                    <span className="text-textGreen"> Ruangguru CAMP </span> 
                    Independent Study program. Currently, I am completing an internship at 
                    <span className="text-textGreen">Kalbe International Pte. Ltd. </span>
                    as an IT Developer.
                </p>
                <p>Here are a few technologies I have been learned: </p>
                <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        React.js
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        Tailwindcss
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        Next.js
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        HTML5
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        CSS3
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        Bootstrap
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        Chakra UI
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        C++
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        C#
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        Arduino IDE
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        Python
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        Netlify
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        Vercel
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        Git
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        Express.js
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        SQL Server
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        Prisma ORM
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-textGreen">
                            <AiFillThunderbolt />
                        </span>
                        React Native
                    </li>
                </ul>
            </div>
            <div className="w-full lgl:w-1/3 h-80 relative group">
                <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
                    <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                        <Image className="rounded-lg h-full object-cover" src={profileImg} alt="profileImg"/>
                        <div className="hidden lgl:inline-block absolute w-full h-80 rounded-md top-0 left-0 group-hover:bg-textGreen/20 duration-300"></div>
                    </div>
                </div>
                <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
            </div>
        </div>
    </section>
  )
}

export default About