import React from 'react';
import ProjectInfo from '../../../assets/data/ProjectInfo';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
  let key = 0;
  return (
    <div>
      {ProjectInfo.map((project) => {
        return <><hr /><ProjectItem project={project} key={key++} /></>
      })}
    </div>
  )
}

export default ProjectList;
