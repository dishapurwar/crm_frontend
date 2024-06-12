

import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {
        if (!user) {
            axios.get('/profile')
                .then(({ data }) => {
                    console.log("User object from server:", data);
                    setUser(data);
    
                    // Set isAdmin based on the user's role received from the server
                    const isAdminUser = data && data.role === 'admin';
                    setIsAdmin(isAdminUser);
    
                    setReady(true);
                })
                .catch(error => {
                    console.error('Error fetching user profile:', error);
                    setReady(true); // Set ready even in case of an error
                });
        }
    }, [user]); // Dependency array includes 'user'
    

    return (
        <UserContext.Provider value={{ user, setUser, ready, isAdmin }}>
            {children}
        </UserContext.Provider>
    );
}
