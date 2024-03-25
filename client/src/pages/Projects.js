import useFetch from "../hooks/useFetch";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

const Projects = () => {
  const { data: projects } = useFetch("http://localhost:3001/projects");
  if (!projects) {
    return console.log("Projects loading");
  }

  return (
    <div className="flex flex-col justify-center items-center bg-[#f3f3f3] w-screen">
      <div className="projects px-5 sm:px-20 lg:px-40 py-32 w-full">
        <div className="projects-text flex flex-col justify-center sm:items-start items-center mb-10">
          <h1 className="text-4xl mb-8 font-merriweather">Our Projects</h1>
        </div>
        <div className="projects-container flex justify-center items-center flex-wrap gap-5">
          {projects.map((project, index) => {
            return <ProjectCard data={project} key={index} />;
          })}
        </div>
      </div>
      <Link to={"/"}>
        <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 mb-12 rounded">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Projects;
