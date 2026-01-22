import { SiFrontendmentor, SiWebdriverio } from "react-icons/si";
import { MdSelfImprovement, MdWebAssetOff } from "react-icons/md";
import { CiDatabase } from "react-icons/ci";
import { FaDatabase,FaLock } from "react-icons/fa";
import { ImConnection } from "react-icons/im";
import { ImPower } from "react-icons/im";
import { GrPerformance } from "react-icons/gr";
import { CgDebug } from "react-icons/cg";
import { GrDeploy } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";


 const services = [
       
  
  {
    icon:<MdWebAssetOff/>,
    name: "Frontend Development",
    description: "Building responsive, user-friendly interfaces using HTML, CSS, JavaScript, React, and related technologies."
  },
  {
    icon:<CiDatabase/>,
    name: "Backend Development",
    description: "Creating secure, scalable server-side logic and APIs using Node.js, Express, and databases."
  },
  {
    icon:<FaDatabase/>,
    name: "Database Design & Management",
    description: "Designing, implementing, and managing databases such as MySQL, PostgreSQL, and MongoDB."
  },
  {
    icon:<ImConnection/>,
    name: "API Development & Integration",
    description: "Developing REST and GraphQL APIs and integrating third-party services."
  },
  {
    icon:<ImPower/>,
    name: "UI/UX Implementation",
    description: "Converting designs into pixel-perfect, accessible web interfaces."
  },
  {
    icon:<FaLock/>,
    name: "Authentication & Security",
    description: "Implementing user authentication, authorization, and data protection."
  },
  {
    icon:<GrPerformance/>,
    name: "Performance Optimization",
    description: "Improving application speed, scalability, and overall performance."
  },
  {
    icon:<CgDebug/>,
    name: "Testing & Debugging",
    description: "Performing unit testing, bug fixing, and quality assurance."
  },
  {
    icon:<GrDeploy/>,
    name: "Deployment & Hosting",
    description: "Deploying applications to cloud platforms such as AWS, Vercel, and Netlify."
  },
  {
    icon:<BiSupport/>,
    name: "Maintenance & Support",
    description: "Providing ongoing updates, monitoring, and technical support."
  }
]

    


export default function Services() {
   


    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am a fullstack developer from Bangladesh, with 4+ years of experience.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <p className="text-3xl text-pink-500">{service.icon}</p>
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="./assets/right-arrow.png" alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}