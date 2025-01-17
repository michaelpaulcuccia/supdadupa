"use client";
import React, { useState, useEffect } from "react";
import { jobList } from "@/data";
//import { Input } from "/Users/michael-paulcuccia/supdadupa/my-app/components/ui/input";
import { Input } from "../ui/input";

const JobSearch: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>(""); // Filter by department
  const [selectedLocation, setSelectedLocation] = useState<string>(""); // Filter by city
  const [searchQuery, setSearchQuery] = useState<string>(""); // Store user input for search
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState<string>(""); // Debounce search for better UX

  // Debounce logic: Wait for 300ms after the user stops typing to update the search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  // Filter jobs based on selectedDepartment, selectedLocation, and searchQuery
  const filterJobs = () => {
    return jobList
      .filter((department) =>
        selectedDepartment ? department.department === selectedDepartment : true
      )
      .flatMap((department) =>
        department.jobs.filter((job) => {
          const matchesLocation = selectedLocation
            ? job.location.some((loc) => loc.city === selectedLocation)
            : true;

          const matchesSearch =
            debouncedSearchQuery.length < 4 ||
            job.title
              .toLowerCase()
              .includes(debouncedSearchQuery.toLowerCase()) ||
            department.department
              .toLowerCase()
              .includes(debouncedSearchQuery.toLowerCase());

          return matchesLocation && matchesSearch;
        })
      );
  };

  const filteredJobs = filterJobs();

  // Determine whether to show the job listing
  const shouldShowJobs =
    debouncedSearchQuery.length >= 4 ||
    selectedDepartment !== "" ||
    selectedLocation !== "";

  // Reset filters and search query
  const resetFilters = () => {
    setSelectedDepartment("");
    setSelectedLocation("");
    setSearchQuery("");
    setDebouncedSearchQuery("");
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center border p-4 gap-4">
        {/* Search Filter */}
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Search for jobs or departments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Department Filter */}
        <div>
          <label>
            Department:
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="border border-gray-300 p-2 rounded-md"
            >
              <option value="">All Departments</option>
              {jobList.map((department) => (
                <option
                  key={department.department}
                  value={department.department}
                >
                  {department.department}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Location Filter */}
        <div>
          <label>
            Location:
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="border border-gray-300 p-2 rounded-md"
            >
              <option value="">All Locations</option>
              {/* Get unique list of cities */}
              {Array.from(
                new Set(
                  jobList.flatMap((department) =>
                    department.jobs.flatMap((job) =>
                      job.location.map((loc) => loc.city)
                    )
                  )
                )
              ).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Reset Button */}
        {shouldShowJobs && (
          <button
            onClick={resetFilters}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300"
          >
            Reset
          </button>
        )}
      </div>

      {/* Job Listing */}
      <div style={{ marginTop: "20px" }}>
        {shouldShowJobs ? (
          filteredJobs.length ? (
            <ul>
              {filteredJobs.map((job, index) => (
                <li key={index} className="border-b border-gray-200 py-2">
                  <h3 className="font-medium">{job.title}</h3>
                  <p>
                    Locations:{" "}
                    {job.location
                      .map((loc) => `${loc.city}, ${loc.state}`)
                      .join(", ")}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default JobSearch;
