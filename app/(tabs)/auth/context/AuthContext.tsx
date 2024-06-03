import { createContext, useContext } from 'react';
import { User } from '../types/user.type';

type AuthContextType = {
    login: (data:User) => User | undefined;
    register: (data:User) => User | undefined;
    lougout: () => void;
    user: {
        email: string;
        name: string;
        isLoggedIn: boolean;
    };
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


export const useAuthContext = () => useContext(AuthContext);
