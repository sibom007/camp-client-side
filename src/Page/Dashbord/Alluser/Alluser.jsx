import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrash, FaUser, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure/useAxiosSecure';
import { Helmet } from 'react-helmet-async';


const Alluser = () => {

    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })



    const handleradmin = user => {

        fetch(`https://assiment-12-server.vercel.app/users/admin/${user._id}`, {
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


    const handlerinstoctor = id => {

        fetch(`https://assiment-12-server.vercel.app/users/Instructor/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire("Instructor", '', 'success')
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
                fetch(`https://assiment-12-server.vercel.app/users/admin/${id}`, {
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

                // --------------ins------------//
                fetch(`https://assiment-12-server.vercel.app/users/Instructor/${id}`, {
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
             <Helmet>
                <title>Adventure Campus || All User</title>
            </Helmet>
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
                                <th>Instructor</th>
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
                                                item.role === "admin" ? "admin" : <button onClick={() => handleradmin(item)} className="btn btn-ghost btn-lg bg-blue-500 text-white hover:bg-blue-600"><FaUser /></button>
                                            }

                                        </th>
                                        <th>
                                            {
                                                item.role === "Instructor" ? "Instructor" : <button onClick={() => handlerinstoctor(item._id)} className="btn btn-ghost btn-lg bg-yellow-500 text-white hover:bg-yellow-600"><FaUserShield /></button>
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