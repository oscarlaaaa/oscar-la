import React, { useState, useEffect } from "react";
import SectionButton from './SectionButton';
import MenuData from '../assets/data/MenuData';

const SectionMenu = () => {
  const [menuSections, setMenuSections] = useState([]);

  // const getData = () => {
  //   fetch("MenuData.json", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //   })
  //     .then(function (response) {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       console.log(myJson);
  //       setMenuSections(myJson);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  let count = 0;
  let data = MenuData;
  console.log(data);

  return (
    <div>
      {MenuData &&
        MenuData.length > 0 &&
        MenuData.map((menuitem) => {
          return <SectionButton data={menuitem} key={count++} />;
        })}
    </div>
  );
};

export default SectionMenu;
