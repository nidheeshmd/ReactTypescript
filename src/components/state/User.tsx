import { useState } from 'react';

type AuthUser = {
    name:string
    email:string
}

export const User = () => {
    /*const [user, setUser] = useState<AuthUser | null>(null);*/ // Must specify the type of user object <AuthUser | null> means, type of user would be AuthUser or null
    //always try to not make these values not null. so:

    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const handleLogin = () => {
        setUser({
            name: 'Nidheesh',
            email:'test@email.com'
        });
    }
    /*const haneleLogout = () => {
        setUser(null);
    }*/

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            {/*<button onClick={haneleLogout}>Logout</button>
            <div>User name is: {user?.name}</div>// user? means, user can be null
            <div>User email is: {user?.email}</div>*/}

            <div>User name is: {user.name}</div>
            <div>User email is: {user.email}</div>
        </div>
    )
}