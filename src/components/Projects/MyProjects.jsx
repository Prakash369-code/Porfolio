import React, { useState } from 'react';
import { ProjectGrid } from './ProjectGrid';
import { ActiveProjectCard } from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: "Nritya Kala Kshetra",
    description: "Website project for a dance and performing arts organization.",
    deployLink: "https://nrityakalakshetra.org/",
    skills: ["WordPress", "Website Development"]
  },
  {
    id: 2,
    title: "Sai Shree Siddha Wellness Care",
    description: "Website project for a wellness and healthcare provider.",
    deployLink: "https://saishreesiddhawellnesscare.com/",
    skills: ["WordPress", "Website Development"]
  },
  {
    id: 3,
    title: "eHook Realty",
    description: "Real estate website project for eHook Realty.",
    deployLink: "https://ehookrealty.in/",
    skills: ["WordPress", "Real Estate"]
  },
  {
    id: 4,
    title: "Seama Housewares",
    description: "Housewares website focused on healthy living and everyday products.",
    deployLink: "https://seama.in/",
    skills: ["WordPress", "eCommerce"]
  },
  {
    id: 5,
    title: "VR Global Education",
    description: "Education website project for VR Global.",
    deployLink: "https://vrglobaledu.net/",
    skills: ["WordPress", "Education"]
  },
  {
    id: 6,
    title: "Foyer Technology",
    description: "Website project for a technology and business automation company.",
    deployLink: "https://foyertech.com/",
    skills: ["WordPress", "Business Website"]
  },
  {
    id: 7,
    title: "MK Madhavan",
    description: "Personal website project for MK Madhavan.",
    deployLink: "https://mkmadhavan.com/",
    skills: ["WordPress", "Personal Website"]
  },
  {
    id: 8,
    title: "Spaceforma",
    description: "Housewares website project for Spaceforma.",
    deployLink: "https://spaceforma.in/",
    skills: ["WordPress", "eCommerce"]
  },
  {
    id: 9,
    title: "SVaaN Global Tech",
    description: "Technology company website project for SVaaN Global Tech.",
    deployLink: "https://svaantech.com/",
    skills: ["WordPress", "Technology"]
  }
];

const additionalProjects = [
  { title: "Upspire", url: "https://upspireindia.com/" },
  { title: "Vijay Lawyer", url: "https://vijaylawyer.com/" },
];

export default function MyProjects() {
  const [activeProject, setActiveProject] = useState(projectsData[4]);
  const [gridProjects, setGridProjects] = useState(projectsData.filter(p => p.id !== 5));

  const gridCells = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  const handleSwap = (clickedProject) => {
    const clickedIndex = gridProjects.findIndex(p => p.id === clickedProject.id);
    if (clickedIndex === -1) return;

    const newGridProjects = [...gridProjects];
    newGridProjects[clickedIndex] = activeProject;

    setGridProjects(newGridProjects);
    setActiveProject(clickedProject);

    // Notify global GSAP timeline to trigger a scan
    window.dispatchEvent(new Event('projectSwapped'));
  };

  return (
    <div className="w-full">
      <div id="projects-grid-container" className="relative w-full pt-2 pb-12 flex items-center justify-center p-4">
        <ProjectGrid gridCells={gridCells} gridProjects={gridProjects} handleSwap={handleSwap} />
        
        {/* Center Active Project Card */}
        {activeProject && (
          <ActiveProjectCard activeProject={activeProject} />
        )}
      </div>
      <div className="w-full max-w-3xl mx-auto px-4 pb-6 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">More client work</p>
        <div className="flex flex-wrap justify-center gap-3">
          {additionalProjects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/70 bg-white/40 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-white/70"
            >
              {project.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
