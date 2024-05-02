import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

function Profile() {
  return (
    <section className="pl-5 flex flex-col center justify-center items-center">
      <div>
        <h1
          className={
            "font-sans text-6xl sm:text-6xl md:text-8xl text-white font-bold my-3"
          }
        >
          Collins Oribo
        </h1>
        <h3 className={"font-sans text-5xl my-1.5 highl-text"}>
          Software Engineer
        </h3>
        <p className={"font-mono italic text-white text-2xl max-w-300 mt-3"}>
          I am Passionate about building functional web and mobile
          appplications, <br /> and also automating tasks
        </p>

        <div className="flex mt-5 text-1xl">
          <span className="mx-3 highl-text">
            <FaGithub />
          </span>
          <span className="mx-3 highl-text">
            <FaLinkedin />
          </span>
          <span className="mx-3 highl-text">
            <FaXTwitter />
          </span>
          <span className="mx-3 highl-text">
            <FaInstagram />
          </span>
        </div>

        <div className="mt-5 ">
        <a
          className="bg-[#D09E72] hover:bg-[#D09E72]/90 text-white font-bold py-2 px-6 rounded"
          href="https://drive.google.com/uc?export=download&id=1uGrr6YI8BYfX85ycdEXB66IxlcdXPOLI"
        >
          Curriculum Vitae
        </a>
      </div>
      </div>
    </section>
  );
}

export default Profile;
