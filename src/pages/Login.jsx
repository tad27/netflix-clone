import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEmail("");
    }, 4000);

    return () => clearTimeout(timeout);
  }, [email]);

  return (
    <>
      <Navbar />
      <section className="w-full sm:h-screen mt-16 sm:mt-0 pb-16 sm:pb-0 relative grid grid-cols-1 sm:grid-cols-none  items-center justify-center border-b border-white/50 sm:border-none">
        {/* Banner Image */}
        <img
          className="absolute -z-10 w-full h-full object-cover hidden sm:block"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3a073c5f-0160-4d85-9a42-6f59aa4b64b9/25dfc898-10fa-4a4b-8ec3-8679d7acb2f1/ET-en-20220718-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />

        {/* Overlay */}
        <div className="absolute -z-10 w-full h-full bg-black/50"></div>

        {/* Content */}
        <div className="min-w-min sm:min-w-[450px] bg-black/75 flex flex-col px-4 sm:p-12 gap-8">
          <h3 className="text-3xl font-semibold">Sign In</h3>
          {email && (
            <h4 className="p-2 sm:max-w-[324px] border border-teal-300 text-teal-400">
              Hi <span className="text-white underline">{email}</span>, this
              functionlaity will be added soon.
            </h4>
          )}
          <form
            className="flex flex-col space-y-4"
            onSubmit={handleSubmit((user) => {
              setEmail(user?.email);
              console.log(`email: ${user?.email}`);
              console.log(`password: ${user?.password}`);
            })}
          >
            <div>
              <label className="bg-[#333] p-2 h-10 flex items-end rounded relative w-full">
                <input
                  className="peer bg-transparent w-full text-xs outline-none placeholder:text-transparent"
                  id="email"
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    minLength: 4,
                  })}
                  placeholder="email"
                />
                <label
                  className="-translate-y-4 text-xs 
              peer-placeholder-shown:text-sm 
              peer-placeholder-shown:-translate-y-1
              peer-focus:-translate-y-4
              peer-focus:text-xs
              transition-all duration-300 absolute text-brand-gray brightness-125 tracking-wide"
                  htmlFor="email"
                >
                  Email
                </label>
              </label>
              <p className="text-orange-500 text-xs">
                {errors?.email?.message}
              </p>
            </div>
            <div>
              <label className="bg-[#333] p-2 h-10 flex items-end rounded relative w-full">
                <input
                  className="peer bg-transparent w-full text-xs outline-none placeholder:text-transparent font-bold"
                  id="password"
                  type="password"
                  {...register("password", {
                    required:
                      "Password is required and must be at least 4 characters long",
                    minLength: 4,
                  })}
                  placeholder="password"
                />
                <label
                  className="-translate-y-4 text-xs 
              peer-placeholder-shown:text-sm 
              peer-placeholder-shown:-translate-y-1
              peer-focus:-translate-y-4
              peer-focus:text-xs
              transition-all duration-300 absolute text-brand-gray brightness-125 tracking-wide"
                  htmlFor="password"
                >
                  Password
                </label>
              </label>
              <p className="text-orange-500 text-xs">
                {errors?.password?.message}
              </p>
            </div>

            <button
              className="button button-brand py-2 !mt-6 block font-semibold"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div className="text-[16px] space-x-1">
            <span className="text-brand-gray">New to Netflix? </span>
            <Link className="hover:underline font-semibold" to="/signup">
              Sign up now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
