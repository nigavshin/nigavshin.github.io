import './styles/main.scss'
import logo from './images/logo.png'
import cat from './images/cat-pic.png'
import batman from './images/batman-pic.png'
import hollywood from './images/hollywood-pic.png'
import strip from './images/strip-pic.png'
// import comedy from './images/comedy.png'
// import dram from './images/dram.png'
// import fantasy from './images/fantasy.png'
// import horor from './images/horor.png'



let container = document.createElement('div');
container.className = "container";
document.body.append(container);
container.insertAdjacentHTML('beforeend','<header class="header"><img class="logo" src="./images/logo.png" alt="logo"><form class="input-wrapper" data-text=""><input type="text" placeholder="Поиск…"><button class="search-btn">Найти</button></form><button class="btn-entry">Войти</button></header>');

let main = document.createElement('main');
main.className = "main";
main.insertAdjacentHTML('beforeend','<div class="form_toggle"><div class="form_toggle-item item-1"><input id="fid-1" type="radio" name="radio" value="films" checked><label for="fid-1">Фильмы</label></div><div class="form_toggle-item item-2"><input id="fid-2" type="radio" name="radio" value="channel"><label for="fid-2">Телеканалы</label></div></div>');
container.append(main)

let newProd = document.createElement('section');
newProd.className = "newProd";
newProd.insertAdjacentHTML('beforeend','<h1>&#128293; Новинки</h1><div class="new-prod-cont"><div class="movie-item"><a class="movie-item-text" alt="Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."><img class="cat" src="./images/cat-pic.png" alt="cat"/></a><p class="movie-item-sign">Мульт в кино. Выпуск №103. Некогда грустить!</p></div><div class="movie-item"><a class="movie-item-text" alt="Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."><img class="batman" src="./images/batman-pic.png" alt="batman"/></a><p class="movie-item-sign">Новый Бэтмен</p></div><div class="movie-item"><a class="movie-item-text" alt="Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."><img class="hollywood" src="./images/hollywood-pic.png" alt="hollywood"/></a><p class="movie-item-sign">Однажды... в Голливуде</p></div><div class="movie-item"><a class="movie-item-text"      alt="Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."><img class="strip" src="./images/strip-pic.png" alt="strip"/></a><p class="movie-item-sign">Стриптизёрши</p></div></div>');
main.append(newProd)

let genres = document.createElement('section');
genres.className = "genres";
genres.insertAdjacentHTML('beforeend',' <h1>Жанры</h1><div class="genres-cont"><a href="#" class="genre-item"><p class="genre-item-smile">&#128513;</p><p class="genre-item-text">Комедии</p></a><a href="#" class="genre-item"><p class="genre-item-smile">&#128557;</p><p class="genre-item-text">Драмы</p></a><a href="#" class="genre-item"><p class="genre-item-smile">&#128125;</p><p class="genre-item-text">Фантастика</p></a><a href="#" class="genre-item"><p class="genre-item-smile">&#128123;</p><p class="genre-item-text">Ужасы</p></a></div>');
main.append(genres)
