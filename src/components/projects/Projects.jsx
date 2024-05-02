import ProjectCard from "../projectCard/ProjectCard";
import tailwindSetup from "./images/tailwind-setup.png";
import ghostLink from "./images/ghostlink.png";
import domcraft from "./images/domcraft.png";
import chowlin from "./images/chowlin.png";
import formlinx from "./images/formlinx.png";
import gimbaLite from "./images/gimbalite.png";
import hadifox from "./images/hadifox.png";

function Projects() {
  return (
    <section className="mt-20 px-5 pb-20">
      <div className="md:ml-20">

   
      <h3 className="text-6xl font-sans text-white font-semibold">My <span className="highl-text">Projects</span></h3>
      
      </div>

      <div className="mt-10 flex flex-wrap justify-center ">
        <ProjectCard
          name={"Tailwind Setup"}
          image={tailwindSetup}
          description={
            "A CLI tool that creates react app with vite and automates the tailwind css configuration process"
          }
          stacks={["Node JS", "NPM"]}
          linkText={"See Documentaion"}
          url={"https://www.npmjs.com/package/@collinsadi/tailwind-setup"}
        />
        <ProjectCard
          name={"Ghost Link"}
          image={ghostLink}
          description={
            "An annonymous chat platform that let's you see what a user is typing in real-time, even before they send the message"
          }
          stacks={["Node JS", "HTML", "CSS"]}
          linkText={"Visit Website"}
          url={"https://ghostlink.onrender.com/"}
        />
        <ProjectCard
          name={"DOMCraft.js"}
          image={domcraft}
          description={
            "my light weight javascript library, for basic DOM manipulation and event handling"
          }
          stacks={["Javascript"]}
          linkText={"See Documentaion"}
          url={"https://codellins.github.io/domcraft/v1/"}
        />
        <ProjectCard
          name={"Chowlin"}
          image={chowlin}
          description={
            "Chowlin is a Fully Functional Food Ordering Platform, with User and Vendor Sections, including a digital wallet"
          }
          stacks={["Node JS", "express JS", "HTML", "CSS"]}
          linkText={"Visit Website"}
          url={"https://chowlin.onrender.com/"}
        />
        <ProjectCard
          name={"Formlinx"}
          image={formlinx}
          description={
            "A platform that allows you to receive HTML form submissions directly in your email."
          }
          stacks={["Node JS", "express JS", "HTML", "CSS"]}
          linkText={"Visit Website"}
          url={"https://formlinx.onrender.com/"}
        />
        <ProjectCard
          name={"Gimba Lite"}
          image={gimbaLite}
          description={
            "A Blog Content Management System, also my first Full Stack Project."
          }
          stacks={["Node JS", "express JS", "HTML", "CSS"]}
          linkText={"Visit Website"}
          url={"https://gimba.onrender.com/"}
        />
        <ProjectCard
          name={"Hadifox"}
          image={hadifox}
          description={"Ecommerce Shop Design, for Javascript Practice."}
          stacks={["HTML", "CSS", "Javascript"]}
          linkText={"Visit Website"}
          url={"https://collinsadi.github.io/hadifox/"}
        />
      </div>

      <div className="mt-5 flex justify-center items-center">
        <a
          className="bg-[#D09E72] hover:bg-[#D09E72]/90 text-white font-bold py-2 px-6 rounded"
          target="_blank"
          href="https://github.com/collinsadi"
        >
          See More Projects
        </a>
      </div>
    </section>
  );
}

export default Projects;
