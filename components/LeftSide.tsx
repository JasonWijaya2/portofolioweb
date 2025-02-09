import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";

const LeftSide = () => {
    return (
        <div className="w-full h-flex flex flex-col items-center justify-end gap-4 text-textLight">
            <div className="flex flex-col gap-4">
                <a href="https://github.com/JasonWijaya2" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-poiner hover:-translate-y-2 transition-all duration-300">
                        <TbBrandGithub />
                    </span>
                </a>
                <a href="https://www.instagram.com/jasonwijaya4444/" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-poiner hover:-translate-y-2 transition-all duration-300">
                        <SlSocialInstagram />
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/jason-wijaya4444" target="_blank">
                    <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-poiner hover:-translate-y-2 transition-all duration-300">
                        <SlSocialLinkedin />
                    </span>
                </a>
            </div>
            <div className="w-[2px] h-32 bg-textDark"></div>
        </div>
    );
};

export default LeftSide;