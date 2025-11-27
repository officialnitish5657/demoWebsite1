// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function Projects() {
//   const projects = [
//     {
//       title: "Modern Portfolio Website",
//       desc: "A clean, animated, and fully responsive portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
//       img: "/bg_1.jpg",
//       link: "#",
//       tags: ["Next.js", "Tailwind", "Framer Motion"],
//     },
//     {
//       title: "Business Landing Page",
//       desc: "High-conversion landing page designed for startups with smooth animations, SEO optimization, and elegant UI.",
//       img: "/bg_2.jpg",
//       link: "#",
//       tags: ["React", "UI/UX", "SEO", "Animations"],
//     },
//     {
//       title: "E-Commerce Web App",
//       desc: "A dynamic e-commerce platform with product pages, shopping cart, real-time filters, and clean dashboard UI.",
//       img: "/bg_1.jpg",
//       link: "#",
//       tags: ["Next.js", "Stripe", "REST API"],
//     },
//   ];

//   return (
//     <section className="min-h-screen w-full bg-gray-50 py-20 px-6">
//       <div className="max-w-6xl mx-auto">

//         {/* HEADER */}
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-4xl md:text-6xl font-extrabold text-center text-gray-900 mb-12"
//         >
//           My Projects
//         </motion.h1>

//         {/* PROJECT GRID */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {projects.map((p, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: i * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden"
//             >
//               <div className="relative h-56 w-full">
//                 <Image
//                   src={p.img}
//                   alt={p.title}
//                   fill
//                   className="object-cover hover:scale-105 transition"
//                 />
//               </div>

//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {p.title}
//                 </h3>

//                 <p className="text-gray-700 text-sm mb-4">
//                   {p.desc}
//                 </p>

//                 <div className="flex gap-2 flex-wrap mb-4">
//                   {p.tags.map((tag, i) => (
//                     <span
//                       key={i}
//                       className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded-lg"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 <a
//                   href={p.link}
//                   className="inline-block mt-2 px-5 py-2 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition"
//                 >
//                   View Project
//                 </a>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* SKILLS SECTION */}
//         <div className="mt-24">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-center text-gray-900 mb-10"
//           >
//             Technologies I Use
//           </motion.h2>

//           <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//             {[
//               "Next.js",
//               "React.js",
//               "Tailwind CSS",
//               "Framer Motion",
//               "Node.js",
//               "MongoDB",
//               "REST APIs",
//               "UI / UX Design",
//               "Git & GitHub",
//             ].map((skill, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: i * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white shadow-md p-4 rounded-xl text-center font-semibold text-gray-800 hover:shadow-xl hover:-translate-y-2 transition"
//               >
//                 {skill}
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* EXPERIENCE SECTION */}
//         <div className="mt-24">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-center text-gray-900 mb-10"
//           >
//             Experience & Highlights
//           </motion.h2>

//           <div className="grid md:grid-cols-2 gap-10">
//             {/* CARD 1 */}
//             <motion.div
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="bg-white shadow-lg p-8 rounded-2xl"
//             >
//               <h3 className="text-xl font-bold mb-2">Frontend Developer</h3>
//               <p className="text-gray-700 mb-4">
//                 Built and deployed multiple web applications, improving UI,
//                 user experience, and website speed for various clients.
//               </p>
//               <span className="text-sm text-gray-500">2022 - Present</span>
//             </motion.div>

//             {/* CARD 2 */}
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="bg-white shadow-lg p-8 rounded-2xl"
//             >
//               <h3 className="text-xl font-bold mb-2">UI/UX Designer</h3>
//               <p className="text-gray-700 mb-4">
//                 Created clean, modern design systems and prototypes that
//                 improved user engagement and visual identity.
//               </p>
//               <span className="text-sm text-gray-500">2021 - Present</span>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  const categories = ["All", "Web", "UI/UX", "Dashboard"];
  const [active, setActive] = useState("All");
  const [page, setPage] = useState(1);
  const perPage = 6;

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  const totalPages = Math.ceil(filtered.length / perPage);

  const displayed = filtered.slice((page - 1) * perPage, page * perPage);
  return (
    <section className="w-full py-20 bg-[#F2F3F7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-black mb-10">
          My Projects
        </h1>

        {/* FILTERS */}
        <div className="flex items-center flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setPage(1);
              }}
              className={`px-4 py-2 rounded-lg border-2 font-semibold hover:scale-95 cursor-pointer ${active === cat
                ? "bg-black text-white"
                : "bg-white text-black"
                } transition`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {displayed.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="relative w-full h-48">
                  <Image src={project.image} fill alt={project.title} className="object-cover" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-600 mt-2 line-clamp-2">
                    {project.description}
                  </p>

                  <button className=" cursor-pointer hover:underline underline-offset-4 mt-4 text-blue-600 font-semibold">
                    View Details →
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 &&
          <div className="flex items-center justify-center gap-3 mt-12">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 rounded-lg border ${page === i + 1
                  ? "bg-black text-white"
                  : "bg-white text-gray-700"
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        }
      </div>
    </section>
  );
}
