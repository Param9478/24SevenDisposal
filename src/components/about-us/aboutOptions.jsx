import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCube } from '@fortawesome/free-solid-svg-icons';

export default function AboutOptions({ title, content }) {
  return (
    <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-start">
      <div className="w-12 h-12 bg-black rounded-full flex justify-center items-center text-white mb-4 lg:mb-0">
        <FontAwesomeIcon icon={faCube} size="lg" />
      </div>
      <div className="lg:ml-4 text-center lg:text-left">
        <h1 className="text-lg">{title}</h1>
        <p className="text-sm text-gray-700 font-light">{content}</p>
      </div>
    </div>
  );
}
