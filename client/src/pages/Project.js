import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FaBed, FaShower, FaCar, FaRuler } from "react-icons/fa";
import ImageSlider from "../components/ImageSlider";

export default function Project() {
  const { id } = useParams();
  const [projects, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3001/projects/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Project not found");
        }
      })
      .then((data) => {
        setProject(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!projects) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl">Project not found</h1>
        <Link to="/projects" className="text-blue-500 mt-4">
          Back to all projects
        </Link>
      </div>
    );
  } else {
    return (
      <>
        <div className="project flex flex-col lg:flex-row w-sceen min-h-screen">
          <h1 className="px-5 md:px-20 lg:px-40 pt-32 lg:hidden text-3xl">
            {projects && projects.title}
          </h1>
          <p className="px-5 md:px-20 lg:px-40 mb-10 lg:hidden text-gray-600">
            {projects && projects.address}
          </p>
          <div className="project-info w-full lg:w-1/2 px-5 md:px-20 lg:px-32 py-12 lg:py-32 order-2 lg:order-1">
            <h1 className="hidden lg:block mb-1 text-3xl">
              {projects && projects.title}
            </h1>
            <p className="hidden lg:block mb-5 text-gray-600">
              {projects && projects.address}
            </p>
            <ul className="flex flex-wrap gap-3 mb-10">
              <li className="flex justify-center items-center gap-1">
                <FaBed />
                {projects && projects.bedrooms} Bedrooms
              </li>
              <li className="flex justify-center items-center gap-1">
                <FaShower />
                {projects && projects.bathrooms} Bathrooms
              </li>
              <li className="flex justify-center items-center gap-1">
                <FaCar />
                {projects && projects.parkings} Parkings
              </li>
              <li className="flex justify-center items-center gap-1">
                <FaRuler />
                {projects && projects.sft} sft Area
              </li>
            </ul>
            <p className="mb-5">
              Status:{" "}
              <span className="capitalize text-green-600 font-bold">
                {projects && projects.status}
              </span>
            </p>
            <p className="text-justify">{projects && projects.description}</p>
          </div>
          <div className="project-images lg:w-1/2 px-5 py-5 lg:px-20 lg:py-32 order-1 lg:order-2 h-full">
            <ImageSlider images={projects && projects.images} />
          </div>
        </div>
        <div className="flex justify-center items-start gap-8">
          <Link to={"/"}>
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 my-12 rounded">
              Back to Home
            </button>
          </Link>
          <Link to={"/projects"}>
            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 my-12 rounded">
              Back to all Projects
            </button>
          </Link>
        </div>
      </>
    );
  }
}
