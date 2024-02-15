import React from "react";
import Home_section from "./home_section";
import About_section from "./about_section";
import Plan_section from "./plan_section";
import Category_section from "./category_section";
import Contact_section from "./contact_section";
import ScrollToTop from "react-scroll-to-top";
const LandingPage = () => {
  return (
    <div>
      <ScrollToTop
        smooth
        top={600}
        width="50"
        height="50"
        viewBox="0 0 90 90"
        svgPath="m45.006 24.052c.713-.025 1.416.219 1.943.744l16.26 16.277c1.135 1.139 1.203 2.9.15 3.953l-2.416 2.42c-1.053 1.053-2.813.984-3.947-.15l-6.793-6.799v24.525c0 1.381-1.025 2.486-2.301 2.486h-5.703c-1.277 0-2.309-1.105-2.309-2.486v-24.525l-6.785 6.799c-1.141 1.135-2.902 1.203-3.953.15l-2.418-2.42c-1.051-1.053-.979-2.814.156-3.953l16.105-16.125c.568-.568 1.298-.871 2.011-.896zm.041-14.198c-9.516 0-18.645 3.785-25.375 10.521-6.729 6.74-10.51 15.875-10.51 25.408 0 9.523 3.781 18.664 10.51 25.4 6.73 6.736 15.859 10.521 25.375 10.521 9.521 0 18.646-3.785 25.375-10.521 6.73-6.736 10.512-15.877 10.512-25.4 0-9.533-3.781-18.668-10.512-25.408-6.729-6.735-15.854-10.521-25.375-10.521z"
        style={{
          borderRadius: "150px",
          backgroundColor: "white",
          height: "50px",
          width: "50px",
        }}
      />
      <Home_section />
      <About_section />
      <Plan_section />
      <Category_section />
      <Contact_section />
    </div>
  );
};

export default LandingPage;
