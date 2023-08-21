"use client";
import { FC, useState } from "react";
import FilterTablet from "./FilterTablet";

import { Job } from "../api/Jobs";

const SingleJob = ({ job }: { job: Job }) => {
  const [isHovered, setIsHovered] = useState<Boolean>(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`cards flex flex-wrap justify-between items-center rounded-md w-full p-8 shadow-lg bg-white ${
        isHovered
          ? "hover:border-primary hover:border-l-4 transition-all duration-150"
          : ""
      }`}
    >
      <div className="job_info flex gap-4 items-center">
        <img
          className="w-20 h20 rounded-full"
          src={job.logo}
          alt="company avatar"
        />
        <div className="job_detail flex flex-col">
          <div className="title_content flex gap-3 items-center">
            <span className="company_name text-primary font-bold">
              {job.company}
            </span>

            {job.new && <div className="uppercase flex justify-center items-center rounded-3xl w-14 h-7 text-sm bg-primary text-white">
              <span>new!</span>
            </div>}
            
            {job.featured &&  <div className="uppercase flex justify-center items-center rounded-3xl w-20 h-7 text-sm bg-Very_Dark_Grayish_Cyan text-white">
              <span>featured</span>
            </div>}
           
          </div>

          <span
            className="title font-bold text-lg text-Very_Dark_Grayish_Cyan hover:cursor-pointer hover:text-primary transition-colors duration-300"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            {job.position}
          </span>

          <div className="flex gap-3 text-Dark_Grayish_Cyan">
            <span>{job.postedAt}</span>.<span>{job.contract}</span>.<span>{job.location}</span>
          </div>
        </div>
      </div>
      <div className="tags flex gap-3">
        <FilterTablet role={job.role} level={job.level} languages={job.languages} />
      </div>
    </div>
  );
};

export default SingleJob;
