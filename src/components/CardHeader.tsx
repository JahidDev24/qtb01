import React from 'react'
import Starimage from '@/assets/icons/star.svg'
export default function CardHeader({title,disp}:{title:string; disp:string;}) {
    return (
        <div className='flex flex-col'>
            <div className='inline-flex item-center align-middle'>
                <Starimage className='size-12 text-emerald-300' />
                <h3 className='font-serif text-3xl'>{title}</h3>
            </div>
            <p className='text-sm text-white/60'>{disp}</p>
        </div>
    )
}
