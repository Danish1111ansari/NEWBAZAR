import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={'policy - newbazar'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Use of information: How the collected information is used, whether it's for order processing, customer support, marketing purposes, or sharing with third parties.</p>
          <p>Data security: What measures the website takes to protect your personal information from unauthorized access, such as encryption or secure browsing.</p>
          <p>Cookies and tracking technologies: How the website uses cookies and similar technologies to track your browsing behavior and provide personalized experiences.</p>
          <p>Third-party sharing: Whether the website shares your information with third parties, such as payment processors, shipping providers, or advertising networks.</p>
          <p>Your rights: Your rights regarding your personal information, such as the ability to access, update, or delete your data.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
