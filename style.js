const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
const text = "Hi, I'm Mr.s";
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