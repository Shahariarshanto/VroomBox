import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fefffe ] text-black">
      <div className="max-w-lg text-center">
        <img src="https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7899.jpg?w=826&t=st=1684432576~exp=1684433176~hmac=39c16544be06b36c1787eebdd1502c126e21f2e5cec6eae9ed73a64d4cb0046a" alt="error" />
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
