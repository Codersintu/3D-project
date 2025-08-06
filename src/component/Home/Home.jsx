import jsimg from "../../assets/javascript.png"
import Mimg from "../../assets/M.png"
import pyimg from "../../assets/py.png"
import ximg from "../../assets/x.png"
import gitimg from "../../assets/Git.gif"
import iimg from "../../assets/i.jpg"
import newimg from "../../assets/hero.png"
import Yimg from "../../assets/y.png"
import {motion} from "motion/react"
import { TypeAnimation } from "react-type-animation"


const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

function Home() {
  return (
    // parent container
<div className="w-full max-w-[1200px] h-screen overflow-hidden mx-10">
    <div className="w-full max-w-[1200px] h-screen flex justify-between">
      {/* left container */}
     <div className="flex flex-col my-[70px] md:my-0 gap-15 items-center mx-auto md:items-start md:mx-0 md:justify-around ">
      {/* title */}
        <div className="">
            <motion.h1 variants={awardVariants} initial="initial" animate="animate"  className="text-4xl md:text-6xl leading-10 md:leading-16 text-pink-600 font-semibold ">Hey There,<br/><span className="text-white">I'm Sintu!</span></motion.h1>
        </div>
        <motion.div variants={awardVariants} initial="initial" animate="animate" className="flex flex-col justify-center items-center md:items-start gap-3">
            <motion.h1 variants={awardVariants} className="text-2xl font-semibold">Top Rated Developer</motion.h1>
            <motion.p variants={awardVariants} className="leading-4 font-semibold">Lorem ipsum dolor sit amet <br/> consectetur adipisicing elit. Nam, omnis.</motion.p>
            <motion.div variants={awardVariants} className="flex gap-3">
                <motion.img variants={awardVariants} className="w-[30px]" src={jsimg} alt="" />
                <motion.img variants={awardVariants} className="w-[30px]" src={Mimg} alt="" />
                <motion.img variants={awardVariants} className="w-[30px]" src={pyimg} alt="" />
            </motion.div>
        </motion.div>
        <motion.a animate={{y:[0,5],opacity:[0,1,0]}} transition={{repeat:Infinity,duration:4,ease:"easeInOut"}}  href="">
             <svg
            width="50px" 
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path animate={{y:[0,5],opacity:[0,1,0]}} transition={{repeat:Infinity,duration:2,ease:"easeInOut"}}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              
            />
          </svg>
        </motion.a>
     </div>


     {/* right side container */}
     <div className="md:flex md:flex-col md:justify-between md:items-center">
        <div className="md:bg-indigo-800 hidden md:flex md:flex-col md:justify-between md:rounded md:items-center md:gap-7 md:h-[150px] md:w-full md:max-w-[30px]">
            
            <motion.div variants={awardVariants} initial="initial" animate="animate" className="flex flex-col gap-3.5">
              <motion.a variants={awardVariants} href="https://x.com/mahto_sint35616"><img className="w-full max-w-[20px] bg-white rounded" src={ximg} alt="" /></motion.a>
             <motion.a variants={awardVariants} href="https://github.com/Codersintu"><img className="w-full max-w-[20px] bg-white rounded" src={gitimg} alt="" /></motion.a>
              <motion.a variants={awardVariants} href=""><img className="w-full max-w-[20px] bg-white rounded" src={Yimg} alt="" /></motion.a>
            </motion.div>
            <motion.p variants={awardVariants}  initial="initial" animate="animate" className="transform rotate-90 font-semibold bg-red-600 rounded w-[80px]">follow me</motion.p>
        </div>

 {/* speech bubble */}
  <motion.div variants={awardVariants} initial="initial" animate="animate" className="hidden md:relative md:w-[300px] md:flex md:items-end">
  <motion.div variants={awardVariants} className="bg-white w-[85%] h-[60px] text-gray-800 rounded-t-[10px]">
    <TypeAnimation 
      sequence={[
          "I am creating fast and scalable websites",
  1000,
  "I am a full stack developer",
  1000,
  "I build secure blockchain applications",
  1000,
  "I deploy projects using DevOps tools",
  1000,
  "I love solving real-world problems with code",
  1000,
        
      ]}
      wrapper="span"
      speed={50}
      deletionSpeed={60}
      repeat={Infinity}
    />
  </motion.div>
  <img
    className="w-full max-w-[40px] h-[40px] rounded-full object-cover absolute right-[-0px] border-2 border-white"
    src={iimg}
    alt=""
  />
</motion.div>


{/* circle svg for pc ya tablet*/}
       <motion.a animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
           href="">
        <motion.div  animate={{ rotate: [0, 360]}}
        transition={{
          duration:10,
          repeat:Infinity,
          ease:"linear"
        }}
            className="hidden md:relative md:w-full md:max-w-[150px] md:h-[150px] md:block">
             <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="">
                <textPath href="#innerCirclePath" className="text-xl font-semibold">Hire now .</textPath>
              </text>
              <text className="">
                <textPath href="#innerCirclePath" className="text-xl font-semibold" startOffset="44%">Contact me .</textPath>
              </text>
              </svg>

              {/* arrow svg */}
         <div className="absolute inset-0 flex justify-center items-center">
         <div className="w-full max-w-[60px] h-[60px] flex justify
         -c§
         t
        ?er items-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
              </div>
        </motion.div>
       </motion.a>


       {/*this circle  only for mobile device  */}
       <motion.a animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
           href="" className="block md:hidden absolute bottom-4 right-4 z-10">
        <motion.div  animate={{ rotate: [0, 360]}}
        transition={{
          duration:10,
          repeat:Infinity,
          ease:"linear"
        }}
            className="w-[150px] h-[150px] relative">
             <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="">
                <textPath href="#innerCirclePath" className="text-xl font-semibold">Hire now .</textPath>
              </text>
              <text className="">
                <textPath href="#innerCirclePath" className="text-xl font-semibold" startOffset="44%">Context me .</textPath>
              </text>
              </svg>

              {/* arrow svg */}
         <div className="absolute inset-0 flex justify-center items-center">
         <div className="w-full max-w-[60px] h-[60px] flex justify
         -c§
         t
        ?er items-center rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
              </div>
        </motion.div>
       </motion.a>

     </div>
     <div className="absolute w-full max-w-[1000px] h-screen -z-10 flex justify-center items-end">
      <div className="">
        <img className="w-full md:max-w-[600px] md:h-[600px] max-w-[400px] h-[400px]" src={newimg} alt="" />
      </div>
     </div>
  </div>
</div>
  )
}

export default Home