/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../firebase.config";
import GoogleLogin from "../components/GoogleLogin";
import Loading from "../components/Loading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate("/dashboard");
    toast("Sign up completed,please login now!!!");
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <img src="/6310507.jpg" alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                onClick={() => signInWithEmailAndPassword(email, password)}
              >
                Login
              </button>
            </div>
            <div className="text-center text-lg text-gray-500">
              <p>
                Don't have an account?
                <span className="text-blue-500 font-semibold">
                  <Link to={`/sign-up`}> Sign Up</Link>
                </span>
              </p>
            </div>
          </form>

          <div className="mx-8 mb-5">
            <GoogleLogin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
