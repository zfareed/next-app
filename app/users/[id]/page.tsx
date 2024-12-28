'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

interface User {
    id: number;
    name: string;
    email: string;
    username: string;
    phone: string;
    website: string;
}

const UserDetail = () => {
    const searchParams = useSearchParams();
    const userQuery = searchParams.get('user');
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        if (userQuery) {
            const parsedUser = JSON.parse(decodeURIComponent(userQuery));
            setUser(parsedUser);
        }
    }, [userQuery]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>User Detail</h1>
            <h2>ID: {user.id}</h2>
            <h2>Name: {user.name}</h2>
            <h3>Email: {user.email}</h3>
            <h3>Username: {user.username}</h3>
            <h4>Phone: {user.phone}</h4>
            <h5>Website: {user.website}</h5>
        </div>
    );
};

export default UserDetail;