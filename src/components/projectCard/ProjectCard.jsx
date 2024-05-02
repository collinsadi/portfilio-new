import test from "./images/test.png";
import { FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ image, name, description, stacks,linkText,url }) {
  return (
    <div className="max-w-500 sm:max-w-sm ml-0 md:ml-5 mt-5">
      <img src={image} className="max-w-300 sm:max-w-sm rounded-xl" alt="" />
      <div className="mt-3">
        <h3 className="text-3xl font-sans text-white font-semibold">{name}</h3>
        <p className="font-mono italic text-white mt-2">{description}</p>
      </div>
    
      <div className="mt-3">
        {stacks && stacks.map((stack, index) => <span className="mx-2 highl-text text-xl" key={index}>{stack}</span>)}
      </div>

      <div className="mt-4 text-xl text-white font-mono italic flex">
        <span>
          <FaExternalLinkAlt />
        </span>
        <a target="_blank" href={url} className="ml-3">
          {linkText}
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
