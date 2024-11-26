import { createContext, useEffect, useState } from 'react';
export const AllContext = createContext(null)
import auth from '../authentication/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';


const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccess , setSuccess ] = useState(false);


    const registeration = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const googleLogin = () => {
      const googleAuthProvider = new GoogleAuthProvider();
      return signInWithPopup(auth, googleAuthProvider);
    };
  
    const passwordReset = (email) => {
      setLoading(true);
      return sendPasswordResetEmail(auth, email);
    };
  
    const logout = () => {
      return signOut(auth);
    };

    useEffect(() => {
      const unsubScribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        
      });
      return () => unsubScribe();
    }, []);

    
    const authInfo = {
      registeration,
      login,
      logout,
      passwordReset,
      googleLogin,
      isLoading,
      user,
      title,
      setTitle,
      message, 
      setMessage,
      setIsOpen, 
      isOpen,
      setSuccess,
      isSuccess 
    };

    return (
        <>
            <AllContext.Provider value={authInfo}>
             {children}
            </AllContext.Provider>
        </>
    );
};

export default ContextProvider;