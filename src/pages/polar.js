import 'bootstrap/dist/css/bootstrap.css';
import ApiUnaviable from './apiUnaviable';
import React, { useEffect } from 'react';



function PolarIcePage() {
    useEffect(() => {
        document.title = 'Climate Check';
      }, []);
    return (
        <ApiUnaviable/>
    );
}

export default PolarIcePage;