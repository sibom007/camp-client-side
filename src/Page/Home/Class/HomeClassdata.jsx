import React, { useEffect, useState } from 'react';
import Showallclassdata from '../../Classpage/Showallclassdata';
import ShowHomeClass from './ShowHomeClass';

const HomeClassdata = () => {


    const [classdatas, setclassdatas] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/classdatalimit')
            .then(res => res.json())
            .then(data => {
                setclassdatas(data);
            })
    }, [])
    console.log(classdatas);


    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 '>
                {
                    classdatas.map(classdata => <ShowHomeClass key={classdata._id} classdata={classdata} ></ShowHomeClass>)
                }
            </div>
        </div>
    );
};

export default HomeClassdata;