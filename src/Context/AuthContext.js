import { createContext,useContext,useEffect,useState } from "react";
import { auth } from "../Utils/Firebase-init";
import { createUserWithEmailAndPassword , 
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut,
        GoogleAuthProvider,
        signInWithPopup,
        updateProfile 
} from 'firebase/auth'

import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const AuthContext = createContext({
    currentUser:null,
    register : () => Promise,
    login : () => Promise,
    logout: () => Promise,
    signInWithGoogle: () => Promise,

})

 
export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({children})
{
        const [currentUser,setCurrentUser] = useState(null)

        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth,user =>{
                setCurrentUser(user ? user : null)
            } )
            return () => {
                unsubscribe()
            }
        }, [])
        useEffect(() => {
            console.log('The user is', currentUser)
          }, [currentUser])
        function register(email,password){
            return createUserWithEmailAndPassword(auth,email,password)
        }
        function login(email,password)
        {
            return signInWithEmailAndPassword(auth,email,password)
        }
        function logout()
        {
              return signOut(auth)  
        }   
        function signInWithGoogle()
        {
                const provider = new GoogleAuthProvider()
                return signInWithPopup(auth,provider)
        } 

        const value = {
            currentUser,
            register,
            login,
            logout,
            signInWithGoogle

        }    
        return <AuthContext.Provider value={value}>
               {children} 
        </AuthContext.Provider>
}
const storage = getStorage();

export async function upload(file, currentUser, setLoading) {
    const fileRef = ref(storage, currentUser.uid + '.png');
    
    setLoading(true);
    
    const snapshot = await uploadBytes(fileRef, file);
    console.log(snapshot.metadata);
    const photoURL = await getDownloadURL(fileRef);
  
    updateProfile(currentUser, {photoURL});
    
    setLoading(false);
    alert("Uploaded file!");
  }