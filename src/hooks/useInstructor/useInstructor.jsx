import React from 'react';
import useAuth from '../useAuth/useAuth';
import useAxiosSecure from '../useAxiosSecure/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useInstructor = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor ', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/Instructor/${user?.email}`);
            console.log('is in response', res.data.Instructor)
            return res.data.Instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
};

export default useInstructor;