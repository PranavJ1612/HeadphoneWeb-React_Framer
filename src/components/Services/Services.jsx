import React from "react";
import Icon1 from "../../assets/icons/obj1.png";
import Icon2 from "../../assets/icons/obj2.png";
import Icon3 from "../../assets/icons/obj3.png";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
};

const SERVICESDATA = [
  {
    id: 1,
    title: "Security",
    icon: Icon1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor.consectetur adipiscing elit.",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Guarantee",
    icon: Icon2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor.consectetur adipiscing elit.",
    delay: 0.8,
  },
  {
    id: 3,
    title: "Affordability",
    icon: Icon3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor.consectetur adipiscing elit.",
    delay: 1.1,
  },
];

const Services = () => {
  return (
    <>
      <section className="bg-gray-100 font-poppins py-8">
        <div className="container py-14">
          <motion.h2
            variants={fadeUp(0.2)}
            initial="hidden"
            whileInView="show"
            className="text-3xl font-bold text-center pb-10"
          >
            Services
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {SERVICESDATA.map((service) => (
              <motion.div
                key={service.id}
                variants={fadeUp(service.delay)}
                initial="hidden"
                whileInView="show"
                className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg gap-6 rounded-xl bg-white"
              >
                <img src={service.icon} alt="" className="w-[100px] mb-4" />
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-center text-sm text-black/75">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
