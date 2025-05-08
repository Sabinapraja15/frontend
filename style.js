const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
const text = "Hi, I'm Ms.Sabina";
const typedText = document.getElementById('typed-text');
let index = 0;

function type(){
  if(index < text.length){
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(type,150);
  }
}
type();

//projects

const projects = [
  {
    image: "rabbit.jpg",
    title: "Animated Navbar",
    description: "A simple animated navbar using HTML, CSS, and JavaScript.",
  },
  {
    image: "rabbit.jpg",
    title:"HTML CSS",
    description: "A simple HTML CSS project using HTML, CSS, and JavaScript.",
 },
 {
  image: "rabbit.jpg",
  title: "Landing Pages",
  description: "A simple landing page using HTML, CSS, and JavaScript.",
 },
];
const container = document.getElementById("project-container");

projects.forEach(project=>{
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML= `
  <img src="${project.image}" alt="${project.title}"/>
  <h4>${project.title}</h4>
  <p>${project.description}</p>
    `;
    container.appendChild(card);
});