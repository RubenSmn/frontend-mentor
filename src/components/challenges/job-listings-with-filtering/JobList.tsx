import Filter from "./Filter";
import Card from "./Card";
import { useState } from "react";

export type Job = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

function JobList({ jobs }: { jobs: Job[] }) {
  const [filters, setFilters] = useState<string[]>([]);

  function handleRemoveFilter(filterToRemove: string) {
    setFilters((prevFilters) => {
      if (filterToRemove === "all") return [];
      return prevFilters.filter((filter) => filter !== filterToRemove);
    });
  }

  function handleAddFilter(filterToAdd: string) {
    setFilters((prevFilters) => {
      if (prevFilters.includes(filterToAdd) === false)
        return [...prevFilters, filterToAdd];
      return prevFilters;
    });
  }

  const filteredJobs = jobs.filter((job) => {
    const toMatch = [job.role, job.level, ...job.tools, ...job.languages];
    return filters.every((filter) => toMatch.includes(filter));
  });

  return (
    <>
      <Filter onRemoveFilter={handleRemoveFilter} filters={filters} />
      <ul className="listings">
        {filteredJobs.map((job) => {
          return (
            <Card job={job} filters={filters} onAddFilter={handleAddFilter} />
          );
        })}
      </ul>
    </>
  );
}

export default JobList;
