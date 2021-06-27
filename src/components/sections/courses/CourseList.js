import React from "react";
import CourseInfo from "../../../assets/data/CourseInfo";
import "./CourseList.css";
import { ReactComponent as Outline} from "../../../assets/img/book.svg";

const CourseList = () => {
  return (
    <div>
      <h2>Courses I have taken</h2>
      <div style={{width: "80%", margin: "auto"}}>
        <p>
          Here is a list of the courses I have taken that I felt have taught me
          programming-relevant concepts. This list contains a variety of courses from BCIT, UBC, and 
          Online that I find have helped me become a better developer. 
        </p>
      </div>

      <table>
        <tr>
          <th>Course Code</th>
          <th>Subject</th>
          <th>Description</th>
          <th>Outline</th>
        </tr>
        {CourseInfo.map((course) => {
          return (
            <tr>
              <td>{course.title}</td>
              <td>{course.subject}</td>
              <td>{course.description}</td>
              <td>
                <a href={course.outlineurl}>
                  <Outline style={{height: "20px", width: "auto", fill: "darkblue"}}/>
                </a>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default CourseList;
