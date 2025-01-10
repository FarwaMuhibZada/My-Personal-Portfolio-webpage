// Hamburger menu
const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menu');
const navlinkEls = document.querySelectorAll('.nav-link');
humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

navlinkEls.forEach((navlinkEl) => {
  navlinkEl.addEventListener('click', () => {
    document.querySelector('.borders')?.classList.remove('borders');
    navlinkEl.classList.add('borders');
  });
});

// About section content
const aboutContent = document.getElementById('about');
const skills = {
  description: 'Hello! I am Farwa Muhibzada, a passionate web developer with a solid foundation in programming and a year of experience. I recently completed the Full Stack Web Development program at Kickstart, where I mastered frontend and backend technologies, including React, Redux, Node.js, Express.js, and database management. This program enhanced my skills in building scalable, user-friendly solutions and deploying them to platforms like Vercel, making me a versatile and efficient developer.',
  frontendDev: ['Core Skills: HTML, CSS, JavaScript, JSX, RWD, React, Redux', 'Frameworks/Tools: Tailwind CSS, Bootstrap'],
  backendDev: ['Core Skills: Node.js, Express.js, CRUD, Authentication, SSR', 'Databases: SQL, NoSQL, PostgreSQL, MongoDB'],
  softSkills:['Problem-Solving, Debugging, Communication, Adaptability'],
  ProfSkills: ['Agile Development, Task Management, Code Review, Mentorship'],
  certification: [
    { name: 'JavaScript Algorithm & Data Structure', img: './asset/certificate_js.png', link: 'https://www.freecodecamp.org/certification/fawaMuhibzada/responsive-web-design' },
    { name: 'Responsive Web Design (HTML, CSS)', img: './asset/Screenshot (807).png', link: 'https://www.freecodecamp.org/certification/fawaMuhibzada/javascript-algorithms-and-data-structures-v8' },
  ],
};

aboutContent.innerHTML = `
  <div class="about-text">
    <h2>About <span>Me</span></h2>
    <h4>Web Develo<span>pe</span>r</h4>
    <p id="mypara">${skills.description}</p>
    <br>
    <ul>
      <li class="skill-text"><span >Frontend Development</span>${skills.frontendDev.join(', ')}</li>
      <li class="skill-text"><span>Backend Development</span>${skills.backendDev.join(', ')}</li>
      <li class="skill-text"><span>Soft Skills</span>${skills.softSkills.join(', ')}</li>
      <li class="skill-text"><span>Professional Skills</span>${skills.ProfSkills.join(', ')}</li>


    </ul>
  </div>
  <div class="about-img">
    ${skills.certification.map((certificate) => `
      <h2>${certificate.name}</h2>
      <br>
      <a href='${certificate.link}' target="_blank">
        <img src='${certificate.img}' alt='certificate picture'>
      </a>`).join('')}
  </div>
`;

// Project section contents
const projectContent = document.getElementById('project-content');
const projectModal = document.getElementById('myModal');
const modalContent = document.getElementById('modal-content');

// Project data
const projects = [
  {
    title: 'Space Travelers Hub',
    shortDes: 'a web application based on the real live data from the SpaceX API.',
    longDes: `
    a web application based on the real live data from the SpaceX API. This application will allow users to book rockets and join selected space missions`,
    img: './asset/space.PNG',
    technology: ['REACT', 'REDUX','BOOTSTRAP'],
    liveLink: ': https://space-traveler-hub-farwamuhibzada.netlify.app/',
    sourceLink: 'https://github.com/FarwaMuhibZada/space-travelers-hub',
  },
  {
    title: 'random-quote-machine',
    shortDes: ' is a simple web application that displays random quotes along with their authors ',
    longDes: `
    is a simple web application that displays random quotes along with their authors. Users can fetch new quotes and share them on Twitter.`,
    img: './asset/qoute.PNG',
    technology: ['REACT', 'CSS'],
    liveLink: ': https://random-qoute-machine-farwamuhibzada.netlify.app/',
    sourceLink: 'https://github.com/FarwaMuhibZada/random-quote-machine',
  },
  {
    title: 'CashRegisterApp',
    shortDes: 'This application calculates and displays change due to a customer based on the price of an item ',
    longDes: `
    This project is a cash register application that calculates and displays change due to a customer based on the price of an item,
    the cash provided,It showes different messages depending on the scenario.`,
    img: './asset/cashregister.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://farwamuhibzada.github.io/Cash_Register_App/',
    sourceLink: 'https://github.com/FarwaMuhibZada/Cash_Register_App',
  },
  {
    title: 'Next Advanced App',
    shortDes: 'Next.js web application that allows users to view blog posts, explore user profiles, and discover team insights.',
    longDes: `
    is a Next.js web application that allows users to view blog posts, explore user profiles, and discover team insights. The platform supports both Static Site Generation (SSG) and Server-Side Rendering (SSR) for efficient data handling. The app features a responsive design powered by Tailwind CSS, making it accessible on all devices.`,
    img: './asset/tech.PNG',
    technology: ['NextJS', 'Tailwind CSS', 'TypeScript'],
    liveLink: ' https://nextjs-advanced-8b9o2jgf2-farwamuhibzadas-projects.vercel.app/',
    sourceLink: 'https://github.com/FarwaMuhibZada/nextjs-advanced-app/pull/1',
  },
  {
    title: 'PokemonSearchApp',
    shortDes: 'A web application for searching Pokémon details by name or ID using the PokéAPI',
    longDes: `A web application for searching Pokémon details by name or ID using the PokéAPI Proxy provided by freeCodeCamp.
    Search: Enter a Pokémon name or ID to retrieve detailed information.`,
    img: './asset/pokimon.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://farwamuhibzada.github.io/Pokemon-Search-App/',
    sourceLink: 'https://github.com/FarwaMuhibZada/Pokemon-Search-App',
  },
  {
    title: 'build-drum-machine',
    shortDes: `Build a drum machine app that mimics the functionality of the reference drum machine.`,
    longDes: `
  Build a drum machine app that mimics the functionality of the reference drum machine provided here. The app should be designed using React, and it should fulfill the user stories listed in the freeCodeCamp curriculum.`,
    img: './asset/drum.PNG',
    technology: ['REACT', 'TailwindCSS'],
    liveLink: 'https://drum-machine-farwaamhubzada.netlify.app/',
    sourceLink: 'https://github.com/FarwaMuhibZada/build-drum-machine',
  },

];

const closeModals = () => {
  projectModal.classList.add('hidden');
};

const showModal = (index) => {
  const project = projects[index];
  modalContent.innerHTML = `
    <button id="close">&times;</button>
    <div class="modal-header">
      <h2>${project.title}</h2>
    </div>
        <ul class="langs" id="margin-ul">
      <li class="lang-item">${project.technology.join(' / ')}</li>
    </ul>
    <div class="modal-body">
      <img src="${project.img}" alt="Image">
      <div class="modal-body-p">
      <p>${project.longDes}</p>
      </div>
    </div>
    <div class="modal-footer">
      <a href="${project.sourceLink}">Source Code</a>
      <a href="${project.liveLink}">Live Link</a>
    </div>`;
  projectModal.classList.remove('hidden');

  // Attach event listener to close button inside modal
  document.getElementById('close').addEventListener('click', closeModals);
};

projectContent.innerHTML = projects.map((project, index) => `
  <div class="box">
    <div class="proj-img">
      <img src="${project.img}">
    </div>
    <div class="proj-info">
    <h3>${project.title}</h3>
    <p>${project.shortDes}</p>
    <ul class="langs">
      <li class="lang-item">${project.technology.join(' / ')}</li>
    </ul>
    <button class="btn" data-index="${index}">See More</button>
  </div>
  </div>`).join('');

// Attach event listeners to dynamically created buttons
document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('click', () => {
    const index = button.getAttribute('data-index');
    showModal(index);
  });
});

// Contact form validation
const contactForm = document.getElementById('form');
const errorMsg = document.getElementById('error-msg');

contactForm.addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    errorMsg.classList.remove('hidden');
  } else {
    errorMsg.classList.add('hidden');
  }
});

const formFields = ['name', 'email', 'message'];

formFields.forEach((field) => {
  const input = document.getElementById(field);
  input.value = localStorage.getItem(field) || '';
  input.addEventListener('input', () => {
    localStorage.setItem(field, input.value);
  });
});
