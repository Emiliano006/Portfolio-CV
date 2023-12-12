// import { BsArrowRight } from "react-icons/bs";
// import { motion } from "framer-motion";
// import React from "react";
// import emailjs from "emailjs-com";
// import {fadeIn} from "../../variants";

// const Contact = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_gtalehn", // Reemplaza con tu ID de servicio de EmailJS
//         "template_wes81rj", // Reemplaza con tu ID de plantilla de EmailJS
//         e.target, // El formulario actual
//         "2OpifL6wpUEPjP0qC" // Reemplaza con tu ID de usuario de EmailJS
//       )
//       .then(
//         (result) => {
//           console.log("Email successfully sent!", result.text);
//           setFormData({ name: "", email: "", subject: "", message: "" });
//         },
//         (error) => {
//           console.error("Error sending email:", error.text);
//         }
//       );
//   };

//   return (
//     <div className="h-full bg-primary/30">
//       <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
//         <div className="flex flex-col w-full max-w-[700px]">
//           <motion.h2
//             className="h2 text-center mb-12"
//             variants={fadeIn("up", 0.2)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//           >
//             Let's <span className="text-accent">connect.</span>
//           </motion.h2>
//           <motion.form
//             className="flex-1 flex flex-col gap-6 w-full mx-auto"
//             variants={fadeIn("up", 0.4)}
//             initial="hidden"
//             animate="show"
//             exit="hidden"
//             onSubmit={handleSubmit}
//           >
//             <div className="flex gap-x-6 w-full">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 className="input border-white"
//                 title="Name accepts only letters and spaces"
//                 required
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 className="input border-white"
//                 title="Incorrect email format"
//                 required
//               />
//             </div>
//             <input
//               type="text"
//               name="subject"
//               placeholder="Subject"
//               className="input border-white"
//               required
//             />
//             <textarea
//               name="message"
//               cols="50"
//               rows="10"
//               placeholder="Message"
//               className="textarea border-white"
//               required
//             ></textarea>
//             <button
//               type="submit"
//               className="btn rounded-full border border-white max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
//             >
//               <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
//                 Let's talk
//               </span>
//               <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
//             </button>
//           </motion.form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { fadeIn } from "../../variants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gtalehn", // Reemplaza con tu ID de servicio de EmailJS
        "template_wes81rj", // Reemplaza con tu ID de plantilla de EmailJS
        e.target, // El formulario actual
        "2OpifL6wpUEPjP0qC" // Reemplaza con tu ID de usuario de EmailJS
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            className="h2 text-center mb-12"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Let's <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input border-white"
                title="Name accepts only letters and spaces"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input border-white"
                title="Incorrect email format"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input border-white"
              required
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              cols="50"
              rows="10"
              placeholder="Message"
              className="textarea border-white"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let's talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
