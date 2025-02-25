import React from 'react'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pb-10 mb-[50px] md:mb-5" id="contact">

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Let&apos;s <span className='text-purple'>connect</span>!
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach out to me and let&apos;s discuss how I can help impact your company</p>
            <a href="mailto:maiqedward@gmail.com">
                <MagicButton 
                title="Let's get in touch"
                icon={<FaLocationArrow/>}
                position='right'
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Edward Mai</p>
            <div className='flex item-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='mt-5 w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <a href={profile.link} target='blank'>
                            <img src={profile.img} alt="icons"
                            width={20}
                            height={20}
                            />
                        </a>
                    </div>
                ))}
            </div>
        </div>
        
    </footer>
  )
}

export default Footer;