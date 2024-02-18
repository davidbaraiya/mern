import supportImg from "../assets/images/support.png";

const Contact = () => {
  return (
    <section className="pt pb">
      <div className="container">
        <h2 className="capitalize text-3xl mb-4 text-blue-600">Contact Us</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="flex justify-center">
            <img
              src={supportImg}
              alt="hero img"
              width={400}
              height={500}
              loading="lazy"
            />
          </div>
          <form action="">
            <div>
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
              />
            </div>
            <div className="my-4">
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
            <div className="">
              <label
                htmlFor="userName"
                className="capitalize text-lg block mb-2"
              >
                message:
              </label>
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Message"
                autoComplete="off"
                className="py-2 px-3 bg-transparent border w-full rounded-md focus:border-blue-800"
              ></textarea>
            </div>
            <div className="mt-5">
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
