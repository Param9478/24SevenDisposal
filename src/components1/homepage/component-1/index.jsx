import BoondocksCard from './boondocksCard';

export default function Component1() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-2 pt-12 sm:pt-24 flex lg:flex-row flex-col">
        {/* Text Section */}

        <div className="flex-1 text-center lg:text-left lg:w-1/4 w-full">
          <div className="lg:w-3/4 m-auto">
            <h1 className="text-3xl mb-4">Our Services</h1>
            <div className="mt-8 sm:mt-16">
              <BoondocksCard
                imgSrc="https://i0.wp.com/picknhaul.com/wp-content/uploads/2019/04/dumpster-4-3.jpg?resize=769%2C499&ssl=1"
                title="For Homeowners"
                context="Residential Site Clearing: Clearing land for new construction or landscaping projects. Driveway and Foundation Excavation: Excavating and preparing sites for new driveways or home foundations.
Bulk Material Delivery: Delivery of gravel, sand, mulch, and other landscaping materials."
              />
            </div>
          </div>
        </div>

        {/* Card Section */}
        <div className="flex-1">
          <div>
            <BoondocksCard
              imgSrc="https://mydisposal.com/wp-content/uploads/2021/01/CompactorSelfContained_900.jpg"
              title="For Businesses"
              context="Commercial Site Development: Excavation and site preparation for commercial buildings or facilities.
Parking Lot Construction: Grading and paving services for new or existing parking lots.
Demolition Services: Partial or complete demolition of existing structures."
            />
          </div>
          <div className="mt-8 sm:mt-8">
            <BoondocksCard
              imgSrc="https://www.shutterstock.com/image-photo/industrial-dumper-trucks-working-on-600nw-1832668900.jpg"
              title="For Municipalities and Governments:"
              context="Road and Infrastructure Projects: Excavation and hauling services for road construction and maintenance.
Utility Installation: Digging trenches and backfilling for utility lines (water, sewer, etc.).
Emergency Response Services: Quick response for disaster relief and emergency clean-up operations."
            />
          </div>
        </div>
      </div>
    </>
  );
}
