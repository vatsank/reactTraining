import react from 'react';
import Link from 'next/link';
import React ,{useState,useEffect} from 'react';

const index = () => {
    
    return (
        <div>
            <h1>Server Side Rendering</h1>
         <ul>
          <li>
          <Link href='/InitialData'><a>Home</a></Link>
          </li>
         </ul>
         
        </div>
    );
};

export default index;