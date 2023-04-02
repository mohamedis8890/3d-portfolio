import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { linkedin, resume, twitter, github } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_evoryhg",
        "template_0zef8ys",
        {
          from_name: form.name,
          to_name: "Mohamed",
          from_email: form.email,
          to_email: "mohamed.is8890@gmail.com",
          message: form.message,
        },
        "opruL3pcHofEuymMW"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you, I will get back to you ASAP🙌.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error.message);
        alert("Something went wrong 😬, Please try agin later.");
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="flex justify-start gap-1 items-center">
          <a
            href="https://www.linkedin.com/in/mohamed-saleh-webdev/"
            target="_blank"
          >
            <img
              className="object-contain h-[30px] mr-4"
              src={linkedin}
              alt="LinkedIn Profile"
            />
          </a>
          <a href="https://github.com/mohamedis8890" target="_blank">
            <img
              className="object-contain h-[40px] mr-4"
              src={github}
              alt="Github Profile"
            />
          </a>
          <a href="https://www.twitter.com/modev_guru" target="_blank">
            <img
              className="object-contain h-[30px] mr-4"
              src={twitter}
              alt="Twitter Account"
            />
          </a>
          <a href="/resume.pdf" target="_blank" download>
            <img
              className="object-contain h-[30px] mr-4"
              src={resume}
              alt="Download My Resumé"
            />
          </a>
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 "
        >
          <label className="flex flex-col">
            <span className="text-white  font-medium mb-4 ">Your Name:</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white  font-medium mb-4 ">Your Email:</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white  font-medium mb-4 ">Your Message:</span>
            <textarea
              rows={7}
              type="text"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl "
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
