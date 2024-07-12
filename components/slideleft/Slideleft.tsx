"use client"
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import '../slidequote/SlideQuote.css'

const Slideleft = () => {
    const [sliders, setSliders] = useState([])

    useEffect(() => {
        const getSliders = async () => {
            try {
                const request = await fetch('https://dummyjson.com/quotes')
                const result = await request.json()

                if (result && result.quotes) {
                    setSliders(result.quotes)
                }
            } catch (error) {
                console.error("Failed to fetch quotes:", error)
            }
        }

        getSliders();
    }, []);

  return (
    <div className='absolute bottom-8 right-0 w-full h-fit'>
        <Marquee loop={0} direction='left' pauseOnHover={true} speed={5}>
            {
                sliders.map((item: any) => (
                    <div key={item.id} className='px-5'>
                        {item.quote} ~ {item.author}
                    </div>
                ))
            }
        </Marquee>
    </div>
  )
}

export default Slideleft