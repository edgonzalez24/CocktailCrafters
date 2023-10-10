/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BackArrowComponent = ({to}) => {
  return (
    <Link
      to={to}
      className="inline-flex items-center font-bold"
      preventScrollReset={true}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
      Go back
    </Link>
  );
}

export default BackArrowComponent;
