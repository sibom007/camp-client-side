import React, { useEffect, useState } from 'react';
import Showallinstoctors from './Showallinstoctors';

const Instackhome = () => {
    const [Instctordatas, setInstctordatas] = useState([])


    useEffect(() => {
        fetch('https://assiment-12-server.vercel.app/Instructorlimit')
            .then(res => res.json())
            .then(data => {
                setInstctordatas(data);
            })
    }, [])
    return (
        <div>
             <h1 className='text-center text-4xl font-bold text-slate-400 mt-5'>------------------------- <br /> Top Instctor <br /> ------------------------</h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 '>
                {
                    Instctordatas.map(Instctordata => <Showallinstoctors key={Instctordata._id} Instctordata={Instctordata} />)
                }
            </div>
        </div>
    );
};

export default Instackhome;