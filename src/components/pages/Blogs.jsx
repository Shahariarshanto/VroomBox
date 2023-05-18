import React, { useEffect, useState } from "react";

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const questions = [
    {
      id: 1,
      imageSrc: "https://source.unsplash.com/random/480x360?1",
      question:
        "What is an access token and refresh token? How do they work and where should we store them on the client-side?",
      answer:
        "An access token and a refresh token are commonly used in authentication systems. The access token is a credential that is issued to a client after successful authentication. It is used to authenticate subsequent requests to protected resources. Access tokens are usually short-lived and have an expiration time. They should be included in the headers of API requests or passed as query parameters. The refresh token is a long-lived credential that is used to obtain a new access token when the current one expires. It is typically sent to a token endpoint along with other credentials to request a new access token. Refresh tokens are securely stored on the client-side, often in an HTTP-only cookie or local storage. They should be protected from unauthorized access.",
    },
    {
      id: 2,
      imageSrc: "https://source.unsplash.com/random/480x360?2",
      question: "Compare SQL and NoSQL databases?",
      answer:
        "SQL (Structured Query Language) and NoSQL (Not only SQL) are two types of database management systems with different approaches. SQL databases are based on a structured and predefined schema, typically using tables with rows and columns. They enforce strong consistency and support ACID (Atomicity, Consistency, Isolation, Durability) transactions. NoSQL databases, on the other hand, are designed for unstructured and flexible data models. They offer high scalability and performance by using a variety of data models, such as key-value pairs, documents, graphs, or wide-column stores. NoSQL databases sacrifice some consistency guarantees for scalability and horizontal scaling.",
    },
    {
      id: 3,
      imageSrc: "https://source.unsplash.com/random/480x360?3",
      question: "What is Express.js? What is Nest.js?",
      answer:
        "Express.js is a popular web application framework for Node.js. It provides a minimal and flexible set of features for building web applications and APIs. Nest.js is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built on top of Express.js and enhances it with additional features and architectural patterns inspired by Angular. Nest.js promotes the use of TypeScript and follows a modular and testable approach to building applications. It is well-suited for large-scale enterprise applications.",
    },
    {
      id: 4,
      imageSrc: "https://source.unsplash.com/random/480x360?4",
      question: "What is MongoDB aggregate and how does it work?",
      answer:
        "MongoDB's aggregate is a powerful operation used for data processing and aggregation. It allows you to perform complex queries and transformations on the data stored in a MongoDB database. The aggregate operation takes an array of stages, where each stage represents a specific operation or transformation to apply to the data. These stages can include filtering, grouping, sorting, joining, and performing mathematical operations on the data. The stages are executed in order, with the output of each stage becoming the input for the next. Aggregate provides a flexible and expressive way to perform data analysis and reporting in MongoDB. It allows you to perform operations that go beyond simple queries and retrieve aggregated results based on your specific requirements.",
    },
  ];

  const handleReadMore = (blogId) => {
    setSelectedBlog(blogId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const selectedQuestion = questions.find((q) => q.id === selectedBlog);

  return (
    <section>
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {questions.map((q) => (
            <div
              key={q.id}
              className={`max-w-sm mx-auto group hover:no-underline focus:no-underline ${
                selectedBlog === q.id ? "bg-gray-100" : ""
              }`}
            >
              <img
                role="presentation"
                className="object-cover w-full rounded h-44"
                src={q.imageSrc}
                alt=""
              />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  {q.question}
                </h3>
                <p>
                  {selectedBlog === q.id
                    ? q.answer
                    : `${q.answer.slice(0, 150)}...`}
                </p>
                {selectedBlog !== q.id && (
                  <button
                    type="button"
                    onClick={() => handleReadMore(q.id)}
                    className="text-[#ff385c] hover:underline"
                  >
                    Read more
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75"
          onClick={closeModal}
        >
          <div
            className="max-w-3xl bg-white rounded-lg p-6 overflow-y-auto max-h-full"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              className=" w-full md:max-w-lg rounded mx-auto mb-4"
              src={selectedQuestion.imageSrc}
              alt="blog"
            />
            <h2 className="text-2xl font-semibold mb-4">
              {selectedQuestion.question}
            </h2>
            <p>{selectedQuestion.answer}</p>
            <button
              type="button"
              onClick={closeModal}
              className="mt-6 px-4 py-2 text-white bg-[#ff385c] rounded-lg hover:bg-[#e6002a]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;