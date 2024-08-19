import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../ui/input";
import axios from "axios";
import { USER_API_END_POINT } from "../utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
    console.log(input);
  };
  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-900 relative isolate pt-14 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffca4e] to-[#1810b1] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Create your account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form method="POST" className="space-y-4" onSubmit={submitHandler}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-200"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="fullName"
                  name="fullname"
                  type="text"
                  value={input.fullname}
                  onChange={changeEventHandler}
                  required
                  autoComplete="name"
                  placeholder="Your fullname"
                  className="block w-full rounded-md outline-none ring-1 focus:ring-2 bg-indigo-800 bg-opacity-10 backdrop-blur-lg border-0 py-1.5 px-1.5 text-gray-200 placeholder:text-gray-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-200"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={changeEventHandler}
                  required
                  autoComplete="email"
                  placeholder="Your Email"
                  className="block w-full rounded-md outline-none ring-1 focus:ring-2 bg-indigo-800 bg-opacity-10 backdrop-blur-lg border-0 py-1.5 px-1.5 text-gray-200 placeholder:text-gray-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-200"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                  required
                  autoComplete="tel"
                  placeholder="Your phonenumber"
                  className="block w-full rounded-md outline-none ring-1 focus:ring-2 bg-indigo-800 bg-opacity-10 backdrop-blur-lg border-0 py-1.5 px-1.5 text-gray-200 placeholder:text-gray-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  Create Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={input.password}
                  onChange={changeEventHandler}
                  required
                  autoComplete="current-password"
                  placeholder="Create Password"
                  className="block w-full rounded-md outline-none ring-1 focus:ring-2 bg-indigo-800 bg-opacity-10 backdrop-blur-lg border-0 py-1.5 px-1.5 text-gray-200 placeholder:text-gray-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-200"
                >
                  Profile Pic
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="profile"
                  type="file"
                  accept="image/*"
                  onChange={changeFileHandler}
                  className="block w-full rounded-md outline-none ring-1 focus:ring-2 bg-indigo-800 bg-opacity-10 backdrop-blur-lg border-0 py-1.5 px-1.5 text-gray-200 placeholder:text-gray-500 sm:text-sm sm:leading-6 cursor-pointer"
                />
              </div>
            </div>

            <div className="radio-group">
              <label
                htmlFor="role"
                className="block text-sm font-medium leading-6 text-gray-200"
              >
                Select your role
              </label>
              <RadioGroup className="flex gap-3 text-white">
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="student"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                    id="role_student"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="option-one">Student</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="role"
                    value="recruter"
                    checked={input.role === "recruter"}
                    onChange={changeEventHandler}
                    id="role_recruter"
                    className="cursor-pointer"
                  />
                  <Label htmlFor="option-two">Recruter</Label>
                </div>
              </RadioGroup>
            </div>

            {loading ? (
              <Button className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600">
                <Loader2 className="mr-2 h-4 w-4 animate-spin " />
                Please Wait
              </Button>
            ) : (
              <div>
                <button
                  type="submit"
                  className="transition ease-in-out duration-200 flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-gray-800 shadow-sm hover:bg-indigo-800 hover:text-white"
                >
                  Signup
                </button>
              </div>
            )}
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            Already a member?{" "}
            <Link
              to={"/login"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#32fe7d] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </>
  );
};

export default Signup;
