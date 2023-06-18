import React, { useEffect, useState } from 'react';
import Showallclassdata from '../../Classpage/Showallclassdata';
import ShowHomeClass from './ShowHomeClass';

const HomeClassdata = () => {


    const [classdatas, setclassdatas] = useState([])


    useEffect(() => {
        fetch('https://assiment-12-server.vercel.app/classdatalimit')
            .then(res => res.json())
            .then(data => {
                setclassdatas(data);
            })
    }, [])


    return (
        <div>
             <h1 className='text-center text-4xl font-bold text-slate-400 mt-5'>------------------------- <br /> Top class <br /> ------------------------</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 '>
           
                {
                    classdatas.map(classdata => <ShowHomeClass key={classdata._id} classdata={classdata} ></ShowHomeClass>)
                }
            </div>
        </div>
    );
};

export default HomeClassdata;