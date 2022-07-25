import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
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
        <h3 className="text-3xl font-semibold">Sign Up</h3>
        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(({ email, password }) =>
            console.log(email, password)
          )}
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
            <p className="text-orange-500 text-xs">{errors?.email?.message}</p>
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
            Sign Up
          </button>
        </form>
        <div className="text-[16px] space-x-1">
          <span className="text-brand-gray">Already have account? </span>
          <Link className="hover:underline font-semibold" to="/login">
            Login now
          </Link>
        </div>
      </div>
    </section>
  );
}
export default Signup;
