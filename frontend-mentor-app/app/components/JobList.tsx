"use client";
import { useSelector } from "react-redux";
import { useGetAllJobByNameQuery } from "../api/Jobs";
import SingleJob from "./SingleJob";
import { RootStateType } from "../store";

const JobList = () => {
  let { data: allJobs, isLoading, error } = useGetAllJobByNameQuery(); // Fetch all jobs
  const { role, level, language } = useSelector(
    (state: RootStateType) => state.filter
  ); // Get filter values from Redux store

  //if any filter applied
  if (role.length != 0 || level.length != 0 || language.length != 0) {
    //role
    allJobs = allJobs?.filter((job) => {
      if (role.length === 0) {
        return true;
      }

      return role.includes(job.role);
    });

    console.log(allJobs);

    //level
    allJobs = allJobs?.filter((job) => {
      if (level.length === 0) {
        return true;
      }

      return level.includes(job.level);
    });
    console.log(level, allJobs);

    //langauge
    allJobs = allJobs?.filter((job) => {
      if (language.length === 0) {
        return true;
      }

      return language.every((lang) => job.languages.includes(lang));
    });
    console.log(allJobs);
  }

  return (
    <div className=" content mt-16 mx-28 flex flex-col gap-4 justify-center">
      {isLoading && <p>LOADING ...</p>}
      {error && <p>Something went wrong ...</p>}
      {allJobs?.map((job) => (
        <SingleJob key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
