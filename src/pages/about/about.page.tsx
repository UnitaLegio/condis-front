import React from "react";
import "./about.styles.scss";

const AboutPage: React.FC = () => {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <p>
                UnitaLegio is an imaginary team of skilled developers who are passionate about creating innovative
                software solutions. Our first project, PetInnova, is a platform for promotion our pet-projects. Also it
                is a root website of UnitaLegio team(us) and it is supposed to be connected with all showcased projects.
            </p>
            <p>
                Our team is made up of individuals from all over the galaxy, each bringing their own unique perspective
                and expertise to the table. We believe that diversity is key to creating exceptional software, and we're
                proud to have such a talented and diverse team.
            </p>
            <p>
                At UnitaLegio, we're committed to delivering high-quality software that meets the needs of our users.
                We're constantly striving to improve our skills and stay up-to-date with the latest technologies, so
                that we can continue to provide the best possible solutions.
            </p>
            <p>
                Thank you for exploring PetInnova, and we look forward to continuing to innovate and create exciting new
                products for all who is interested.
            </p>
        </div>
    );
};

export default AboutPage;
