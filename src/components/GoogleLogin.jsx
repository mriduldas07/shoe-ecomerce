import { FcGoogle } from "react-icons/fc";

export default function GoogleLogin() {
  return (
    <button className="btn w-full">
      <div className="flex items-center gap-2">
        <FcGoogle size={24}></FcGoogle>
        <p>Google</p>
      </div>
    </button>
  );
}
