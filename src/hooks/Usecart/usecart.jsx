import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { MyAuthcontext } from '../../Provider/Authprovider';

const usecart = () => {
    const { user, loading } = useContext(MyAuthcontext);
    const token = localStorage.getItem('accessss-token')

    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['Enroll', user?.email],
        enabled: !loading && !!localStorage.getItem('access-token') && !!user?.email,

        queryFn: async () => {
            const res = await axiosSecure(`/Enroll?email=${user?.email}`)
            return res.data
        },

    })
    return [cart, refetch]

};

export default usecart;