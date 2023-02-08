import React from 'react'
import data from '../data/projects';

const Projects = () => {
  return (
    <div title='projects' className="max-w-6xl px-5 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {data.map((project, id) => (
      <div
        key={id}
        className={`${project.color} p-5 transition-all ease-in-out delay-200`}
        title={project.title}
      >
        <img src={project.image} className='w-full h-32' width={256} height={256} alt={project.title} />
        <div className="flex justify-between items-center">
          <a href={project.link} className={`py-3 px-5 rounded-sm`} title='view demo'>
            View Project
          </a>
          <a href={project?.github} className={` py-3 px-5 rounded-sm`} title='visit github'>
            Github
          </a>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Projects