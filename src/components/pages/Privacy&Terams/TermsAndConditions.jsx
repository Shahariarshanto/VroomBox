import React from "react";
import { RiFileList2Fill } from "react-icons/ri";

const TermsAndConditions = () => {
  return (
    <div className="max-w-screen-xl px-6 py-10 mx-auto">
      <h1 className="text-4xl font-bold text-center text-[#ff385c] mb-8">
        <RiFileList2Fill className="inline-block mr-3 text-5xl" />
        Terms &amp; Conditions
      </h1>
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold mt-2 mb-4">Introduction</h2>
        <p className="text-gray-700 mb-4">
          These terms and conditions outline the rules and regulations for the
          use of Toy Car Website. By accessing this website, we assume you
          accept these terms and conditions in full. Do not continue to use Toy
          Car Website if you do not agree with all the terms and conditions
          stated on this page.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">
          Intellectual Property Rights
        </h2>
        <p className="text-gray-700 mb-4">
          Other than the content you own, under these terms, Toy Car Website
          and/or its licensors own all the intellectual property rights and
          materials contained on this website.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Restrictions</h2>
        <p className="text-gray-700 mb-4">
          You are specifically restricted from all of the following:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>publishing any website material in any other media;</li>
          <li>
            selling, sublicensing, and/or otherwise commercializing any website
            material;
          </li>
          <li>publicly performing and/or showing any website material;</li>
          <li>
            using this website in any way that is or may be damaging to this
            website;
          </li>
          <li>
            using this website in any way that impacts user access to this
            website;
          </li>
          <li>
            using this website contrary to applicable laws and regulations, or
            in any way that may cause harm to the website, or to any person or
            business entity;
          </li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
        <p className="text-gray-700 mb-4">
          The materials on Toy Car Website are provided on an 'as is' basis. Toy
          Car Website makes no warranties, expressed or implied, and hereby
          disclaims and negates all other warranties including, without
          limitation, implied warranties or conditions of merchantability,
          fitness for a particular purpose, or non-infringement of intellectual
          property or other violation of rights.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Indemnification</h2>
        <p className="text-gray-700 mb-4">
          You hereby indemnify to the fullest extent Toy Car Website from and
          against any and/or all liabilities, costs, demands, causes of action,
          damages, and expenses arising in any way related to your breach of any
          of the provisions of these terms.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>
        <p className="text-gray-700 mb-4">
          These terms and conditions are governed by and construed in accordance
          with the laws of your country. You irrevocably submit to the exclusive
          jurisdiction of the courts in that State or location.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
