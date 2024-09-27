import { RiReactjsLine } from "react-icons/ri"
import { FaNode,FaPython,FaDocker,FaHtml5,FaCss3Alt , FaGit , FaGithub } from "react-icons/fa"
import { SiMongodb,SiMysql,SiTypescript,SiJavascript } from "react-icons/si"
import { motion } from "framer-motion";

const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType: "reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Skills</motion.h1>
      <motion.div
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
      <motion.div 
      variants={iconVariants(2.5)}
      initial="initial"
      animate="animate"
      className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-7xl "/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNode className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div
        variants={iconVariants(6)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl "/>
        </motion.div>
        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaDocker className="text-7xl text-blue-400"/>
        </motion.div>
        <motion.div
        variants={iconVariants(7)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGit className="text-7xl text-black-400"/>
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGithub className="text-7xl text-black-400"/>
        </motion.div>
        <motion.div
        variants={iconVariants(6.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-orange-500"/>
        </motion.div>
        <motion.div
        variants={iconVariants(9.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3Alt className="text-7xl text-blue-500"/>
        </motion.div>
        <motion.div
        variants={iconVariants(5.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiJavascript className="text-7xl text-yellow-400"/>
        </motion.div>
        <motion.div
        variants={iconVariants(9)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTypescript className="text-7xl text-blue-400"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
