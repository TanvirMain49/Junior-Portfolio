import React, { useState } from "react";
import ProjectCard from "./ProjectCard";


const Project = () => {
  const [show, setShow] = useState(false);
  const projects = [
    {
      img: "https://i.ibb.co/kgmtk8t6/screencapture-dev-talks-1-web-app-2025-05-18-00-05-22.png",
      title: "DevTalks",
      description:
        "DevTalks is an AI-powered Q&A platform built for developers to get instant support, collaborate, and grow. It provides real-time chat, AI-generated answers, coding quizzes, and curated blogs for a seamless developer learning experience.",
      keyFeatures: [
        "AI Answers: Instantly solve coding questions using Groq and Gemini.",
        "Live Chat: Collaborate with devs in real time via Socket.IO.",
        "Code Quizzes: Test your skills with quick AI-generated quizzes.",
        "Tech Blogs: Access curated, reliable developer articles.",
        "Secure Auth: Safe login/signup with Firebase Authentication.",
        "Admin Controls: Manage users, content, and blogs with ease.",
        "Responsive Design: Smooth experience on all devices.",
      ],
      technologiesUsed: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Socket.IO",
        "Groq",
        "Gemini",
      ],
      links: {
        site: "https://dev-talks-1.web.app/",
        github: "https://github.com/AtiqurRahman895/DevTalks",
      },
    },

    {
      img: "https://i.ibb.co/8LxvGwsh/Screenshot-2025-05-18-004314.png",
      title: "Learn-Hub",
      description:
        "Learn-Hub is a full-stack Learning Management System that streamlines online education with features for students, instructors, and admins. It includes role-based access, secure payments, resource sharing, and review systems.",
      keyFeatures: [
        "Role-Based Access: Tailored dashboards for students, instructors, and admins.",
        "Session Booking: Book live sessions with secure Stripe payments.",
        "Material Upload: Instructors share resources after admin approval.",
        "Admin Panel: Manage users, content, and session reviews easily.",
        "Session Notes: Students can save personal notes for future use.",
      ],
      technologiesUsed: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      links: {
        site: "https://learn-hub-d12e0.web.app/",
        github: "https://github.com/TanvirMain49/Learn-Hub-Client",
      },
    },

    {
      img: "https://i.ibb.co.com/HDc0Kg16/pro1.png",
      title: "Game Heaven",
      description:
        "Game Heaven is a dynamic platform for gaming enthusiasts to explore, review, and manage their favorite games. It offers features like review management, personalized watchlists, and a responsive design with dark/light mode for an enhanced user experience.",
      keyFeatures: [
        "Review Management: Add, update, and delete game reviews.",
        "Personalized Watchlist: Create and manage a list of games to play or follow.",
        "Sorting & Filtering: Sort reviews by rating/year and filter by genre.",
        "Dark/Light Theme Toggle: Switch between themes for a customizable experience.",
      ],
      technologiesUsed: [
        "React",
        "Tailwind CSS",
        "Firebase",
        "MongoDB",
        "Express.js",
        "Node.js",
      ],
      links: {
        site: "https://game-heaven-1117d.web.app/",
        github: "https://github.com/TanvirMain49/Game-Heaven-Client",
      },
    },
    {
      img: "https://i.ibb.co.com/nqtPYzHL/pro2.png",
      title: "Blog Heaven",
      description:
        "The Blog Heaven Development Project! This project showcases a fully functional, dynamic, and responsive blog platform built with modern web development technologies like React, Firebase, and MongoDB.",
      keyFeatures: [
        "Dynamic Content Management: Easily create and edit blog posts.",
        "User Authentication: Secure login and registration with Firebase.",
        "JWT Token Authentication: Enhanced security with token-based user sessions.",
        "Responsive Design: Optimized for all devices with a clean UI.",
      ],
      technologiesUsed: [
        "React",
        "Firebase",
        "MongoDB",
        "Tailwind CSS",
        "Express.js",
        "Node.js",
      ],
      links: {
        site: "https://blog-website-7a80f.web.app/",
        github: "https://github.com/TanvirMain49/Blog-Heaven-Client",
      },
    },
    {
      img: "https://i.ibb.co.com/vvgjxHRS/pro3.png",
      title: "Gadget Heaven",
      description:
        "Welcome to Gadget Heaven — your go-to destination for the latest and greatest gadgets! This responsive e-commerce platform is built with React, allowing users to browse products, manage their cart and wishlist, and complete purchases seamlessly.",
      keyFeatures: [
        "Product Browsing: Explore a wide range of gadgets.",
        "Cart & Wishlist: Manage purchases and saved items.",
        "Secure Checkout: Smooth and safe purchasing process.",
      ],
      technologiesUsed: [
        "React",
        "Tailwind CSS",
        "Firebase",
        "MongoDB",
        "Node.js",
        "Express.js",
      ],
      links: {
        site: "https://giddy-engine.surge.sh/",
        github: "https://github.com/TanvirMain49/Gadget-Heaven",
      },
    },
    {
      img: "https://i.ibb.co.com/m5h4mR7b/pro4.png",
      title: "Mega Website",
      description:
        "This website uses GSAP for smooth, high-performance animations and Locomotive Scroll for a modern, interactive scrolling experience. With parallax effects and scroll-triggered animations, it creates a dynamic and immersive user experience, perfect for showcasing content in a visually engaging way.",
      keyFeatures: [
        "Smooth Animations: High-performance GSAP animations.",
        "Interactive Scrolling: Modern scroll effects with Locomotive Scroll.",
        "Parallax Effects: Dynamic content presentation.",
      ],
      technologiesUsed: [
        "GSAP",
        "Locomotive Scroll",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      links: {
        site: "https://tanvirmain49.github.io/Maga-website/",
        github: "https://github.com/TanvirMain49/Maga-website",
      },
    },
  ];

  return (
    <div
      className="md:max-w-[1240px] max-w-[1000px] flex flex-col justify-center items-center mx-auto p-6 md:my-20 "
      id="project"
    >
      <h2 className="md:text-6xl text-3xl font-bold text-gray-200 mb-20 text-center border-b-4 border-[#0a97b0e1] md:mx-[450px] mx-24">
        Project
      </h2>
      {show
        ? projects.map((project, ind) => (
            <ProjectCard key={ind} ind={ind} project={project}></ProjectCard>
          ))
        : projects
            .slice(0, 4)
            .map((project, ind) => (
              <ProjectCard key={ind} ind={ind} project={project}></ProjectCard>
            ))}

      <button
        onClick={() => setShow(!show)}
        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto px-6 py-4 border border-[#0A97B0] bg-[#0A97B0] flex items-center gap-2 rounded-xl"
      >
        {show ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default Project;
