
import { Card } from '@/components/Card'
import { SectionHeader } from '@/components/HeaderSection'
import React from 'react'
import Image from 'next/image';
import bookImage from '@/assets/images/book-cover.png'
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import TechIcon from '@/components/TechIcon';
import CardHeader from '@/components/CardHeader';


const toolboxItems = [
  {
    title: 'JavaScript',
    icon: JavascriptIcon
  },
  {
    title: 'Flutter',
    icon: HTMLIcon
  },
  {
    title: 'Next.js',
    icon: CssIcon
  },
  {
    title: 'React.js',
    icon: ReactIcon
  },
  {
    title: 'Node.js',
    icon: ChromeIcon
  }


]
const hobbies = [
  {
    title: 'Photography',
    emoji: '📷'
  },
  {
    title: 'Painting',
    emoji: '🖨️'
  },
  {
    title: 'Photography',
    emoji: '📷'
  },
  {
    title: 'Painting',
    emoji: '📷'
  },
  {
    title: 'Photography',
    emoji: '📷'
  }
];


export default function AboutSection() {
  return (
    <div className='py-20' >
      <div className='container'>
        <div>
          <SectionHeader eyebrow='About Me' discription='Learn more about who I am, What I do, and what inspires me.' title='A Glimpse Into My World ' />
        </div>
        <div className='mt-20'>
          <Card className='h-[328px]'>
            <CardHeader title="My Reads" disp='Explore the books shaping my perspectives.' />

            <div className='w-40 mx-auto mt-7'>
              <Image src={bookImage} alt="Book Cover"></Image>
            </div>

          </Card>
          <Card >
            <CardHeader title="My Toolbox" disp='Explore the technologies and tools I use to craft exceptional digital experince.' />
            <div>
              {toolboxItems.map((items) => (
                <div key={items.title}  className='inline-flex items-center gap-4 py-2 px-3 outline outline-white/10 rounded-lg '>
                  <TechIcon component={items.icon} />
                  <span>{items.title}</span>
                </div>
              ))
              }
            </div>
          </Card>
          <Card>
            <CardHeader title="Beyond the Code" disp='Explore my interests and hobbies beyond the' />
            <div>
              {hobbies.map((items) => (
                <div key={items.title} className='inline-flex items-center gap-4 py-2 px-3 outline outline-white/10 rounded-lg'>
                  <span>{items.title}</span>
                  <span>{items.emoji}</span>
                </div>
              ))
              }
            </div>
          </Card>
          <Card >
          <CardHeader title="Beyond the Code" disp='Explore my interests and hobbies beyond the' />
            <Image src={bookImage} alt="Book Cover"></Image>
          </Card>
        </div>
      </div>

    </div>
  )
}
