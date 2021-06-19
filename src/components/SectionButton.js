import React from 'react';
import './SectionButton.css';

const SectionButton = (props) => {
  let data = props.data;
  let name = data.name;
  let iconurl = data.iconurl;
  let iconalt = data.iconalt;

  return (
    <div className='buttonbody'>
      <img className='buttonimg' src={iconurl} alt={iconalt} />
      <h4 className='buttontxt'>{name}</h4>
    </div>
  )
};

export default SectionButton;
