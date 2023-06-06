import { useState, useEffect } from 'react'

import '../App.css';
import './ref.css';
import Facebook from '../assets/facebook.png'

const Job = ({ image, company, descriptions, title, dateRange }) => {

  return (
    <div className="border-2 flex flex-row gap-6 p-4 rounded-lg">
      <img className="max-h-screen circle-img" src={image} />
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between w-full">
          <div className="font-bold text-lg">{company}</div>
          <div className="flex flex-row gap-2 flex-wrap">
            {
              descriptions.map((d, index) => {
                return (
                  <div key={d[0] + ',' + index} className="badge ">{d}</div>
                )
              })
            }
          </div>
        </div>
        {/* <div className="font-bold text-lg">{company}</div> */}
        <div className="flex flex-row justify-between w-full">
          <div className="">{title}</div>
          <div className="">{dateRange}</div>
        </div>
      </div>
    </div>
  )
}

export default Job;