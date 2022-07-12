import React from 'react';
import './create.css';
 import cloud from '../components/cloud.jpg'
export default function Create() {
  return (
    <>
    <br></br>
    <br></br>
    <br></br>
<div className="back">
    <p>Manage your Hybrid Cloud<br></br> Managed Service Online</p>
    
</div>
<img src={cloud} className="cloud" alt="cant load" height={580} width={1000} />
    {/* <h1 className="te"></h1> */}
    </>
  );
}