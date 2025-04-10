import Image from 'next/image';
import logoimage from '../../public/logo.png';
const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return (
    <section className="py-4">
        <div className="container content-center">

            <div className="grid grid-cols-2  p-2 px-4 items-center justify-center ">
                <div>
                    <Image src={logoimage} alt='MYLogo' className='h-7 w-auto'></Image>
                </div>

                <div className='flex justify-center items-center fixed top-3 '>
                    <nav className='flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur'>
                    <a href="#home" className='nav-item'>HOME</a>
                    <a href="#home" className='nav-item'>Projects</a>
                    <a href="#home" className='nav-item'>Blogs</a>
                    <a href="#home" className='nav-item'>About</a>
                        
                    </nav>
                </div>
                {/* <div className='flex justify-end'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24" 
                     fill="none" 
                     stroke="currentColor" 
                     stroke-width="2" 
                     stroke-linecap="round" 
                     stroke-linejoin="round" 
                     className="feather feather-menu">
                        <line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </div> */}
             
            </div>
        </div>
    </section>);
}
