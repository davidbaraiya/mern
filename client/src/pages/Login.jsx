import loginImg from "../assets/images/login.png";

const Login = () => {
  return (
    <section className="pt pb">
      <div className="container">
        <h2 className="capitalize text-3xl mb-4 text-blue-600">Login</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex justify-center">
            <img
              src={loginImg}
              alt="hero img"
              width={400}
              height={500}
              loading="lazy"
            />
          </div>
          <form action="">
            <div className="mb-4">
              <label
                htmlFor="userName"
                className="capitalize text-lg block mb-2"
              >
                email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                className="py-2 px-3 bg-transparent border w-full rounded-md focus:border-blue-800"
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
              />
            </div>
            <div className="mt-5">
              <button className="btn" type="submit">
                Login Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Login;
