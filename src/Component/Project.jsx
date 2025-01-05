import React from 'react';
import ProjectCard from './ProjectCard';
const Project = () => {
    const projects = [
        {
          img: 'https://i.ibb.co.com/8snKDHM/Screenshot-2025-01-05-100628.png',
          title: "Game Heaven",
          description: "Game Heaven is a user-friendly platform for game enthusiasts to explore, review, and share insights on games. It features user authentication, review management, and a responsive design for a seamless experience across all devices.",
          links: {
            site: "https://game-heaven-1117d.web.app/",
            github: "https://github.com/TanvirMain49/Game-Heaven-Client",
          },
        },
        {
            img: "https://i.ibb.co.com/mN1PR97/Screenshot-2025-01-05-100720.png",
          title: "Blog Heaven",
          description: "the Blog Heaven Development Project! This project showcases a fully functional, dynamic, and responsive blog platform built with modern web development technologies like React, Firebase, and MongoDB.",
          links: {
            site: "https://blog-website-7a80f.web.app/",
            github: "https://github.com/TanvirMain49/Blog-Heaven-Client",
          },
        },
        {
            img: "https://i.ibb.co.com/MNMq7qy/Screenshot-2025-01-05-100805.png",
          title: "Gadget Heaven",
          description: "Welcome to GadgetHeaven — your go-to destination for the latest and greatest gadgets! This responsive e-commerce platform is built with React, allowing users to browse products, manage their cart and wishlist, and complete purchases seamlessly.",
          links: {
            site: "https://giddy-engine.surge.sh/",
            github: "https://github.com/TanvirMain49/Gadget-Heaven",
          },
        },
        {
            img: 'https://i.ibb.co.com/gjKCZzH/Screenshot-2025-01-05-100914.png',
          title: "Mega Website",
          description: "This website uses GSAP for smooth, high-performance animations and Locomotive Scroll for a modern, interactive scrolling experience. With parallax effects and scroll-triggered animations, it creates a dynamic and immersive user experience, perfect for showcasing content in a visually engaging way.",
          links: {
            site: "https://github.com/TanvirMain49/Maga-website",
            github: "https://tanvirmain49.github.io/Maga-website/",
          },
        },
      ]
    return (
        <div className='md:max-w-[1240px] max-w-[1000px] mx-auto p-6 md:my-20 ' id='project'>
             <h2 className='md:text-6xl text-3xl font-bold text-gray-200 mb-20 text-center border-b-4 border-[#0a97b0e1] md:mx-[450px] mx-24'>Project</h2>
            {
                projects.map((project, ind)=><ProjectCard key={ind} ind={ind} project={project}></ProjectCard> )
            }
        </div>
    );
};

export default Project;