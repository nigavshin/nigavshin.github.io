import './styles/main.scss'
import logo from './images/logo.png'



let container = document.createElement('div');
container.className = "container";
document.body.append(container);
container.insertAdjacentHTML('beforeend','<header class="header"><img class="logo" src="./images/logo.png" alt="logo"><form class="input-wrapper" data-text=""><input type="text" placeholder="Поиск…"><button class="search-btn">Найти</button></form><button class="btn-entry">Войти</button></header>');

