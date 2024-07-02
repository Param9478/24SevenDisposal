import TeamPicture from './teamPicture';

export default function OurTeam() {
  return (
    <>
      <div className="m-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-24">
        <div className="flex lg:flex-row flex-col items-center lg:text-left text-center">
          <div className="w-1/2">
            {/* Text Section */}
            <h1 className="text-2xl mb-4">Why Choose Us?</h1>
          </div>

          {/* Card Section */}
          <div className="w-1/2">
            <p className="text-sm font-light text-gray-700">
              With a team of experienced professionals and a fleet of reliable
              trucks, we ensure timely and efficient service. Our
              customer-centric approach means we are always here to support you
              with personalized solutions and expert advice.
            </p>
          </div>
        </div>
      </div>
      <TeamPicture />
    </>
  );
}
