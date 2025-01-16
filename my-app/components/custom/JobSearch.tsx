"use client";
import React, { useState } from "react";
import { jobList } from "@/data";

const JobSearch: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>(""); // To filter by department
  const [selectedLocation, setSelectedLocation] = useState<string>(""); // To filter by city

  // Helper function to filter jobs based on selections
  const filterJobs = () => {
    return jobList
      .filter((department) =>
        selectedDepartment ? department.department === selectedDepartment : true
      )
      .flatMap((department) =>
        department.jobs.filter((job) =>
          selectedLocation
            ? job.location.some((loc) => loc.city === selectedLocation)
            : true
        )
      );
  };

  const filteredJobs = filterJobs();

  return (
    <>
      <div className="flex flex-row justify-between items-center border p-4">
        {/* Search Filter */}
        <div>{/* INPUT goes here */}</div>
        {/* Department Filter */}
        <div>
          <label>
            Department:
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
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
        <div style={{ marginTop: "10px" }}>
          <label>
            Location:
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
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
      </div>
      {/* Job Listing */}
      <div style={{ marginTop: "20px" }}>
        {filteredJobs.length ? (
          <ul>
            {filteredJobs.map((job, index) => (
              <li key={index}>
                <h3>{job.title}</h3>
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
          <p>No jobs found. Try adjusting your filters.</p>
        )}
      </div>
    </>
  );
};

export default JobSearch;
