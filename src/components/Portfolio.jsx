import React from "react";
import project1 from "../assets/portfolio/p1.png";
import project2 from "../assets/portfolio/p2.png";
import project3 from "../assets/portfolio/p3.png";
import project4 from "../assets/portfolio/p4.png";
import project5 from "../assets/portfolio/p5.png";
import project6 from "../assets/portfolio/p6.png";
import project7 from "../assets/portfolio/p7.png";
import project8 from "../assets/portfolio/p8.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: project1,
      title: "ABC Jobs Portal",
      description:"Developed a job portal for software programmers, where the user can register, login ,search other users, view their profile, update profile, view software releted news. This was build using java, struts2, HTML, CSS, javascript, jQuery, bootstrap",
    },
    {
      id: 2,
      src: project2,
      title: "ABC Learning Site",
      description:"Developed learning website for the students, the website consisted of java, HTML courses where the students can apply and take the benefit, the website contains all the details of the courses given. The technology used is HTML, CSS, jQuery(ajax), javascript.",
    },
    {
      id: 3,
      src: project3,
      title: "Data Provision Tool",
      description:"Developed application is online registration of user for new postpaid or prepaid connection for any service provider. Create in memory data in application without database (Use Arrays in services for Registration and login process also delete If service Provider is inValid)",
    },
    {
      id: 4,
      src: project4,
      title: "ABC Car selling portal",
      description:"Developed application is online registration and login for user for buy new car or sells old car. User can see the car detail and submit bid for car and the caar will be sell to the highesst biddder . This was build using java, spring, HTML, CSS, javascript, jQuery, bootstrap.",
    },
    {
      id: 5,
      src: project5,
      title: "ABC Learning Site 2",
      description:"Developed learning website for the students, the website consisted of different Courses where the students can login, register and see the exam result. The technology used is HTML, CSS, javascript, react js, spring boot, google API, Rest API.",
    },
    {
      id: 6,
      src: project6,
      title: "Online Shopping Website",
      description:"Developed application is online registration and login for user for buy gaming products.The website consisted of gaming product and custom computer hardware for the buy this product.This site have all CRUD opration. The technology used is HTML, CSS,.Net, SQL Server.",
    },
    {
      id: 7,
      src: project7,
      title: "Army Information Website",
      description: "Developed a website that will provide a reliable, complete, and updated information about any entrance examination which lead to Indian army forces. The technology used is python, HTML, CSS, javascript, jQuery, bootstrap, MySQL, beautiful soup (web scraping).",
    },
    {
      id: 8,
      src: project8,
      title: "YouTube Downloader website",
      description:"Developed website is help to user; to download YouTube & Facebook high quality video in freely",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen" style={{height: "auto"}} 
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, title, src, description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"/>
                <h2 className="bg-indigo-500 text-center text-2xl sm:text-2xl font-bold text-white">{title}</h2>
              <div  className="flex items-center justify-center">
              <p className="text-white-500 py-4 max-w-md p-6">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
