import { useEffect, useState } from 'react';
// import { FaPersonBooth, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth/useAuth';
import { Helmet } from 'react-helmet-async';

const Seeallcarts = () => {

    const { user } = useAuth()


    // ---------------Lodedata----------------------//
    const [classdatas, setclassdatas] = useState([])
    useEffect(() => {
        fetch('https://assiment-12-server.vercel.app/Instructoradddata')
            .then(res => res.json())
            .then(data => {
                setclassdatas(data);
            })
    }, [])
    //-----------------------feedback-------------------//

    const handlersubmit = e => {
        const feedback = e.target.Feed.value
        const email = e.target.email.value
        const name = e.target.name.value
        const twodata = { Feedback: feedback, Email: email, name: name }
        fetch('https://assiment-12-server.vercel.app/feedback', {
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ twodata })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Cart add success full',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    //--------------model function-------------------------//
    function openModal() {
        const modal = document.getElementById('my_modal_1');
        modal.showModal();
    }


    //-------------------data aprove--------------------------//
    const handlerApprove = data => {
        fetch(`https://assiment-12-server.vercel.app/Instructorstatuse/${data._id}`, {
            method: "PUT",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({ data })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Cart add success full',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }


    return (
        <div className='w-full'>
            <Helmet>
                <title>Adventure Campus || Approveabal</title>
            </Helmet>
            <div className="overflow-x-auto w-full ml-5">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Camp photo</th>
                            <th>Name</th>
                            <th>instructor</th>
                            <th>price</th>
                            <th>status</th>
                            <th> Approve</th>
                            <th> Deny </th>
                            <th> send feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            classdatas.map((item, index) =>
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
                                    <td>
                                        {item.instructor}
                                    </td>
                                    <td className='text-center'>{item.price}</td>
                                    <td className='text-center'>{item.status}</td>
                                    <th>
                                            <button onClick={() => handlerApprove(item)} className="btn btn-ghost btn-sm bg-red-500 text-white hover:bg-red-600">Approve</button>
                                    </th>
                                    <th>
                                        <button className="btn btn-ghost btn-sm bg-red-500 text-white hover:bg-red-600">Deny</button>
                                    </th>
                                    <th>
                                        <div>
                                            <button className="btn btn-ghost btn-sm bg-yellow-500 text-white hover:bg-yellow-600" onClick={openModal}>FeedBack</button>
                                            <dialog id="my_modal_1" className="modal">
                                                <form method="dialog" className="modal-box" onSubmit={handlersubmit}  >
                                                    <h3 className="font-bold text-lg">Hello Give  Your FeedBack</h3>
                                                    <input type="text" hidden defaultValue={user?.email} name="email" id="" />
                                                    <input type="text" hidden defaultValue={item.name} name="name" id="" />
                                                    <textarea className="textarea textarea-info w-full" placeholder="Feedback" name='Feed' required></textarea>
                                                    <div className="modal-action">
                                                        {/* if there is a button in the form, it will close the modal */}
                                                        <button className="btn btn-ghost btn-sm bg-yellow-500 text-white hover:bg-yellow-600">Submit</button>
                                                    </div>
                                                </form>
                                            </dialog>
                                        </div>

                                    </th>

                                </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Seeallcarts;