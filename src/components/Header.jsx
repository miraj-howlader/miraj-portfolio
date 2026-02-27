import profile from '../images/miraj.png'
import CV from '../images/mirajCV.pdf'

export default function Header() {
    
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
            <img src={profile} alt="" className='w-60 rounded-full border-2 border-green-500 bg-gray-200 dark:bg-gray-700' />
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I&apos;m Miraj Howlader
                <img src="./assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[48px] font-Ovo">Fullstack web developer building modern web applications.</h1>
            <p className="max-w-3xl mx-auto font-Ovo">I am a fullstack developer from Bangladesh</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a href="#contact"
                    className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent">
                    contact me <img src="./assets/right-arrow-white.png" alt="" className="w-4" />
                </a>

                <a href={CV} download
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
                    my resume <img src="./assets/CV-icon.png" alt="" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    )
}