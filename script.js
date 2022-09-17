const mobileMenu = document.getElementById('mobile');

// function to display mobile menu
function toggleMobileMenu() {
  if (mobileMenu.style.display === 'none') {
    mobileMenu.style.display = 'block';
  } else {
    mobileMenu.style.display = 'none';
  }
}
toggleMobileMenu();

// function to close the mobile menu
function exitMobileMenu() {
  mobileMenu.style.display = 'none';
}
exitMobileMenu();

// function to pouplate Mobile menu
const menuList = [{
  home: 'Home',
  about: 'About',
  program: 'program',
  reg: 'Register',
  news: 'News',
  conf: 'Conference',
},
];

const displayMenu = menuList.map((list) => `

<div class="overlay">
<a href="#" onclick="exitMobileMenu()"><span class="material-icons" id="close">close</span></a>
</div>
<ul class="mobile-links">
        <li><a href='./index.html'>${list.home}</a></li>
        <li><a href='./about.html'>${list.about}</a></li>
        <li><a href="#">${list.program}</a></li>
        <li><a href="#">${list.reg}</a></li>
        <li><a href="#" class="mobile-conf">${list.conf}</a></li>
    </ul>`);

const overlay = document.querySelector('.mobile-menu');
overlay.innerHTML = displayMenu;

/*
--------------------------------------------
An Object Array to populate Speakers' section
=============================================
*/

const speakersData = [{
  passport: './images/andrea-piacquadio.png',
  name: 'Andrea Piacquadio',
  title: 'CEO iNifiniTy Incorporated, Lagos, Nigeria',
  role: 'Expert in OOP esp JavaScript, building robust and secure application for organisations for years',
},
{
  passport: './images/christina-morillo.png',
  name: 'Christina Morillo',
  title: 'Chief Technical Officer Node+ International Ltd, USA',
  role: 'Expert in Ruby, SQL, Oracle - core area of expertise: Database Development, Data security and Data integerity',
},
{
  passport: './images/creation-hill.png',
  name: 'Gerald Hill',
  title: 'Associate Professor Computer Science, Nnamdi Azikiwe University',
  role: 'Experienced in Artificial Intelligence and Machine learning',
},
{
  passport: './images/godisable-jacob.png',
  name: 'Godisable Jacob',
  title: 'Manager Duo Technologies, Lagos',
  role: 'Leading name in educational software platforms, Online remote learning interactive software developers',
},
{
  passport: './images/justin-shaifer.png',
  name: 'Justin Shaifer',
  title: 'Chief Technical Officer, digitTech, Nigeria',
  role: 'Expert in Networking, traffic resource distribution and Organisational Data security',
},
{
  passport: './images/daniel-xavier.png',
  name: 'Daniel Xavier',
  title: 'CEO Life Picturesque Visuals, Lagos',
  role: 'Experts in motion and still live-life imaging, high definition picture and digital studio works',
},
];

const speakersList = document.querySelector('.speaker-list');
const displaySpeakers = speakersData.map((dataList) => `<div class="speaker">
<div class="image-holder">
    <img src="./images/bg-frame.jpeg" alt="transparent frame" class="speaker-frame">
    <img src=${dataList.passport} alt="first speaker" class="speaker-image">
</div>
<div class="speaker-bio">
    <h3 class="name">${dataList.name}</h3>
    <h4 class="title">${dataList.title}</h4>
    <div class="gray-line"></div>
    <p class="role">${dataList.role}</p>
</div>
</div>`).join('');

speakersList.innerHTML = displaySpeakers;
