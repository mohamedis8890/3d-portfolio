import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech, index) => (
        <div key={tech.name} className="w-28 h-28">
          <Tilt
            className="xs:w-[100px] w-full"
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
          >
            <motion.div
              variants={fadeIn("right", "spring", 0.1 * index, 0.5)}
              className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-lg"
            >
              <div className="bg-tertiary rounded-[20px] py-2 px-2 flex justify-evenly items-center flex-col">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </motion.div>
          </Tilt>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
