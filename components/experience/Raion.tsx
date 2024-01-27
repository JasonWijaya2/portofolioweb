import { motion } from "framer-motion"
import { TiArrowForward } from "react-icons/ti"

const Raion = () => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ delay: 0.1}}
      className="w-full">
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Game Programmer 
            <span className="text-textGreen tracking-wide">@Raion Community</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            Jan 2021 - Dec 2022
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                3rd Place in HackJam (Game Development) Raion Community 2021 as a Game Programmer
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                3rd Place in HackJam (Game Development) Raion Community 2022 as a Game Designer
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Become a Vice Chairman Raion Community at Jan 2022 - Dec 2022
            </li>
        </ul>
    </motion.div>
  )
}

export default Raion