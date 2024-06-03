
import { useState } from "react";
import { AuthContext } from "./AuthContext";

import UserData from '../userData.json'
import { User } from "../types/user.type";

type AuthContextProviderProps = {
    children: React.ReactNode;
};


export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [user, setUser] = useState({
        email: '',
        name: '',
        isLoggedIn: false,
    });
    const login = (data: User) => {
        const user: User | undefined = UserData.find((user) => user.email === data.email);
        if (user && user.password === data.password) {
            setUser({
                email: user.email,
                name: user.name!,
                isLoggedIn: true,
            });
            return user;
        }
        return undefined;

    };
    const register = (data: User) => {
        if(!data) return undefined;
        const user: User | undefined = UserData.find((user) => user.email === data.email);
        if (user) {
            return undefined;
        };


        const NewUser = {
            id: UserData.length + 1,
            name: data.name || 'NO NAME',
            ...data
        };
        UserData.push(NewUser);

        setUser({
            email: NewUser.email,
            name: NewUser.name!,
            isLoggedIn: true,
        });
        return NewUser;
    }


    return (
        <AuthContext.Provider value={{ user, login, register }}>
            {children}
        </AuthContext.Provider>
    );
};