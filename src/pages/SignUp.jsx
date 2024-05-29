/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../firebase.config";
import GoogleLogin from "../components/GoogleLogin";
import Loading from "../components/Loading";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }
  if (user) {
    navigate("/login");
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
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <p className="text-red-700">
              {!(password === confirmPassword) &&
                "Password should be matched with confirm password"}
            </p>
            <div className="form-control mt-6">
              <button
                className="btn btn-primary"
                onClick={() => createUserWithEmailAndPassword(email, password)}
              >
                Sign Up
              </button>
            </div>
            <div className="text-center text-lg text-gray-500">
              <p>
                Already have an account?
                <span className="text-blue-500 font-semibold">
                  <Link to={`/login`}> Login</Link>
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
}
