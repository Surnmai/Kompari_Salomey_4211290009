import React from "react";

// import image
import AboutImg from "../img/about.jpg";
import AboutTop from "../img/abouttop.jpg";

// import Components
import TopBanner from "../components/TopBanner";

const About = () => {
  return (
    <>
      <TopBanner img={AboutTop} title="About" />
      <section className="section ">
        <div className="container mx-auto md:flex flex-wrap gap-8">
          {/* content  */}
          <div className="my-8 flex-1 leading-5 text-justify text-lg">
            <p className="p-2">
              Kompari Salomey is my name and I am the CEO of Beads and Buttons.
              I am an enthusiastic and smart young fashion designer. I also
              specialize in Bead making which allows me to express my creativity
              in a multitude of different ways.
            </p>
            <p className="p-2">
              In everything I do, I pride myself on being punctual,
              well-organized, innovative, reliable, and efficient. I believe
              that these qualities are essential for any successful fashion
              designer, and I always strive to achieve a very high standard in
              everything | undertake.
            </p>
            <p className="p-2">
              I have always been passionate about the fashion industry and began
              my journey by studying at a prestigious fashion school.
            </p>
            <p className="p-2">
              Today, I have my own fashion line that is known for being stylish,
              unique, and classic. When I'm not designing, I enjoy spending time
              with my family and friends, traveling, and exploring new cultures.
              I believe that these experiences are invaluable in terms of
              expanding my knowledge and understanding of the world around me,
              which helps me to create even more innovative designs.
            </p>
            <p className="p-2">
              In conclusion, I am proud to be a fashion designer and a bead
              maker who strives for excellence in everything that I do. I look
              forward to continuing to grow my business and making a name for
              myself in the fashion industry.
            </p>
            <h1 className="px-2 font-bold uppercase text-2xl">
              Mission statement
            </h1>
            <p className="p-2">
              To empower individuality through sustainable, innovative, and
              inclusive fashion design.
            </p>
            <h1 className="px-2 font-bold uppercase text-2xl">
              Vision statement
            </h1>
            <p className="p-2">
              My vision is to revolutionize the fashion industry by merging
              creativity with sustainability, and bringing bespoke fashion to
              all people regardless of their size, style or background.
            </p>
          </div>

          {/* image  */}
          <div className="my-8 flex-1 shadow-md shadow-slate-950 overflow-hidden rounded-md h-[40rem]">
            <img
              src={AboutImg}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
