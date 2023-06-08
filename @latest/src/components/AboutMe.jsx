import { useState, useEffect } from 'react'
// import { motion } from 'framer-motion';
// import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { fadeIn, textVariant } from '../utils/motion';

import '../App.css';
import Profile from '../assets/ProfileNew.png'
import Overview from '../assets/OverviewBlank.png'
import Hooks from '../assets/hooks.png'
import Attenda from '../assets/attendaLogo.png'
import Icons from '../assets/icons3.png'
import Diggr from '../assets/diggr2.png'

const AboutMe = ({ scroller4 }) => {
  return (

    <div className="flex flex-col max-h-min gap-2 pt-2 h-min md:max-h-[600px] z-1 md:h-min">
      <div className="font-bold md:text-4xl text-xl ">
        Hi! I'm Gabe.
      </div>
      <div className="font-normal text-[12px] md:text-xl mb-2">
        I'm a fullstack engineer with a background in Stats and Linguistics, and professional experience in UX design and marketing.
      </div>
      <div className="max-h-min md:max-h-[500px] md:h-[80%] rounded-[20px] flex flex-col gap-2 hover:gap-6 transition-all duration-100 ">
        <div className = "flex flex-row justify-between gap-2 hover:gap-6 md:h-[25vh] ">
          {/*  */}
          <div className="w-[33%] rounded-[20px]">
            <Tilt className="w-full h-full rounded-[20px] ">

              <img
                options={{
                  max: 45,
                  scale: 1,
                  speed: 30,
                }}
                src={Profile}
                className="rounded-[20px] bg-black w-full h-full object-cover "
              />

            </Tilt>
          </div>
          {/*  */}
          <Tilt className="w-[66%] rounded-[20px] hover:w-[70%]">

            <img
              options={{
                max: 45,
                scale: 1,
                speed: 30,
              }}
              src={Overview}
              className="rounded-[20px] bg-black w-full h-full object-cover"
            />

          </Tilt>

        </div>
        <div className = "flex flex-row justify-between gap-2 hover:gap-6 md:h-[25vh] transition-all duration-100">
          {/*  */}
          <Tilt className="w-[66%]  rounded-[20px] hover:w-[70%]">

              <img
                options={{
                  max: 45,
                  scale: 1,
                  speed: 30,
                }}
                src={Diggr}
                className="rounded-[20px] bg-black w-full h-full object-cover"
              />

          </Tilt>
          {/*  */}
          <div className="w-[33%] rounded-[20px] hover:w-[36%] transition ease-in-out" onClick={scroller4}>
            <Tilt className="w-full h-full rounded-[20px]">

              <img options={{
                  max: 45,
                  scale: 1,
                  speed: 30,
                }}
                onClick={scroller4}
                src={Icons}
                className="rounded-[20px] w-full bg-black h-full object-cover"
              />

            </Tilt>
          </div>
        </div>
      </div>

    </div>

  )
}

export default AboutMe;


// import { useState, useEffect } from 'react'
// // import { motion } from 'framer-motion';
// // import { fadeIn, textVariant } from '../utils/motion';
// import { Tilt } from 'react-tilt';
// import { motion } from 'framer-motion';

// import { fadeIn, textVariant } from '../utils/motion';

// import '../App.css';
// import Profile from '../assets/profile.png'
// import Overview from '../assets/Overview2.png'
// import Hooks from '../assets/hooks.png'
// import Attenda from '../assets/attendaLogo.png'

// const AboutMe = () => {
//   return (

//     <div className="flex flex-col gap-2 pt-2 max-h-[600px] z-1 ">
//       <div className="font-bold text-4xl">
//         Hi! I'm Gabe.
//       </div>
//       <div className="font-normal text-1xl mb-2">
//         I'm a fullstack engineer with a background in Stats and Linguistics, and professional experience in UX design and marketing.
//       </div>
//       <div className="rounded-[20px] max-h-[500px] flex flex-col gap-2 hover:gap-6 transition-all duration-100  ">
//         <div className = "flex flex-row justify-between gap-2 hover:gap-6 h-[50%]">
//           {/*  */}
//           <div className="w-[33%] rounded-[20px]">
//             <Tilt className="w-full h-full rounded-[20px]">
//               {/* <div options={{
//                 max: 45,
//                 scale: 1,
//                 speed: 30,
//               }} */}
//               {/* className = " "> */}
//                 <img options={{
//                 max: 45,
//                 scale: 1,
//                 speed: 30,
//               }} src={Profile} className="rounded-[20px] w-full h-full object-cover" />
//               {/* </div> */}
//             </Tilt>
//           </div>
//           {/*  */}
//           <Tilt className="w-[66%] rounded-[20px] hover:w-[70%]">
//             <div options={{
//               max: 45,
//               scale: 1,
//               speed: 30,
//             }}
//             className = "">
//               <img src={Overview} className="rounded-[20px] w-full h-full object-cover" />
//             </div>
//           </Tilt>

//         </div>
//         <div className = "flex flex-row justify-between gap-2 hover:gap-6 h-[50%] transition-all duration-100">
//           {/*  */}
//           <Tilt className="w-[66%] bg-black rounded-[20px] hover:w-[70%]">
//             <div options={{
//               max: 45,
//               scale: 1,
//               speed: 30,
//             }}
//             className = " bg-black rounded-[20px] w-full h-full">

//             </div>
//           </Tilt>
//           {/*  */}
//           <div className="w-[33%] rounded-[20px] hover:w-[36%] transition ease-in-out">
//             <Tilt className="w-full h-full rounded-[20px]">
//               <div options={{
//                 max: 45,
//                 scale: 1,
//                 speed: 30,
//               }}
//               className = "rounded-[20px] w-full h-full">
//                 <img src={Attenda} className="rounded-[20px] w-full h-full object-cover" />
//               </div>
//             </Tilt>
//           </div>
//         </div>
//       </div>

//     </div>

//   )
// }

// export default AboutMe;