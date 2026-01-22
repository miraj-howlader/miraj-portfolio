import { FacebookIcon, Github, Linkedin, LinkedinIcon } from 'lucide-react'
import profile from '../../public/assets/avatar.png'
import { FaGithub,FaLinkedin,FaFacebook   } from "react-icons/fa";

export default function Footer() {
    
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="">
                    <img src={profile} alt="" className="w-36 mx-auto mb-2" />
                    
                </a>


                <div className="w-max flex items-center gap-2 mx-auto">
                    <img src="./assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="./assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:mirajhowlader9999@gmail.com">mirajhowlader9999@gmail.com</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center pb-28 justify-between border-t border-gray-400 mx-[10%] mt-12 py-3">
                <p>© {new Date().getFullYear()} <a href=""></a>All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li>
                        <FaGithub/>
                        <a target='_blank' href="https://github.com/miraj-howlader">GitHub</a></li>
                    <li>
                        <FaLinkedin />
                        <a target='_blank' href="https://www.linkedin.com/in/miraj-howlader-6b19ba352/">LinkedIn</a></li>
                    <li>
                        <FaFacebook />
                        <a target='_blank' href="https://www.facebook.com/miraj.howlader.7127/">Facebook</a></li>
                </ul>
            </div>
        </div>
    )
}