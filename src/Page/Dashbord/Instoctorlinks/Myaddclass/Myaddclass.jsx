import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Myaddclass = () => {
    const [Myallclasss, setMyallclasss] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/Instructoradddata')
            .then(res => res.json())
            .then(data => {
                setMyallclasss(data)
            })
    }, [])

    console.log(Myallclasss);


    // function openModal() {
    //     const modal = document.getElementById('my_modal_1');
    //     modal.showModal();
    // }



    // const handlersubmit = e => {
    //     console.log(e)
    //     const name = e.target.name.value
    //     const img = e.target.img.value
    //     const Ablablesit = e.target.Ablablesit.value
    //     const _id = e.target._id.value
    //     console.log(name,img,Ablablesit,_id);
    // }
    return (
        <div className='w-full'>
            <h1 className='text-center text-4xl font-bold text-slate-400 mt-5'>------------------------- <br /> Add Class,s<br /> ------------------------</h1>
            <div >
                <div className="overflow-x-auto w-full ml-5">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Class photo</th>
                                <th>Name</th>
                                <th>price</th>
                                <th>states</th>
                                <th>Updata</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                Myallclasss.map((item, index) =>
                                    <tr key={item._id}>
                                        <td>
                                            {
                                                index + 1
                                            }
                                        </td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.img} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td className='text-center'>{item.price}</td>
                                        <th>
                                            {item.status}
                                        </th>
                                        <th>
                                          <Link to={`/dashbord/Update/${item._id}`}><button>update</button></Link>
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

export default Myaddclass;