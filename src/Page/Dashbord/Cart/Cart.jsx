import React from 'react';
import usecart from '../../../hooks/Usecart/usecart';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Cart = () => {
    const [cart, refetch] = usecart()

    const total = cart?.reduce((sum, item) => item.price + sum, 0)

    const handlerdelete = item => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/Enroll/${item._id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className='w-full'>
            <div className='flex justify-evenly font-semibold mb-5'>
                <h1 className='text-3xl'>Total orders:${cart.length} </h1>
                <h1 className='text-3xl'>total price: ${total}</h1>
                <Link to={'/dashbord/Payment'}><button className="btn-outline btn-warning btn btn-sm">Pay</button></Link>

            </div>
            <div className="overflow-x-auto w-full ml-5">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Camp photo</th>
                            <th>Name</th>
                            <th>price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) =>
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
                                        <button onClick={() => handlerdelete(item)} className="btn btn-ghost btn-lg bg-red-500 text-white hover:bg-red-600"><FaTrash /></button>
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

export default Cart;