import React from "react";
import Blog1 from "../../assets/blogs/blog1.jpg";
import Blog2 from "../../assets/blogs/blog2.jpg";
import Blog3 from "../../assets/blogs/blog3.jpg";
import Blog4 from "../../assets/blogs/blog4.jpg";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";

const BLOGSDATA = [
  {
    id: 1,
    title: "Commodo sint consequat est qui non pariatur amet sint et.",
    desc: "Magna Lorem in sit eiusmod Lorem aliqua magna esse eu excepteur dolor enim in laborum. Et sit eiusmod commodo laboris aliquip dolore. Lorem aliqua minim aliquip reprehenderit exercitation ex do laboris consectetur elit occaecat veniam enim. ",
    img: Blog1,
    link: "#",
  },
  {
    id: 2,
    title: "Commodo sint consequat est qui non pariatur amet sint et.",
    desc: "Magna Lorem in sit eiusmod Lorem aliqua magna esse eu excepteur dolor enim in laborum. Et sit eiusmod commodo laboris aliquip dolore. Lorem aliqua minim aliquip reprehenderit exercitation ex do laboris consectetur elit occaecat veniam enim. ",
    img: Blog2,
    link: "#",
  },
  {
    id: 3,
    title: "Commodo sint consequat est qui non pariatur amet sint et.",
    desc: "Magna Lorem in sit eiusmod Lorem aliqua magna esse eu excepteur dolor enim in laborum. Et sit eiusmod commodo laboris aliquip dolore. Lorem aliqua minim aliquip reprehenderit exercitation ex do laboris consectetur elit occaecat veniam enim. ",
    img: Blog3,
    link: "#",
  },
  {
    id: 4,
    title: "Commodo sint consequat est qui non pariatur amet sint et.",
    desc: "Magna Lorem in sit eiusmod Lorem aliqua magna esse eu excepteur dolor enim in laborum. Et sit eiusmod commodo laboris aliquip dolore. Lorem aliqua minim aliquip reprehenderit exercitation ex do laboris consectetur elit occaecat veniam enim. ",
    img: Blog4,
    link: "#",
  },
];

const Blogs = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="container py-14">
          <h2 className="text-3xl font-bold text-center font-poppins pb-8">
            Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {BLOGSDATA.map((blog) => (
              <UpdateFollower
                key={blog.id}
                mouseOptions={{
                  backgroundColor: "black",
                  zIndex: 999,
                  followSpeed: 1.5,
                  text: "read",
                  textFontSize: "3px",
                  scale: 4,
                }}
              >
                <div
                  // key={blog.id}
                  className="flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300"
                >
                  <img src={blog.img} />
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="line-clamp-2">{blog.desc}</p>
                  </div>
                </div>
              </UpdateFollower>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
