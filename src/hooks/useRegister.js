import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
export { login } from "../features/user/userSlice";

export function useRegister() {
  const dispatch = useDispatch();
  const register = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, {
          displayName: data.displayName,
          photoURL: data.photoURL,
        });
        toast.success(`welcome ${data.displayName}`);
        dispatch(login(userCredential.user));
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return { register };
}
