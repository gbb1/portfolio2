import { useState, useEffect } from 'react'

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn, textVariant } from '../utils/motion';

import '../App.css';


export default function Project({ image, tags, flip, title, description }) {
  return (
    <div className="flex flex-col w-full">
      <div className={`flex flex-col gap-2 bg-white rounded-[20px] w-full shadow-lg p-6`}>

          {/* <div className="bg-white rounded-[20px] w-[50%] shadow-lg p-6"> */}
            {/* <div className="w-fullrounded-[20px] shadow-lg">
              <Tilt className="w-full h-full rounded-[20px]">
                <div options={{
                  max: 45,
                  scale: 1,
                  speed: 30,
                }}
                className = "rounded-[20px] w-full h-full">

                  <img src={image} className="rounded-[20px]" />

                </div>
              </Tilt>
            </div> */}
          {/* </div> */}
        {/* <div className="w-full h-full justify-center">

          <Tilt className="w-full h-full rounded-[20px] justify-center">
            <div options={{
              max: 45,
              scale: 1,
              speed: 30,
            }}
            className = "rounded-[20px] w-full h-full justify-center">

            <img src={image} className="rounded-lg justify-center shadow-lg hover:w-[95%] hover:mb-4" />

            </div>
          </Tilt>
        </div> */}

          <img src={image} className="rounded-lg shadow-lg" />

          <div className="flex flex-row gap-2 w-full mt-3">
            {
              tags.map((t, i) => {
                return (
                  <div key={t[0] + ',' + i} className="badge">{t}</div>
                )
              })
            }
          </div>

          <div className="font-bold text-2xl mb-2">
            {title}
          </div>

          <div className="font-normal text-xl mb-2 -mt-2">
            {description}
          </div>

          <button className="btn w-[10vw] self-end rounded-[1000px] bg-black">See details</button>

        {/* <div className="bg-white rounded-[20px] w-full shadow-lg p-6 flex flex-col">

          <img src={image} className="rounded-lg" />

          <div className="font-bold text-2xl mb-2 mt-2">
            {title}
          </div>

          <div className="font-normal text-xl mb-2 mt-2">
            {description}
          </div>

          <button className="btn justify-self-end rounded-[1000px] bg-black">Get in touch</button>


        </div> */}

      </div>
    </div>
  )
}

/*

    <div className="flex flex-col w-full">
      <div className={`flex ${flip ? 'flex-row-reverse' : 'flex-row'} gap-2 hover:gap-6 transition-all duration-100`}>

        {/* <div className="bg-white rounded-[20px] w-[50%] shadow-lg p-6">
        <div className="w-[60%] rounded-[20px] shadow-lg">
        <Tilt className="w-full h-full rounded-[20px]">
          <div options={{
            max: 45,
            scale: 1,
            speed: 30,
          }}
          className = "rounded-[20px] w-full h-full">

            <img src={image} className="rounded-[20px]" />

          </div>
        </Tilt>
      </div>


    <div className="bg-white rounded-[20px] w-[40%] shadow-lg p-6">

    </div>

  </div>
</div>

*/