import { motion } from "framer-motion"
import { TiArrowForward } from "react-icons/ti"

const Ruangguru = () => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ delay: 0.1}}
      className="w-full">
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            Frontend Engineering
            <span className="text-textGreen tracking-wide">@Ruangguru CAMP</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            Feb 2023 - Jun 2023
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Learning about Software Engineering
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Learning about Javascript
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Learning about Basic Frontend Development
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Learning about Frontend Development with ReactJS
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Learning about Frontend Development using Chakra UI
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Learning about Deployment using Netlify
            </li>
        </ul>
    </motion.div>
  )
}

export default Ruangguru