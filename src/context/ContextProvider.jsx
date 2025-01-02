import { createContext, useEffect, useState } from "react";
export const AllContext = createContext(null);
import auth from "../authentication/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import useAxios from "../hooks/useAxios";

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isViewFoodModalOpen, setViewFoodModalModalOpen] = useState(false);
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [isMessageOpen, setIsMessageOpen] = useState(false);
  const [hasNewFoodItem, setHasNewFoodItem] = useState(true);
  const [hasNewnoti, setHasNewnoti] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [messageReciverId, setMessageReciverId] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const axios = useAxios()

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

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    setIsMessageOpen(false);
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
      if(currentUser){
        axios.post("/auth", {email: currentUser.email})
        .then(res =>{
          if(res.data){
            localStorage.setItem('token', res.data.token)
            setLoading(false);
          }
        })
      } else{
          localStorage.removeItem('token')
          setLoading(false);
      }
      
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
    isSuccess,
    isSidebarOpen,
    setSidebarOpen,
    toggleSidebar,
    isViewFoodModalOpen,
    setViewFoodModalModalOpen,
    isMessageOpen,
    setIsMessageOpen,
    isConfirmationModalOpen,
    setConfirmationModalOpen,
    hasNewFoodItem,
    setHasNewFoodItem,
    hasNewnoti,
    setHasNewnoti,
    newMessage,
    setNewMessage,
    messages,
    setMessages,
    messageReciverId,
    setMessageReciverId,
    setPageNumber,
    pageNumber
  };

  return (
    <>
      <AllContext.Provider value={authInfo}>{children}</AllContext.Provider>
    </>
  );
};

export default ContextProvider;
