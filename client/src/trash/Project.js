import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { FaBed, FaShower, FaCar, FaRuler } from "react-icons/fa";

const Project = () => {
  const { id } = useParams();
  const {
    data: projects,
    error,
    isPending,
  } = useFetch("http://localhost:8000/projects/" + id);

  const changeThumbnail = (event) => {
    const clickedThumbnail = event.target;
    const projectImg = document.getElementById(
      `${projects.areacode}${projects.id}main`
    );

    if (projectImg) {
      const backgroundImage = window
        .getComputedStyle(clickedThumbnail)
        .getPropertyValue("background-image");
      projectImg.style.backgroundImage = backgroundImage;
    }
  };

  if (isPending) {
    return console.log("Loading");
  }

  if (error) {
    return console.log(error);
  }

  return (
    <div className="projects w-screen sm:h-[130vh] h-[200vh] flex flex-col justify-center items-center lg:py-20 sm:py-10 py-5">
      <div className="projects-screen lg:px-20 sm:px-10 px-2 lg:py-20 sm:py-10 py-5 w-screen sm:h-[130vh] h-[150vh] flex flex-col-reverse lg:flex-row">
        <div className="projects-infoleft flex w-full lg:w-7/12 justify-start flex-col h-3/6 lg:h-full lg:py-32 lg:mt-0 mt-8 md:px-20 sm:px-10 border-l-4 border-slate-700">
          <h1 className="text-2xl font-bold pt-10 text-slate-50 font-merriweather">
            {projects.title}
          </h1>
          <h2 className="text-lg font-medium mb-5 text-gray-500">
            {projects.address}
          </h2>
          <ul className="flex flex-wrap gap-5 mb-5">
            <li className="flex justify-center items-center gap-1"><FaBed /> Bedrooms: {projects.bedrooms}</li>
            <li className="flex justify-center items-center gap-1"><FaShower /> Bathrooms: {projects.bathrooms}</li>
            <li className="flex justify-center items-center gap-1"><FaCar /> Parkings: {projects.parkings}</li>
            <li className="flex justify-center items-center gap-1"><FaRuler /> Area: {projects.sft} sft</li>
          </ul>
          <h2 className="text-lg font-medium text-gray-400 mb-1">More on {projects.title}</h2>
          <h1 className="text-lg font-regular w-10/12 text-justify">
            {projects.description}
          </h1>
        </div>
        <div className="projects-inforight lg:border-0 border-slate-700 lg:w-5/12 rounded-md w-full md:h-full h-1/2 md:py-0 py-4 bg-gray-100">
          <div
            className="project-img lg:h-4/6 lg:border-2 w-full h-4/6 rounded border-slate-700"
            id={`${projects.areacode}${projects.id}main`}
            style={{
              backgroundSize: "cover",
            }}
          ></div>
          <div className="picture-boxes lg:h-1/6 h-1/6 flex flex-row md:p-4 justify-around">
            <div
              className="thumbnail-box md:h-16 w-16 h-full border-2 bg-cyan-900 border-slate-700 cursor-pointer rounded-sm md:gap-0 gap-2"
              onClick={changeThumbnail}
              id={`${projects.areacode}${projects.id}1`}
            ></div>
            <div
              className="thumbnail-box md:h-16 w-16 h-full bg-orange-800 cursor-pointer rounded-sm md:gap-0 gap-2"
              onClick={changeThumbnail}
              id={`${projects.areacode}${projects.id}2`}
            ></div>
            <div
              className="thumbnail-box md:h-16 w-16 h-full border-2 bg-red-800 border-slate-700  cursor-pointer rounded-sm md:gap-0 gap-2"
              onClick={changeThumbnail}
              id={`${projects.areacode}${projects.id}3`}
            ></div>
            <div
              className="thumbnail-box md:h-16 w-16 h-full bg-pink-800 cursor-pointer rounded-sm md:gap-0 gap-2"
              onClick={changeThumbnail}
              id={`${projects.areacode}${projects.id}4`}
            ></div>
          </div>
        </div>
      </div>
      <div>
        <Link to={"/projects"}>
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded">
            Back to all projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
