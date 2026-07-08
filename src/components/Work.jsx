


export default function Work() {
    const work = [
        {
            name: 'FullStack',
            icon: './assets/promt.png',
            description: 'Prompt Marketplace',
            link: 'https://client-phi-five-30.vercel.app/',
            github: 'https://github.com/miraj-howlader/ai-promptenginering'
        },
        
        {
            name: 'FullStack',
            icon: './assets/pixgen.png',
            description: 'Pixgen Gallery',
            link: 'https://image-generator-xi-blush.vercel.app/',
            github: 'https://github.com/miraj-howlader/ImageGenerator'
        },
        {
            name: 'Premium Booking Website',
            icon: './assets/tutor.png',
            description: 'FullStack',
            link: 'https://tutor-client-kappa.vercel.app/',
            github: 'https://github.com/miraj-howlader/tutor'
        },
        {
            name: 'A Gym Center',
            icon: './assets/gim.png',
            description: 'Frontend',
            link: 'https://build-a-gym-website-using-react-js-and-tailwind-css.vercel.app/',
            github: 'https://github.com/miraj-howlader/Build-A-Gym-Website-Using-React-JS-And-Tailwind-CSS'
        }
    ];
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end development.</p>

            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
                {work.map((work) => (
                    <div key={work.name} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" style={{ backgroundImage: `url(${work.icon})` }}>
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold">{work.name}</h2>
                                <p className="text-sm text-gray-700">{work.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                             
                            </div>
                             
                        </div>
                         <div className="flex gap-4 justify-between">
                                <a href={work.link}
                                target="_blank">
                               <button className=" items-center justify-center px-4 ml-2 mt-3 rounded-md py-0.5 font-semibold text-white transition-all duration-300 ease-in-out  group bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 active:scale-95">
                                Live
                               </button>
                               </a>
                               <a href={work.github} 
                               target="_blank">
                               <button className=" items-center justify-center px-4 ml-2 mt-3 rounded-md mr-2 py-0.5 font-semibold text-white transition-all duration-300 ease-in-out  group bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 active:scale-95">
                                Github
                               </button>
                               </a>
                               </div>
                    </div>
                ))}
            </div>
            <a href="#" className="w-max flex items-center justify-center gap-2 text-gray-700 border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover rounded-full py-2 px-8 mx-auto my-20 duration-300 dark:text-white">
                Show more
                <img src="./assets/right-arrow-bold.png" alt="" className="w-4 dark:hidden" />
                <img src="./assets/right-arrow-bold-dark.png" alt="" className="w-4 hidden dark:block" />
            </a>
            

        </div>
    )
}