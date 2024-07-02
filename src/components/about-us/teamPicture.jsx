import bin1 from '../../assets/12YardBin.png';
import bin2 from '../../assets/40yardBin.webp';
import bin3 from '../../assets/20YardBin.jpeg';

export default function TeamPicture() {
  const chefData = [
    {
      name: '14 Yard Bin',
      imgSrc: bin1,
    },
    {
      name: '20 Yard Bin',
      imgSrc: bin2,
    },
    {
      name: '40 Yard Bin',
      imgSrc: bin3,
    },
  ];

  return (
    <div className="mt-10 bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {chefData.map((chef, index) => (
            <div key={index} className="text-center mx-2 w-1/3">
              <img
                src={chef.imgSrc}
                alt={`chef${index + 1}`}
                className="w-full h-80 object-cover mt-8"
              />
              <p className="mt-2 sm:text-sm lg:text-xl">{chef.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
