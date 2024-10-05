import React from "react";
import Headphone4 from "../../assets/headphone4.png";
import { motion } from "framer-motion";
import { fadeUp } from "../Services/Services.jsx";
import { UpdateFollower } from "react-mouse-follower";

const Banner = () => {
  return (
    <>
      <section>
        <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
          {/* -----Banner Image------ */}
          <div>
            <motion.img
              initial={{ opacity: 0, x: -100, rotate: -180 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              exit={{ opacity: 0, x: -100, rotate: -180 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
              src={Headphone4}
              alt="banner image"
              className="w-[300px] md:w-[400px]"
            />
          </div>
          {/* -----Banner Text Info------ */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
              <motion.h1
                variants={fadeUp(0.6)}
                initial="hidden"
                whileInView="show"
                className="text-3xl lg:text-4xl font-semibold font-popins"
              >
                The Latest Headphones With The Latest Technology
              </motion.h1>
              <motion.p
                variants={fadeUp(0.7)}
                initial="hidden"
                whileInView="show"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae iusto minima ad ut id eos accusantium aut, aperiam
                quis incidunt!
              </motion.p>
              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "white",
                  zIndex: 9999,
                  followSpeed: 0.5,
                  mixBlendMode: "difference",
                  scale: 5,
                }}
              >
                <motion.button
                  variants={fadeUp(0.9)}
                  initial="hidden"
                  whileInView="show"
                  className="border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white"
                >
                  Shop Now
                </motion.button>
              </UpdateFollower>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
