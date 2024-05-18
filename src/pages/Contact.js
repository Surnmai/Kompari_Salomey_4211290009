import React from "react";

// import picture
import ContactBanner from "../img/contactBanner.jpg";

// import Components
import TopBanner from "../components/TopBanner";

const Contact = () => {
  return (
    <>
      <TopBanner img={ContactBanner} title="Contact" />
      <section className="section">
        <div className="container mx-auto md:flex flex-wrap gap-6">
          {/* map  */}
          <iframe
            className="flex-1 rounded-md"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10728.67613519535!2d-0.2862714703116987!3d6.068731300670047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf4035371e4685%3A0xd63ba66d68af3d02!2sKoforidua!5e0!3m2!1sen!2sgh!4v1714697515080!5m2!1sen!2sgh"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* google form  */}
          <iframe
            className="flex-1 rounded-md"
            title="form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSfaiTep9Zs9jQt9HYRiLDOYYvpM4ZpmetXKbGk2EQXmWiQu3g/viewform?embedded=true"
            // width="640"
            height="588"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
