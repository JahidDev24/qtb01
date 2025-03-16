import { div } from 'framer-motion/client';
import React, { Fragment } from 'react'
const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Reliable",
];
function Tapeview() {


    return (
        <div className='py-16 lg:py-24'>
            <div className='bg-gradient-to-r from-emerald-300 bg-sky-400 overflow-x-clip -rotate-3 -mx-1'>
                <div className='flex [mask-image:linier-gradient(to_right,transparent,black10%,black90%,transparent)]'>
                    <div className='flex flex-none gap-4 py-3 animate-move-left'>
                        {[...new Array(2)].fill(0).map((_,idx)=>(
                           < Fragment key={idx}>
                              {words.map((e) => (
                            <div key={e} className='inline-flex gap-4 items-center '>
                                <span className='text-gray-900 uppercase font-extrabold text-sm'>
                                    {e}
                                </span>
                                <span className='size-5 text-gray-900 -rotate-12'>⭐</span>
                            </div>))
                        }
                           </Fragment>
                        ))}
                      
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tapeview