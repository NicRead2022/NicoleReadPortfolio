/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "/workspaces/NicoleReadPortfolio/src/images/Screen Shot 2022-12-01 at 11.07.49 AM.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Aura Vibes",
    description:
     "An application that curates playlists for users based on their selected mood.",
    url: "https://github.com/NicRead2022/MOOD-FE.git",
  },
  {
    title: "Hired",
    description:
      "Hired is an application for musicians and bandleaders where they can post gigs that need muscians and where musicians can post their services and availabilty .",
    url: "https://hiredgig.herokuapp.com/",
  },
  {
    title: "Student Tracker",
    description:
      "A teacher friendly app that allows grade tracking and features to add students to classes and tracks their GPA .",
    url: "https://github.com/NicRead2022/Student-Tracker-FE/tree/main/student-tracker",
  },
  // {
  //   title: "GitHub Codespaces and github.dev",
  //   description:
  //     "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
  //   url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  // },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src="https://images.unsplash.com/photo-1512981566925-4937ba1d2b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGxhcHRvcCUyMGRlc2t8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            style={{ height: "70%", width: "70%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
