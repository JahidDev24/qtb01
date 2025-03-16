import React from 'react'
import Image from 'next/image';
import { Card } from '@/components/Card'
import aswin from '@/assets/images/avatar-ashwin-santiago.jpg'
import { SectionHeader } from '@/components/HeaderSection';
const testimonials = [
    {
        name: "Alex Turner",
        position: "Marketing Manager @ TechStartups",
        text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attenti",
        avatar: aswin
    },
    {
        name: "Olivia Green",
        position: "Head of Design @ GreenLeaf",
        text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs",
        avatar: aswin
    },
    {
        name: "Daniel White",
        position: "CEO @ InnovateCo",
        text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a signi",
        avatar: aswin
    }
]
export default function Testomorieal() {
    return (
        <div className="py-16 lg:py-24 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <SectionHeader eyebrow='Happy Clients' discription="helloxjb nskjbnf kjnbsdjkbfn zknsiofhiowhjfsclkc  oicnoisio" title='What Client says' />
            <div className='mt-16 lg:mt-20 flex'>
                <div className='flex gap-5 flex-none'>
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.name} className="max-w-xs md:max-w-md">
                            <div className='size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0'>
                                <Image src={testimonial.avatar} alt={testimonial.name} className='max-h-full' />
                            </div>

                            <div className='font-semibold '>{testimonial.name}</div>
                            <div className='text-sm text-white/40'>{testimonial.position})</div>
                            <p className='mt-4 md:mt-6 text-sm md:text-base'>{testimonial.text}</p>

                        </Card>
                    )
                    )}
                </div>

            </div>
        </div>
    )
}
