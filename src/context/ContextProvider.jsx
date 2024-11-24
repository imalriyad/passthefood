import { createContext } from 'react';
export const AllContext = createContext(null)

const ContextProvider = ({children}) => {

    const AuthInfo = {
        name: 'Al Riyad'
    }
    return (
        <>
            <AllContext.Provider value={AuthInfo}>
             {children}
            </AllContext.Provider>
        </>
    );
};

export default ContextProvider;