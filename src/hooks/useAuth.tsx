import {createContext, useState , FC, useContext} from 'react';

const authContext = createContext<any>(null);

interface Auth {
    authed : boolean,
    login : () => Promise<any>,
    logout: () => Promise<any>
}

interface AuthProvider {
    value : Auth
}

function useAuth() {
    const [authed, setAuthed] = useState(false);

    return {
        authed,
        login() {
            return new Promise((res) => {
                setAuthed(true);
                res;
            });
        },
        logout() {
            return new Promise((res) => {
                setAuthed(false);
                res;
            });
        }
    }
}

export function AuthProvider({children}: any) {
    const auth : Auth = useAuth();

    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export default function AuthConsumer() {
    return useContext(authContext);
}

