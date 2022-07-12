import React from 'react';
import Createserviceprofile from './Create_serviceprofile';
import CarrdData from './CarrdData_SV';

const Home_SV =() => {
    return(
        <>
        
        <br></br>
        <br></br>
        <br></br>
        <div className='home-carrds'>
            <Createserviceprofile details ={CarrdData} />
        </div>
        </>
       
    );
}

export default Home_SV;