import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portforlio from './components/Portfolio';
import ContactForm from './components/Contact';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'My team projects.',
    },
    {
      name: 'front end',
      description: 'Front end projects',
    },
    { name: 'back end', description: 'Back end projects' },
    { name: 'full stack', description: 'Full stack projects' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portforlio currentCategory={currentCategory}></Portforlio>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
      <footer>
        <div className='flex-row flex-end my-2 mx-2 px-2'>
          <a href="https://github.com/Racheldeng1995/"><i className='fa fa-facebook'></i></a>
          <a href="https://github.com/Racheldeng1995/"><i className='fa fa-twitter'></i></a>
          <a href="https://github.com/Racheldeng1995/"><i className='fa fa-linkedin'></i></a>
          <a href="https://github.com/Racheldeng1995/"><i className='fa fa-github'></i></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
