import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", .5 * index, .75)}
        className="w-full rounded-[20px] shadow-lg"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 30,
          }}
          className="rounded-[20px] py-5 px-12 min-h-[280px]"
        >

          <div className="border-2 flex flex-col gap-2 w-full bg-white rounded-[20px] shadow-lg p-6">
            <div className="font-normal text-2xl mb-2 mt-2">
              Two truths and a lie...
            </div>
            <div>
              <ul className="menu w-full rounded-box gap-2">
                <li><a className="rounded-lg border-2">Item 1</a></li>
                <li><a className="rounded-lg border-2">Item 2</a></li>
                <li><a className="rounded-lg border-2">Correlation does actually imply causation.</a></li>
              </ul>
            </div>

          </div>


        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p>
          Intro
        </p>
        <h2>
          Overview
        </h2>
      </motion.div>

      <div className="">
        <ServiceCard index={0} title={"test"} icon={"test"} />
      </div>
    </>
  )
}

export default About