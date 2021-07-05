import React from 'react';
import ProjectInfo from '../../../assets/data/ProjectInfo';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
  let key = 0;
  return (
    <div>
      {ProjectInfo.map((project) => {
        return <div key={key++}><hr /><ProjectItem project={project} /></div>
      })}
    </div>
  )
}

export default ProjectList;
