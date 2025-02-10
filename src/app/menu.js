import exampleImage from '../assets/restaurant.jpg';

const app=document.createElement('div');
app.classList.add('homePage');

app.innerHTML = '<h1>Welcome to Menu</h1>';

const div=document.createElement('div');

const imgElement = document.createElement('img');
imgElement.src = exampleImage;
imgElement.alt = 'Example Image';
const paragraph=document.createElement('p');
paragraph.innerText= `Welcome to our restaurant, where elegance meets exceptional dining!
                    Nestled in a warm, inviting ambiance, we serve a symphony of flavors
                    crafted from the finest ingredients. With impeccable service and 
                    beautifully presented dishes, we create unforgettable culinary 
                    experiences. Join us to savor delicious food, charming decor, 
                    and memories that linger long after your visit.`;
div.appendChild(imgElement);
div.appendChild(paragraph);
app.appendChild(div);
export default app;
