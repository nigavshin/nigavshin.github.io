import './styles/main.scss'
import logo from './images/logo.png'



let container = document.createElement('div');
container.className = "container";
document.body.append(container);
container.insertAdjacentHTML('beforeend','<header class="header"><img class="logo" src="./images/logo.png" alt="logo"><form><div class="search"><input type="search" name="q"><input type="submit" value=""></div></form><button class="dtn-entry">Войти</button></header>');

