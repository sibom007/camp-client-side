import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrash, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Alluser = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })



    const handleradmin = user => {

        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire("Admin", '', 'success')
                }
            })
    }
    
    const handlerdelete = id => {

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
                fetch(`http://localhost:5000/users/admin/${id}`, {
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
            <div >
                <div className="overflow-x-auto w-full ml-5">
                    <table className="table w-full ">
                        {/* head */}
                        <thead>
                            <tr className='text-2xl'>
                                <th></th>
                                <th>Email</th>
                                <th>Name</th>
                              
                                <th>User</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((item, index) =>
                                    <tr key={item._id}>
                                        <td>
                                            {
                                                index + 1
                                            }
                                        </td>
                                        <td>
                                            <h1> {item.email}</h1>
                                        </td>
                                        <td>
                                            {item.name}
                                        </td>
                                        <th>
                                            {
                                                item.role === "admin" ? "admin" : <button onClick={() => handleradmin(item)} className="btn btn-ghost btn-lg bg-blue-500 text-white hover:bg-blue-600"><FaUserShield /></button>
                                            }

                                        </th>
                                        <th>
                                            <button onClick={() => handlerdelete(item._id)} className="btn btn-ghost btn-lg bg-red-500 text-white hover:bg-red-600"><FaTrash /></button>
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

export default Alluser;