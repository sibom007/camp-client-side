import React, { useEffect, useState } from 'react';
import Showallclassdata from './Showallclassdata';

const Classdataloade = () => {

    const [classdatas, setclassdatas] = useState([])


    useEffect(() => {
        fetch('https://assiment-12-server.vercel.app/classdata')
            .then(res => res.json())
            .then(data => {
                setclassdatas(data);
            })
    }, [])


    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 '>
               
                {
                    classdatas.map(classdata => <Showallclassdata key={classdata._id} classdata={classdata} />)
                }
            </div>
        </div>
    );
};

export default Classdataloade;