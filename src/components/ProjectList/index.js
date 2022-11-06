import React, { useState } from 'react';
import Modal from '../Modal';

const ProjectList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState();

  const [projects] = useState([
    {
      name: 'Event Hunter',
      category: 'portfolio',
      description:
        'The application helps users browse the upcoming food & drink events in the city selected.',
      github: 'https://github.com/Racheldeng1995/EventHunter' 
    },
    {
      name: 'Food Print',
      category: 'portfolio',
      description:
        'This application can help you build your own virtual farm.',
      github: 'https://github.com/Racheldeng1995/Food-Print' 
    },
    {
      name: 'Workday Scheduler',
      category: 'front end',
      description:
        'Create a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.',
      github: 'https://github.com/Racheldeng1995/Workday-Scheduler'
    },
    {
      name: 'Weather Dashboard',
      category: 'front end',
      description:
        'A weather dashboard that will run in the browser and feature dynamically updated HTML and CSS. Use the OpenWeather One Call API (Links to an external site.) to retrieve weather data for cities.',
      github: 'https://github.com/Racheldeng1995/Weather-Dashboard'
    },
    {
      name: 'Code Quiz',
      category: 'front end',
      description:
        'a timed coding quiz with multiple-choice questions.',
      github: 'https://github.com/Racheldeng1995/CodingQuiz.github.io'
    },
    {
      name: 'Team Profile Generator',
      category: 'back end',
      description:
        'A Node.js command-line application that takes in information about employees on a software engineering team and generates an HTML webpage that displays summaries for each person. Because testing is key to making code maintainable, the application also include unit tests for each part of your code and ensure that it passes all of them.',
      github: 'https://github.com/Racheldeng1995/Team-Profile-Generator'
    },
    {
      name: 'Note Taker',
      category: 'back end',
      description:
        'An note taker app that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.',
      github: 'https://github.com/Racheldeng1995/Note-Taker'  
    },
    {
      name: 'E-commerce Back End',
      category: 'back end',
      description:
        'Internet retail, also known as e-commerce, is the largest sector of the electronics industry, having generated an estimated US$29 trillion in 2017 (Source: United Nations Conference on Trade and Development). E-commerce platforms like Shopify and WooCommerce provide a suite of services to businesses of all sizes. Due to the prevalence of these platforms, developers should understand the fundamental architecture of e-commerce sites.',
      github: 'https://github.com/Racheldeng1995/E-commerce-Back-End'
    },
    {
      name: 'Employee Tracker',
      category: 'back end',
      description:
        'Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). Your assignment this week is to build a command-line application from scratch to manage an employee database, using Node.js, Inquirer, and MySQL.',
      github: 'https://github.com/Racheldeng1995/Employee-Tracker' 
    },
    {
      name: 'Tech Blog',
      category: 'full stack',
      description:
        'This application is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts as well.',
      github: 'https://github.com/Racheldeng1995/Tech-Blog'
    },
    {
      name: 'Social Network API',
      category: 'full stack',
      description:
        'MongoDB is a popular choice for many social networks due to its speed with large amounts of data and flexibility with unstructured data. The APIs are for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. You’ll use Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.jsLinks to an external site. and MongooseLinks to an external site.',
      github: 'https://github.com/Racheldeng1995/Social-Network-API'
    },
    {
      name: 'Text Editor',
      category: 'full stack',
      description:
        'The app will be a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancies in case one of the options is not supported by the browser. The application will also function offline.',
      github: 'https://github.com/Racheldeng1995/Text-Editor'
    }
  ]);

  const currentProjects = projects.filter(project => project.category === category);

  const toggleModal = (image, i) => {
    setCurrentProject({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentProject={currentProject} />
      )}
      <div className="flex-row space-between">
        {currentProjects.map((image, i) => (
          <img
            src={require(`../../assets/large/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
