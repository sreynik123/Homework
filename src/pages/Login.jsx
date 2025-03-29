import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from 'yup';
import { login } from "../features/auth/authAction";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Login() {
 const  nagivate= useNavigate()
    const dispatch=useDispatch()
    const{isAuthenticated}= useSelector (state => state.auth)
useEffect (()=>{
  console.log ('use effect')
if (isAuthenticated){
  //Rout to '/'
  nagivate('/')
}

},[nagivate,isAuthenticated])

  //create formik for handle from data
  // submit
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
        password: Yup.string()
        .min(8, 'Must be 8 charater up')
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        
        email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      }),
    onSubmit: (value) => {
      console.log('value from formik', value);
      dispatch(login(value))
    },
  });
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className=" opacity-30-40-50 absolute w-60 h-full border-4  p-96 border-blue-800 rounded-full animate-pulse [animation-duration:7s] blur-sm bg-gradient-to-t absolute-inset-2     to-transparent -z-10      "></div>
        <div className="bg-blue-300 p-8 rounded-2xl shadow-lg  ">
          <div className="absolute flex  object-cover rounded-full flex-col right-16 left-24 justify-center w-28 h-28   ">
            <img
              src="https://miro.medium.com/v2/resize:fit:400/1*Y9-6_bh5a00rJWWoQ28NMQ.jpeg"
              alt="Logo"
              className=" justify-center  flex  w-40 h-50  rounded-full object-cover  items-center   mb-4 border-4 border-gray-800"
            />
          </div>
          <div className="">
            <h3 className="text-black  justify-center font-bold  text-2xl mt-24">
              Log in to your account
            </h3>
          </div>
          <h3 className="text-center text-2xl font-bold text-white mt-2">
            Login
          </h3>
          <form onSubmit={formik.handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-gray-400 font-medium">Email</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.email}
                id="email"
                name="email"
               type="email"
                className="w-full mt-2 px-4 py-2 text-black bg-gray-700 rounded-lg outline-none border border-gray-600 focus:border-blue-400"
              />
              {formik.touched.email && formik.errors.email? (
         <div className="text-red-500">{formik.errors.email}</div>
       ) : null}
 
            </div>
            <div>
              <label className="text-gray-400 font-medium">Password</label>
              <input
                onChange={formik.handleChange}
                value={formik.values.password}
                id="password"
                name="password"
                type="password"
              
                className="w-full mt-2 px-4 py-2 text-white bg-gray-700 rounded-lg outline-none border border-gray-600 focus:border-blue-400"
              />
              {formik.touched.password && formik.errors.password? (
         <div className=" text-red-500">{formik.errors.password}</div>
       ) : null}
 
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-2 rounded-lg font-medium transition shadow-lg"
            >
              Log in
            </button>
            <p className="text-gray-400 text-sm text-center">
              Don't have an account?{" "}
              <a href="#" className="text-blue-400">
                Sign up
              </a>
            </p>
            <p className="text-gray-400 text-sm text-center mt-2">
              Forgot password?
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
