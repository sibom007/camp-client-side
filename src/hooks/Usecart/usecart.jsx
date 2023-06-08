import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { MyAuthcontext } from '../../Provider/Authprovider';
// import useAxiosSecure from './useAxiosSecure';

const usecart = () => {
    const { user, loading } = useContext(MyAuthcontext);
   
   
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['Enroll', user?.email],
        enabled: !loading && !!user?.email,
        
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/Enroll?email=${user?.email}`)
            
            return res.json()
        },
        
    })
    return [cart, refetch]
    
};

export default usecart;