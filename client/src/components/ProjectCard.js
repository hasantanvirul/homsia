import React from "react";
import { Link } from "react-router-dom";
import { FaBed, FaShower, FaCar, FaRuler } from "react-icons/fa";
// import useFetch from '../hooks/useFetch';

export default function ProjectCard(props) {
  const firstImage =
    props.data.images && props.data.images.length > 0
      ? `/assets/projects/${props.data.images[0]}`
      : "";

  console.log(props.data);
  return (
    <div className="project-card bg-white w-80 max-w-fit h-fit overflow-hidden">
      <div className="image-container relative h-72 w-fit overflow-hidden">
        {firstImage && (
          <img
            src={firstImage}
            alt=""
            className="h-full hover:scale-105 transition-all"
          />
        )}
        <p className="absolute top-4 right-4 bg-black/75 text-white text-xs px-2 py-1 rounded uppercase">
          {props.data.status}
        </p>
      </div>
      <div className="text-container p-5">
        <h1 className="font-medium text-lg">{props.data.title}</h1>
        <p className="font-light text-gray-500 mb-5">{props.data.address}</p>
        <div className="infoAndButton flex justify-between gap-1 items-center">
          <div className="info flex gap-3 text-sm md:text-base">
            <p className="flex justify-center items-center gap-1">
              {props.data.bedrooms}
              <FaBed />
            </p>
            <p className="flex justify-center items-center gap-1">
              {props.data.bathrooms}
              <FaShower />
            </p>
            <p className="flex justify-center items-center gap-1">
              {props.data.parkings}
              <FaCar />
            </p>
            <p className="flex justify-center items-center gap-1 whitespace-nowrap">
              {props.data.sft} sft
              <FaRuler />
            </p>
          </div>
          <Link to={`/projects/${props.data.id}`} key={props.data.id}>
            <button className="bg-black hover:bg-gray-800 text-white py-1 px-2 rounded">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
