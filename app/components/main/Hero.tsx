import React from 'react'
import HeroContent from '../sub/HeroContent'

export default function Hero () {
  return (
    <div className='relative flex felx-col h-full w-full'>
        <video
        autoPlay
        muted
        loop
        className='rottate-100 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover'
        >
            <source src='/blackhole.webm' type='video/webm'></source>

        </video>
        <HeroContent/>
        

    </div>
  )
}

