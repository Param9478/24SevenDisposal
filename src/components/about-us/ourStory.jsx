import bin from '../../assets/binDouble.jpg';
import AboutOptions from './aboutOptions';
export default function OurStory() {
  return (
    <div className="max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-24 flex flex-col lg:flex-row justify-between m-auto">
      {/* Text Section */}
      <div className="lg:w-2/4 w-full text-center lg:text-left mb-8 lg:mb-0">
        <div className="m-auto">
          <h2 className="text-3xl font-bold mb-2">Our Story</h2>
          <div className="mb-8 lg:mb-0 w-full lg:w-3/4">
            <AboutOptions
              title="Our Journey"
              content="Building a legacy of trust and reliability in the hauling industry."
            />
            <hr className="my-6 border-t border-gray-300" />
            <AboutOptions
              title="Dependable Service"
              content="Ensuring your projects run smoothly with our professional dump truck services."
            />
            <hr className="my-6 border-t border-gray-300" />
            <AboutOptions
              title="Diverse Fleet"
              content="Equipped to handle any job, big or small, with efficiency and care."
            />
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="flex-1">
        <div className="w-full m-auto">
          <p className="text-sm font-light text-gray-700 w-full m-auto lg:text-left text-center">
            Welcome to 24Seven Disposal, where reliability meets efficiency. Our
            team of experienced professionals is dedicated to providing
            top-notch dump truck services tailored to meet your needs. Whether
            you’re tackling a large construction project or a small landscaping
            job, we’re here to ensure your materials are transported safely and
            on time. With a commitment to excellence and customer satisfaction,
            we are your go-to solution for all your hauling needs. Discover the
            difference with 24Seven Disposal, where every load is handled
            with care and precision.
          </p>
          <div className="mt-8 sm:mt-16">
            <img src={bin} alt="Dumpster bin" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
