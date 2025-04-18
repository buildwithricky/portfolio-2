import Image from "next/image";
import projectImage from "@/assets/test-image.png"
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const Projects = ()=>{
    return (
      <section className="section-container bg-black">
        <h2 className="section-heading text-white m-10">
          My <span className="ml-2 font-extrabold text-2xl">Projects</span>
        </h2>
        <div className="flex justify-center flex-col gap-10 mb-10 2xl:items-center">
          {/* Project cards */}
          <div className="flex flex-col justify-center items-center sm:block  lg:grid lg:grid-cols-2  2xl:w-[80%] ">
            <div className="mb-5 ">
              <Image
                alt="project-image"
                src={projectImage}
                className="w-96 h-96 sm:w-full object-cover bg-center rounded-md  lg:w-[530px] lg:justify-self-center"
              />
            </div>
            <div className="text-primary flex flex-col justify-evenly">
              <h4 className="font-extrabold mb-5">01</h4>
              <h5 className="font-extrabold mb-5">Project Name</h5>
              <p className="font-normal text-tertiary text-left tracking-wider mb-5">
                I'm Evren Shah Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to specimen book.
              </p>
              <OpenInNewIcon />
            </div>
          </div>

        </div>
      </section>
    );
}

export default Projects;