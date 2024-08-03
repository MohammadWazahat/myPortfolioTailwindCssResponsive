import React from "react";
import data from "../../dataFiles/myTech.json";
import SingleTech from "./SingleTech";
const MyTech = () => {
  console.log(data.techs);
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mx-4 md:grid-cols-3 md:gap-12 md:mx-16">
        {data.techs.map((item, index) => {
          return (
            <div key={index}>
              <SingleTech {...item}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyTech;
