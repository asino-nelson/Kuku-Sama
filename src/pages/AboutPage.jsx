import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-stone-800 text-white">
      <img
        className="w-full md:h-[60vh] h-[40vh] object-cover"
        src="/food7.jpg"
        alt="/"
      />
      <div className="md:p-20 p-5">
        <h2 className="text-center text-3xl font-bold md:mt-0 mt-10">
          <span className="text-yellow-500">About</span> us
        </h2>
        <p className="md:mt-16 mt-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
          praesentium ea voluptates repellat cumque cupiditate accusamus, dicta
          sapiente numquam, eius quisquam asperiores, officiis ipsam quam quo
          aliquam voluptate fugiat quos? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Nisi eligendi sint illo? Accusamus molestiae, amet
          neque inventore eius alias eos, rerum ex commodi dolorem quidem esse
          dolorum ea perferendis porro?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Illo facilis consequatur, iste facere architecto
          similique magnam, ut officiis cupiditate delectus aperiam molestiae
          blanditiis natus quo aliquam saepe consectetur enim non. Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Non laboriosam ipsam
          vero nihil itaque dolorum eius magnam molestias voluptas impedit
          repellendus reiciendis minus enim, ex explicabo voluptatem accusamus
          quis esse.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
