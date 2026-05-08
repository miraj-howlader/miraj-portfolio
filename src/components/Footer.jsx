import {Mail} from 'lucide-react'
import profile from '../images/hand.png'
import { FaGithub,FaLinkedin,FaFacebook, FaWhatsapp   } from "react-icons/fa";

export default function Footer() {
    
    return (
        <div className="mt-20">
            <div className="text-center">
                <a href="">
                    <img src={profile} alt="" className="w-36 mx-auto mb-2 rounded-full border-2 border-green-500 bg-gray-200 dark:bg-gray-700" />
                    
                </a>


                <div className="w-max flex  items-center gap-2 mx-auto">
                    
                    <div>
                        <div className='flex gap-2 items-center'>
                            <Mail/>
                            <p>mirajhowlader9999@gmail.com</p>
                        </div>
                        <div className=' flex gap-2 items-center'>
                            <FaWhatsapp size={24}/>
                            <p> +88 01404576127</p>
                        </div>
                    </div>

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