import React from "react";
import { Button } from "@aws-amplify/ui-react";

const Createconnections = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div className="carrd" key={index}>
          <div className="carrd-image">
            <img src={value.img1} alt="cant load" />
          </div>

          <div>
            <p className="carrd-title"> {value.title1} </p>
            <p className="carrd-description"> {value.description1} </p>
          </div>
          <Button className="carrd-btn" variant="primary" color="black">{value.cbtn1}</Button>
        </div>
      ))}
      ;
    </>
  );
};
export default Createconnections;
