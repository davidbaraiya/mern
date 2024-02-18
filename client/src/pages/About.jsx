import React from "react";
import aboutImg from "../assets/images/about.png";

const About = () => {
  return (
    <section className="pt pb">
      <div className="container">
        <h2 className="capitalize text-3xl mb-4 text-blue-600">About</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="">
            <span>Welcome, to our website</span>
            <h2 className="text-4xl font-bold mt-2">Why Choose Us?</h2>
            <ul className="mt-5 flex flex-col gap-4">
              <li className="mb-5">
                <p>
                  <strong>Expertise: </strong>
                  Our team consists of experienced IT professionals who are
                  passionate about staying up-to-date with the latest industry
                  trends.
                </p>
              </li>
              <li className="mb-5">
                <p>
                  <strong>Expertise: </strong>
                  Our team consists of experienced IT professionals who are
                  passionate about staying up-to-date with the latest industry
                  trends.
                </p>
              </li>
              <li className="mb-5">
                <p>
                  <strong>Expertise: </strong>
                  Our team consists of experienced IT professionals who are
                  passionate about staying up-to-date with the latest industry
                  trends.
                </p>
              </li>
              <li className="mb-5">
                <p>
                  <strong>Expertise: </strong>
                  Our team consists of experienced IT professionals who are
                  passionate about staying up-to-date with the latest industry
                  trends.
                </p>
              </li>
            </ul>
            <div className="btn-wrapper flex gap-3">
              <button className="btn">Contact Now</button>
              <button className="btn outline">learn More</button>
            </div>
          </div>
          <div>
            <img
              src={aboutImg}
              alt="about"
              width={400}
              height={500}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
