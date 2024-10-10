import { motion } from "framer-motion"
import { TiArrowForward } from "react-icons/ti"

const KalbeInternational = () => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ delay: 0.1}}
      className="w-full">
        <h3 className="flex gap-1 font-medium text-xl font-titleFont">
            IT Developer 
            <span className="text-textGreen tracking-wide">@Kalbe International</span>
        </h3>
        <p className="text-sm mt-1 font-medium text-textDark">
            Apr 2024
        </p>
        <ul className="mt-6 flex flex-col gap-3">
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Developed applications and websites using ReactJS, Node.js, and Express.js, ensuring they reflect user needs and segment requirements.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Provided actionable insights for design and product decisions through data analysis and usability best practices.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Delivered user-focused designs that aligned with product and brand characteristics.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Collaborated with cross-functional teams to communicate a data-driven design vision.
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                Batch Invoice Website: Streamlined finance operations by creating invoice and validation processes
            </li>
            <li className="text-base flex gap-2 text-textDark">
                <span className="text-textGreen mt-1">
                    <TiArrowForward />
                </span>
                We Care Mobile App: Built a public health-focused mobile app using React Native, enhancing accessibility and user experience.
            </li>
        </ul>
    </motion.div>
  )
}

export default KalbeInternational