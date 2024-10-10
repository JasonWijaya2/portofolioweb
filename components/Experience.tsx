import { useState } from "react"
import SectionTitle from "./SectionTitle"
import Raion from "./experience/Raion"
import Ruangguru from "./experience/Ruangguru";
import KalbeInternational from "./experience/KalbeInternational";


const Experience = () => {
    const [expRaion, setExpRaion] = useState(true);
    const [expRuangguru, setExpRuangguru] = useState(false);
    const [expKalbeInternational, setExpKalbeInternational] = useState(false);

    const handleRaion = () => {
        setExpRaion(true)
        setExpRuangguru(false)
        setExpKalbeInternational(false)
    };

    const handleRuangguru = () => {
        setExpRaion(false)
        setExpRuangguru(true)
        setExpKalbeInternational(false)
    };

    const handleRKalbeInternational = () => {
        setExpRaion(false)
        setExpRuangguru(false)
        setExpKalbeInternational(true)
    };
  return (
    <section
     id="experience"
     className="max-w-containerxs mx-auto py-10 lgl:py-24 flex flex-col gap-8">
        <SectionTitle title="My Experience" />
        <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
            <ul className="md:w-32 flex flex-col">
                <li 
                  onClick={handleRaion}
                  className={`${
                    expRaion 
                        ? "border-l-textGreen text-textGreen" 
                        : "border-l-hoverColor text-textDark"
                        } 
                    border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                    Raion Community
                </li>
                <li 
                  onClick={handleRuangguru}
                  className={`${
                    expRuangguru 
                        ? "border-l-textGreen text-textGreen" 
                        : "border-l-hoverColor text-textDark"
                        } 
                    border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                    Ruangguru CAMP
                </li>
                <li 
                  onClick={handleRKalbeInternational}
                  className={`${
                    expKalbeInternational
                        ? "border-l-textGreen text-textGreen" 
                        : "border-l-hoverColor text-textDark"
                        } 
                    border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}>
                    Kalbe International
                </li>
            </ul>
            {expRaion && <Raion />}
            {expRuangguru && <Ruangguru />}
            {expKalbeInternational && <KalbeInternational />}
        </div>
     </section>
  )
}

export default Experience