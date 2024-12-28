'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface User {
    id: number;
    name: string;
    email: string;
}

const UserTable = () => {
    const [users, setUsers] = useState<User[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data: User[] = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };
        fetchUsers();
    }, []);

    const handleRowClick = (user: User) => {
        const userQuery = encodeURIComponent(JSON.stringify(user));
        router.push(`/users/${user.id}?user=${userQuery}`);
    };

    return (
        <div>
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} onClick={() => handleRowClick(user)} className='cursor-pointer'>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;