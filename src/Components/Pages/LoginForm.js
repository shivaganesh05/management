import React, { useState } from "react";

function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    errors: {},
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};

    // Check if username is empty
    if (!formData.username) {
      errors.username = "Username is required";
    }

    // Check if password is empty
    if (!formData.password) {
      errors.password = "Password is required";
    }

    setFormData((prevState) => ({ ...prevState, errors }));

    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Form is valid, submit data
      console.log(formData);
    } else {
      // Form is invalid, do nothing
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white justify-center ps-8 text-normal text-xl font-normal"
    >
      <h1 className="justify-center text-2xl font-bold ps-16">
        Login to your account
      </h1>

      <h2 className="justify-center text-xl ps-16 text-[#696966] pt-4 pb-4">
        Don't have an account?
        <span className="text-[#0000fe] px-4 ">Sign up!</span>
      </h2>

      <label className="pt-32  ps-16   p-4	">
        <input
          className="border-2 inline-block  border-slate-400 rounded-lg  w-[400px] h-12 pl-4	"
          placeholder=" username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <div className="inline-block p-4 ">

            {formData.errors.username && (
              <p style={{ color: "red" }}>{formData.errors.username}</p>
            )}

        </div>
      </label>
      <label className=" ps-16 p-4 ">
        <input
          className="border-2 border-slate-400 rounded-lg w-[400px] h-12 pl-4"
          placeholder="  Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

<div className="inline-block p-4 ">
        {formData.errors.password && (
          <p style={{ color: "red" }}>{formData.errors.password}</p>
        )}
        </div>
      </label>

      <div className=" text-start pl-16 pb-6 ps-18">
       <label className="md:w-2/3 block text-gray-500 font-bold">
      <input className="mr-2 leading-tight" type="checkbox" />
      <span className="text-sm text-normal">
      Remember username
      </span>
    </label>
        
      </div>
      <span className="ps-[10px]  justify-items-start py-16 ">
        <input
          type="submit"
          value="Submit"
          className="bg-[#192675] w-[350px] py-4 justify-center rounded-xl		text-white "
        />
      </span>
    </form>
  );
}

export default LoginForm;
