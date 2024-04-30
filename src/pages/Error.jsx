import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status == "404") {
    return (
      <main className="min-h-screen grid place-content-center text-neutral">
        <div className="text-center">
          <p className=" text-4xl lg:text-8xl text-primary mb-4">404</p>
          <p className="text-4xl font-bold mb-5">Page Not Found</p>
          <Link className="btn btn-sm lg:btn-md btn-primary" to="/">
            Back Home
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main className="min-h-screen grid place-content-center text-neutral">
      <div className="text-center">
        <p className=" text-4xl lg:text-8xl text-primary mb-4">Upps...?</p>
        <p className="text-4xl font-bold mb-5">Something went wrong</p>
        <Link className="btn btn-sm lg:btn-md btn-primary" to="/">
          Back Home
        </Link>
      </div>
    </main>
  );
};

export default Error;
