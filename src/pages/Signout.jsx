import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast from "react-hot-toast";

const Signout = () => {
  const signOutFunc = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <button onClick={signOutFunc}>
        <span className=" border p-1 rounded-lg text-primary border-primary">
          Logout
        </span>
      </button>
    </>
  );
};

export default Signout;
