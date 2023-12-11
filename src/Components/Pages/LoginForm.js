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
    <form onSubmit={handleSubmit} className="bg-white justify-center ps-8 text-normal text-xl font-normal">

<h1 className="justify-center text-2xl font-bold ps-16">
Login to your account
</h1 >

<h2 className="justify-center text-xl ps-16 text-[#696966] pt-4">
Don't have an account? 
<span className="text-[#0000fe] px-4">Sign up!</span>
</h2>

      <label className=" inline-black inline-black flex ps-16  p-4	pt-16">
        
        <input
        className="border-2 border-slate-400 rounded-lg w-[600px] h-12	"
        placeholder=" username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {formData.errors.username && (
          <p style={{ color: "red" }}>{formData.errors.username}</p>
        )}
      </label>
      <label className="inline-black flex ps-16 p-4">
      
        <input
           className="border-2 border-slate-400 rounded-lg w-[600px] h-12	"
        placeholder="  Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {formData.errors.password && (
          <p style={{ color: "red" }}>{formData.errors.password}</p>
        )}
      </label>

      <div>
      <input type="checkbox" className="text-start justify-start" id="topping" name="topping" value="Paneer" />Paneer
      </div>
      <span className="ps-[60px]  justify-items-start py-16 ">

      <input type="submit" value="Submit" className="bg-[#192675] w-[350px] py-4 justify-center rounded-xl		text-white "/>
      </span>

    </form>
  );
}

export default LoginForm;
