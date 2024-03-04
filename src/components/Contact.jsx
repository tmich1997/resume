import React from 'react'
import { motion } from 'framer-motion'
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github } from '../assets';
import { tableau } from '../assets';
import { linkedin } from '../assets';
import { powerBI } from '../assets';

const Contact = () => {
  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <h4 className='text-white-100 text-[14px] pl-1 tracking-wider mt-4'>
          dasjkh fah  fhajdfh ajdhf akdhfjkadhf akjhfkadhf kahdf kadhf uflkad fad
          falfujfaf lahdfh 
        </h4>
        <h4 className='text-white-100 text-[20px] pl-1 tracking-wider mt-5'>Thank you!</h4>

        <div className='flex flex-row gap-6 mt-20'>
          <div>
            <a href="https://www.linkedin.com/in/timble-michael" target='_blank' rel='noopener noreferrer'>
              <img src={linkedin} alt='Linkedin' width={30} height={30} />
            </a>
          </div>

          <div>
            <a href="https://github.com/tmich1997" target='_blank' rel='noopener noreferrer'>
              <img src={github} alt='GitHub' width={30} height={30} />
            </a>
          </div>

          <div>
            <a href="mailto:timblemichael20@gmail.com" target='_blank' rel='noopener noreferrer'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                style={{ color: "#fff" }}
                viewBox="0 0 24 24">
                <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
              </svg>
            </a>
          </div>

          <div>
            <a href="https://public.tableau.com/app/profile/timble/vizzes" target='_blank' rel='noopener noreferrer'>
              <img src={tableau} alt='tableau'  width={30} height={30}/>
            </a>
          </div>

          <div>
            <a href="https://www.novypro.com/profile_projects/timble-michael" target='_blank' rel='noopener noreferrer'>
              <img src={powerBI} alt='powrBI'  width={30} height={30}/>
            </a>
          </div>

        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>


    </div>
  )
}

export default SectionWrapper(Contact, "contact")