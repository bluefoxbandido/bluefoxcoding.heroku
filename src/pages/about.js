import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>about the developer</h1>
      </div>
      <div className="about-body">
        <div className="avatar">
          <span style={{ color: "blue" }}>b</span>
          <span style={{ color: "red" }}>f</span>
        </div>
        <div className="text-body">
          <p className="intro">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            eos nesciunt minus quibusdam, iste sapiente nihil deleniti molestias
            assumenda rem sint. Magni dolor aperiam porro. Illum molestias quis
            fugit quas.
          </p>
          <p className="body">
            Alias ut esse voluptates saepe molestiae magni, ea dolores iure
            aspernatur. Quo excepturi iure quis facilis, ratione tenetur
            inventore animi, cum, veritatis fugit sapiente! Maiores ipsum
            quaerat doloribus repellendus temporibus.
          </p>
          <p className="body">
            Tempora voluptatem quo vitae iure! Praesentium quo magnam deserunt
            soluta provident eaque quae nulla, quam sint ipsum! Veniam eius
            laudantium sunt illo maiores quaerat laboriosam! Officiis harum quis
            earum magnam.
          </p>
          <p className="body">
            Mollitia accusamus velit perspiciatis aliquid quisquam distinctio
            blanditiis sed, iste amet praesentium soluta eaque libero provident
            dolores assumenda quaerat tempore doloribus fugit magnam. Ratione
            alias consectetur culpa vel quasi maxime.
          </p>
          <p className="conclusion">
            Officia autem repellat nihil, ut animi magni illo exercitationem
            dolore modi consequatur culpa aspernatur odio, at, doloribus itaque
            error laborum. Consequuntur officia repellat voluptate ad debitis
            ipsum deserunt dignissimos neque?
          </p>
        </div>
        <div className="sidebar">
          <ul className="social-links">
            <li className="github">
                <button className="github">Github</button>
            </li>
            <li className="linkedIn">
                <button className="linkedIn">LinkedIn</button>
            </li>
            <li className="email">
                <button className="email">Email</button>
            </li>
          </ul>
          <p className="quote">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis excepturi, expedita accusamus nisi exercitationem at?
            Facere nesciunt animi totam deleniti quaerat quae quia ea
            recusandae. Ut ex deserunt quia aut!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
