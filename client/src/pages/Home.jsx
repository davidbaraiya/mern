import heroImg from "../assets/images/hero.png";

const Home = () => {
  return (
    <>
      <section className="hero-section pt pb">
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-2">
            <div className="">
              <span>we are the best e-com company</span>
              <h2 className="text-4xl font-bold mt-2">
                Welcome to Ecom <br /> Company
              </h2>
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                nemo sequi officiis soluta, sapiente optio?
              </p>
              <div className="btn-wrapper flex gap-3">
                <button className="btn">Contact Now</button>
                <button className="btn outline">learn More</button>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={heroImg}
                alt="hero img"
                width={400}
                height={500}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pb">
        <div className="container">
          <div className="grid grid-cols-4 gap-2 items-center text-center bg-slate-100 py-6 px-3 text-black rounded-lg shadow-sm capitalize">
            <div>
              <strong className="text-3xl font-bold">50+</strong>
              <p>shops</p>
            </div>
            <div>
              <strong className="text-3xl font-bold">5000+</strong>
              <p>happy customer</p>
            </div>
            <div>
              <strong className="text-3xl font-bold">4.5+</strong>
              <p>reviews</p>
            </div>
            <div>
              <strong className="text-3xl font-bold">24/7</strong>
              <p>support</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
