import { createContext, useState } from 'react';

const initalValue = {};
export const UserContext = createContext(initalValue);

export function UserContextProvider({ children }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userId, setUserId] = useState('');
    const [createdAt, setCreatedAt] = useState(''); 

    function onSuccessAuth(id, name, email, createdAt) {
        setUserId(id);
        setName(name);
        setEmail(email);
        setCreatedAt(createdAt);
        console.log ("UserContextProvider: ", id, name, email, createdAt)
    }

    function onLogout() {
        setName('');
        setEmail('');
        setUserId('');
        setCreatedAt('');
    }

    return (
        <UserContext.Provider
            value={{ name, email, createdAt, id: userId, onSuccessAuth, onLogout }}
        >
            {children}
        </UserContext.Provider>
    );
}