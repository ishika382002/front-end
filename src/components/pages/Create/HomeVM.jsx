import React from 'react';
// import Createserviceprofile from './Create_serviceprofile';
// import CarrdData from './CarrdData';
import CarrdDatavm from './CarrdData_VM';

import Createvirtualmachines from './Create_virtualmachines';

const Homevm =() => {
    return(
        <>
        <div className='home-carrds'>
            <Createvirtualmachines details ={CarrdDatavm} />
        </div>
        </>
       
    );
}

export default Homevm;