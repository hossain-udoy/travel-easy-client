import React from "react";
import "./ServiceHeader.css";

const ServicesHeader = () => {
  return (
    <div>
      <section className="relative bg-[url(http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQ1oS-DeKDIgvicoSyoD8KKoIAinTTDeC6VO7erBHEsAggFjaZYZ6YP1HkFahtlKTb_)] bg-cover bg-center bg-no-repeat">
        <div className="carousel-img"></div>
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/10 sm:to-white/20"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl text-white font-extrabold sm:text-5xl">
              Our Tour Packages
              <strong className="block font-extrabold text-rose-400">
                Best Tour Agency.
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
              Here You Can Find Your Best Tour Packages.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="/services"
                className="block w-full rounded bg-rose-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
              >
                Get Started
              </a>

              <a
                href="/services"
                className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesHeader;
