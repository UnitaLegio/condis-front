import React from "react";

const HomePage: React.FC = () => {
    return (
        <div className="container-fluid">
            <h1>Hi there! Welcome to our promo site</h1>
            <p>We are the UnitaLegio team, a group of imaginary developers who create various IT projects using
                different stacks of technologies. To learn more about PetInnova and UnitaLegio as well you can at <a
                    href="/about">about</a> page.</p>
            <p> Our aim is to promote our projects and showcase our skills. Please check out our <a
                href="/showcase">showcase</a> page to see some of our projects and the
                technologies we use.</p>
            <div><span>Slider with random projects will be here</span></div>
            <p> You can also learn more about our team on the <a href="/team">team</a> page.</p>
            <div><span>Slider with random teammates will be here</span></div>

        </div>
    );
};

export default HomePage;