import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../../firebase.config";

export default function GoogleLogin() {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <button className="btn w-full">
      <div
        className="flex items-center gap-2"
        onClick={() => signInWithGoogle()}
      >
        <FcGoogle size={24}></FcGoogle>
        <p>Google</p>
      </div>
    </button>
  );
}
