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
          <div className="my-8 flex-1 leading-5 text-justify ">
            <p className="p-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eos quam cum, in asperiores animi delectus pariatur
              earum. Iste explicabo officiis est illum blanditiis ad laudantium
              deserunt quo sint nemo. Quod non nihil deleniti culpa nostrum,
              sequi cumque dolores porro fugit iusto at sed neque excepturi
              rerum asperiores eaque quo perferendis delectus laudantium atque
              quis nemo! Repellendus itaque neque dolor.
            </p>
            <p className="p-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eos quam cum, in asperiores animi delectus pariatur
              earum. Iste explicabo officiis est illum blanditiis ad laudantium
              deserunt quo sint nemo. Quod non nihil deleniti culpa nostrum,
              sequi cumque dolores porro fugit iusto at sed neque excepturi
              rerum asperiores eaque quo perferendis delectus laudantium atque
              quis nemo! Repellendus itaque neque dolor.
            </p>
            <p className="p-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eos quam cum, in asperiores animi delectus pariatur
              earum. Iste explicabo officiis est illum blanditiis ad laudantium
              deserunt quo sint nemo. Quod non nihil deleniti culpa nostrum,
              sequi cumque dolores porro fugit iusto at sed neque excepturi
              rerum asperiores eaque quo perferendis delectus laudantium atque
              quis nemo! Repellendus itaque neque dolor.
            </p>
            <p className="p-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eos quam cum, in asperiores animi delectus pariatur
              earum. Iste explicabo officiis est illum blanditiis ad laudantium
              deserunt quo sint nemo. Quod non nihil deleniti culpa nostrum,
              sequi cumque dolores porro fugit iusto at sed neque excepturi
              rerum asperiores eaque quo perferendis delectus laudantium atque
              quis nemo! Repellendus itaque neque dolor.
            </p>
            <p className="p-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eos quam cum, in asperiores animi delectus pariatur
              earum. Iste explicabo officiis est illum blanditiis ad laudantium
              deserunt quo sint nemo. Quod non nihil deleniti culpa nostrum,
              sequi cumque dolores porro fugit iusto at sed neque excepturi
              rerum asperiores eaque quo perferendis delectus laudantium atque
              quis nemo! Repellendus itaque neque dolor.
            </p>
            <p className="p-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eos quam cum, in asperiores animi delectus pariatur
              earum. Iste explicabo officiis est illum blanditiis ad laudantium
              deserunt quo sint nemo. Quod non nihil deleniti culpa nostrum,
              sequi cumque dolores porro fugit iusto at sed neque excepturi
              rerum asperiores eaque quo perferendis delectus laudantium atque
              quis nemo! Repellendus itaque neque dolor.
            </p>
            <p className="p-1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Quibusdam eos quam cum, in asperiores animi delectus pariatur
              earum. Iste explicabo officiis est illum blanditiis ad laudantium
              deserunt quo sint nemo. Quod non nihil deleniti culpa nostrum,
              sequi cumque dolores porro fugit iusto at sed neque excepturi
              rerum asperiores eaque quo perferendis delectus laudantium atque
              quis nemo! Repellendus itaque neque dolor.
            </p>
          </div>

          {/* image  */}
          <div className="my-8 flex-1 shadow-md shadow-slate-950">
            <img src={AboutImg} alt="profile" className="w-full h-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
