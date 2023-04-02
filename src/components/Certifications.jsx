import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { color, motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const CertificationCard = ({ certification }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    iconStyle={{ background: certification.iconBg }}
    date={certification.date}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={certification.icon}
          alt={certification.company_name}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {certification.title}
      </h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {certification.company_name}
      </p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {certification.points.map((point, index) => (
          <li
            key={`certification-point-${index}`}
            className="text-white-100 tracking-wider pl-1 text-[14px]"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Certification = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>It's Been a Long Way</p>
        <h1 className={styles.sectionHeadText}>Certifications.</h1>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Certification, "");
