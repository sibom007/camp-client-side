import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth/useAuth';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Paymenthistory = () => {
    const { user } = useAuth()
    const [eneollhistory, seteneollhistory] = useState([])


    useEffect(() => {
        if (user && user.email) {
          fetch(`https://assiment-12-server.vercel.app/Paymenthistory?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                seteneollhistory(data);
            });
        }
      }, [user]);


    return (
        <div className='w-full'>
             <Helmet>
                <title>Adventure Campus || Payment History</title>
            </Helmet>
            <div >
                <div className="overflow-x-auto w-full ml-5">
                    <table className="table w-full">
                      
                        <thead>
                            <tr>
                                <th></th>
                                <th>Camp photo</th>
                                <th>Name</th>
                                <th>price</th>
                                <th>States</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                    
                            {
                                eneollhistory.map((item, index) =>
                                    <tr key={item._id}>
                                        <td>
                                            {
                                                index + 1
                                            }
                                        </td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.alldata.singlecart.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.alldata.singlecart.name}
                                        </td>
                                        <td className='text-center'>{item.alldata.singlecart.price}</td>
                                        <th>
                                           <p className='text-green-500 font-bold'>{item.status}</p>
                                        </th>
                                     
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Paymenthistory;