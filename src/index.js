import './style.css';
import home from './app/home';
import about from './app/about';
import menu from './app/menu';

const app = document.getElementById('content');
const buttons = document.querySelectorAll('button');

app.appendChild(home);

function addContent(name){
    while (app.firstChild) {
        app.removeChild(app.firstChild);
      }
    app.appendChild(name);
}

const components = {
    home, 
    about, 
    menu,  
  };
  

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const component = components[button.className];
        if (component) {
            addContent(component)
        } else {
            console.error(`No component found for ${button.className}`);
        }
    });
});




