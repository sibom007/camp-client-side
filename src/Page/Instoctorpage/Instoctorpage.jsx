import React, { useEffect, useState } from 'react';
import Showallinstoctor from './Showallinstoctor';

const Instoctorpage = () => {

    const [Instctordatas, setInstctordatas] = useState([])


    useEffect(() => {
        fetch('https://assiment-12-server.vercel.app/Instructor')
            .then(res => res.json())
            .then(data => {
                setInstctordatas(data);
            })
    }, [])
    return (
        <div>
           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 '>
                {
                    Instctordatas.map(Instctordata => <Showallinstoctor key={Instctordata._id} Instctordata={Instctordata} />)
                }
            </div>
        </div>
    );
};

export default Instoctorpage;
