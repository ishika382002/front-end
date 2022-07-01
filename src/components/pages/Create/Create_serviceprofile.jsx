

import React from "react";
import { Button } from "@aws-amplify/ui-react";

const Createserviceprofile = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div className="carrd" key={index}>
          <div className="carrd-image">
            <img src={value.img} alt="cant load" />
          </div>

          <div>
            <p className="carrd-title"> {value.title} </p>
            <p className="carrd-description"> {value.description} </p>
          </div>
          <button className="carrd-btn" >{value.cbtn}</button>
        </div>
      ))}
      ;
    </>
  );
};
export default Createserviceprofile;
