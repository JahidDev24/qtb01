import React from 'react'
import male1 from '../assets/images/male1.png'
import female from '../assets/images/female1.png'
import MaxWidthWrapper from '@/components/global/max-width-wrapper';
import MagicBadge from '@/components/ui/magic-badge';
import AnimationContainer from '@/components/global/animation-container';
import { AnimatedTestimonials, } from '@/components/ui/animated-testimonials';
import { InfiniteMovingCards } from '@/components/ui/infinity_moving_card';

const testimonials = [
    {
        name: "Anand Jha",
        title: "Head Of Department @HomedDoc App",
        quote: "Great Work.. your machine learning intellegance was amazing you will make the same thing as we expect from you side.",
        src: male1
    },
    {
       name: "Chiran",
       title: "Isckondamodardash website",
       quote: "That's amazing you will complete the project on time.which is fabulous your commitment and dedication wasamazing.",
       src: female
    },
    {
       name: "Baskhar",
       title: "CEO @ITNObel",
       quote: "You knowledge in web and application in flutter is unbeaten you mindset is amazing about you work. you will never gave any excuse about any problen you will by you mike very well ....Great work young boy.",
       src: male1
    },
    {
        name: "Navneet Sharma",
        title: "Head @Zenith Mice App",
        quote: "We initially had some concerns about whether your team would be able to deliver the app on time. However, we are pleased to note that the app was completed ahead of the deadline. Outstanding work!",
        src: male1
     },
     {
        name: "Vineet",
        title: "SoftChip Smart Alarm App",
        quote: "We initially had some concerns about whether your team would be able to deliver the app on time. However, we are pleased to note that the app was completed ahead of the deadline. Outstanding work!",
        src: male1
     }
]
export default function Testomorieal() {
    {/* Reviews Section */} 
     return (
  <MaxWidthWrapper className="py-10">
  <AnimationContainer delay={0.1}>
      <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
          <MagicBadge title="Happy Clients" />
          <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
          What Client says
          </h2>
          <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
              Here&apos;s Our client is a leading provider of innovative and high-quality products and services in the technology sector.
          </p>
      </div>
  </AnimationContainer>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
</MaxWidthWrapper>

        // old
        // <div className="py-16 lg:py-24 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        //     <SectionHeader eyebrow='Happy Clients' discription="Our client is a leading provider of innovative and high-quality productsand services in the technology sector. With a strong commitment tocustomer satisfaction, they have built a reputation for excellence andreliability in the industry. Their team of experienced professionals isdedicated to delivering customized solutions that meet the unique needsof each client. Whether it's providing cutting-edge technology orpersonalized support, our client is committed to helping their customersachieve their goals and succeed in their business. With a focus oninnovation, quality, and customer service, our client is poised forcontinued growth and success in the years to come." title='What Client says' />
        //     <div className='mt-16 lg:mt-20 flex'>
        //         <div className='flex gap-5 flex-none'>
        //             {testimonials.map((testimonial) => (
        //                 <Card key={testimonial.name} className="max-w-xs md:max-w-md">
        //                     <div className='size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0'>
        //                         <Image src={testimonial.avatar} alt={testimonial.name} className='max-h-full' />
        //                     </div>

        //                     <div className='font-semibold '>{testimonial.name}</div>
        //                     <div className='text-sm text-white/40'>{testimonial.position})</div>
        //                     <p className='mt-4 md:mt-6 text-sm md:text-base'>{testimonial.text}</p>

        //                 </Card>
        //             )
        //             )}
        //         </div>

        //     </div>
        // </div>
    )
}
