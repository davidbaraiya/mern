import { useState } from "react";
import registerImg from "../assets/images/register.png";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const BASE_URL = "http://localhost:8000/api/auth/register";
    try {
      const resp = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });
      if (resp.ok) {
        setRegisterData({
          userName: "",
          email: "",
          phone: "",
          password: "",
        });
        const data = await resp.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
    console.log(registerData);
  };

  return (
    <section className="pt pb">
      <div className="container">
        <h2 className="capitalize text-3xl mb-4 text-blue-600">Register</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex justify-center">
            <img
              src={registerImg}
              alt="hero img"
              width={400}
              height={500}
              loading="lazy"
            />
          </div>
          <form action="" onSubmit={handleSubmitRegister}>
            <div className="mb-4">
              <label
                htmlFor="userName"
                className="capitalize text-lg block mb-2"
              >
                user name:
              </label>
              <input
                type="text"
                name="userName"
                placeholder="User Name"
                autoComplete="off"
                className="py-2 px-3 bg-transparent border w-full rounded-md focus:border-blue-800"
                value={registerData.userName}
                onChange={handleInputData}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="capitalize text-lg block mb-2">
                email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                className="py-2 px-3 bg-transparent border w-full rounded-md focus:border-blue-800"
                value={registerData.email}
                onChange={handleInputData}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="capitalize text-lg block mb-2">
                Phone:
              </label>
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                autoComplete="off"
                className="py-2 px-3 bg-transparent border w-full rounded-md focus:border-blue-800"
                value={registerData.phone}
                onChange={handleInputData}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="capitalize text-lg block mb-2"
              >
                Password:
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                className="py-2 px-3 bg-transparent border w-full rounded-md focus:border-blue-800"
                value={registerData.password}
                onChange={handleInputData}
              />
            </div>

            <div className="mt-5">
              <button className="btn" type="submit">
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
