import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <h1 className="text-6xl font-bold mb-5">
        We love
        <span className="py-2  ml-4 px-6 text-4xl  btn-4xl  bg-primary rounded-2xl text-primary-content">
          comfy
        </span>
      </h1>

      <p className="mx-auto mt-6 leading-8 text-lg max-w-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil in
        inventore harum, eaque alias numquam at voluptates ex eius atque
        perferendis? Ut modi quisquam iure praesentium blanditiis quidem libero!
        Ea.
      </p>
    </div>
  );
};

export default About;
