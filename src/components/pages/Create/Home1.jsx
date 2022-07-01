import React from 'react';
// import Createserviceprofile from './Create_serviceprofile';
// import CarrdData from './CarrdData';
import CarrdData1 from './CarrdData1';
import Createconnections from './Create_connections';

const Home1 =() => {
    return(
        <>
        <div className='home-carrds'>
            <Createconnections details ={CarrdData1} />
        </div>
        </>
       
    );
}

export default Home1;