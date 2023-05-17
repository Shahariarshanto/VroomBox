import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="max-w-lg text-center">
        <h1 className="text-5xl font-bold mb-6">Oops!</h1>
        <h2 className="text-3xl font-semibold mb-8">404 - Page Not Found</h2>
        <p className="text-lg mb-12">
          The page you are looking for may have been removed or does not exist.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-4 bg-[#ff4d6d] text-white rounded-md transition duration-300 ease-in-out hover:bg-[#e6002a]"
        >
          Go back to Home{' '}
          <FontAwesomeIcon icon={faSpinner} className="animate-spin ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
