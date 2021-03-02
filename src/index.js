import './styles/main.scss'
import logo from './images/logo.png'
import cat from './images/cat-pic.png'
import batman from './images/batman-pic.png'
import hollywood from './images/hollywood-pic.png'
import strip from './images/strip-pic.png'
import logoFooter from './images/logo-footer.png'

let container = document.createElement('div');
container.className = "container";
document.body.append(container);
container.insertAdjacentHTML('beforeend','<header class="header"><img class="logo" src="./images/logo.png" alt="logo"><form class="input-wrapper" data-text=""><input type="text" placeholder="Поиск…"><button class="search-btn">Найти</button></form><button class="btn-entry">Войти</button></header>');

let main = document.createElement('main');
main.className = "main";
main.insertAdjacentHTML('beforeend','<div class="form_toggle"><div class="form_toggle-item item-1"><input id="fid-1" type="radio" name="radio" value="films" checked><label for="fid-1">Фильмы</label></div><div class="form_toggle-item item-2"><input id="fid-2" type="radio" name="radio" value="channel"><label for="fid-2">Телеканалы</label></div></div>');
container.append(main)

let filmContainer = document.createElement('div');
filmContainer.className = "film-container";
filmContainer.insertAdjacentHTML('beforeend','<div></div>');
main.append(filmContainer)

let newProd = document.createElement('section');
newProd.className = "newProd";
newProd.insertAdjacentHTML('beforeend','<h1>&#128293; Новинки</h1><div class="new-prod-cont"><div class="movie-item"><a class="movie-item-text" alt="Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."><img class="cat" src="./images/cat-pic.png" alt="cat"/></a><p class="movie-item-sign">Мульт в кино. Выпуск №103. Некогда грустить!</p></div><div class="movie-item"><a class="movie-item-text" alt="Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."><img class="batman" src="./images/batman-pic.png" alt="batman"/></a><p class="movie-item-sign">Новый Бэтмен</p></div><div class="movie-item"><a class="movie-item-text" alt="Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."><img class="hollywood" src="./images/hollywood-pic.png" alt="hollywood"/></a><p class="movie-item-sign">Однажды... в Голливуде</p></div><div class="movie-item"><a class="movie-item-text"      alt="Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."><img class="strip" src="./images/strip-pic.png" alt="strip"/></a><p class="movie-item-sign">Стриптизёрши</p></div></div>');
filmContainer.append(newProd)

let genres = document.createElement('section');
genres.className = "genres";
genres.insertAdjacentHTML('beforeend','<h1>Жанры</h1><div class="genres-cont"><a href="#" class="genre-item"><p class="genre-item-smile">&#128513;</p><p class="genre-item-text">Комедии</p></a><a href="#" class="genre-item"><p class="genre-item-smile">&#128557;</p><p class="genre-item-text">Драмы</p></a><a href="#" class="genre-item"><p class="genre-item-smile">&#128125;</p><p class="genre-item-text">Фантастика</p></a><a href="#" class="genre-item"><p class="genre-item-smile">&#128123;</p><p class="genre-item-text">Ужасы</p></a></div>');
filmContainer.append(genres)

let footer = document.createElement('footer');
footer.className = "footer";
footer.insertAdjacentHTML('beforeend','  <div class="footer-cont"><img src="./images/logo-footer.png" alt="logo-footer"><ul class="footer-data"><li class="footer-data-list"><a class="footer-data-adress" href="https://yandex.ru/maps/org/metallurg/1095688281/?ll=53.255156%2C56.854305&mode=search&sll=53.204843%2C56.852593&sspn=0.235863%2C0.075242&text=426057%2C%20%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F%2C%20%D0%A3%D0%B4%D0%BC%D1%83%D1%80%D1%82%D1%81%D0%BA%D0%B0%D1%8F%20%D0%A0%D0%B5%D1%81%D0%BF%D1%83%D0%B1%D0%BB%D0%B8%D0%BA%D0%B0%2C%20%D0%B3.%20%D0%98%D0%B6%D0%B5%D0%B2%D1%81%D0%BA%2C%20%D1%83%D0%BB.%20%D0%9A%D0%B0%D1%80%D0%BB%D0%B0%20%D0%9C%D0%B0%D1%80%D0%BA%D1%81%D0%B0%2C%20246%20%28%D0%94%D0%9A%20%C2%AB%D0%9C%D0%B5%D1%82%D0%B0%D0%BB%D0%BB%D1%83%D1%80%D0%B3%C2%BB%29&z=14">426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)</a></li><li class="footer-data-list"><a href="tel:+73412938861" class="footer-data-tel-item">+7 (3412) 93-88-61, </a><a href="tel:432929" class="footer-data-tel-item">43-29-29</a></li><li class="footer-data-list"><a href="https://htc-cs.ru" class="footer-data-site">htc-cs.ru</a></li></ul></div>');
document.body.append(footer)





function filmsCategory () {
    const filmsToggle = document.getElementById('fid-1')
    filmsToggle.addEventListener('click', () => {
    removeChannels ()  

    let filmContainer = document.createElement('div');
filmContainer.className = "film-container";
filmContainer.insertAdjacentHTML('beforeend','<div></div>');
main.append(filmContainer)

let newProd = document.createElement('section');
newProd.className = "newProd";
newProd.insertAdjacentHTML('beforeend','<h1>&#128293; Новинки</h1><div class="new-prod-cont"><div class="movie-item"><a class="movie-item-text" alt="Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."><img class="cat" src="./images/cat-pic.png" alt="cat"/></a><p class="movie-item-sign">Мульт в кино. Выпуск №103. Некогда грустить!</p></div><div class="movie-item"><a class="movie-item-text" alt="Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."><img class="batman" src="./images/batman-pic.png" alt="batman"/></a><p class="movie-item-sign">Новый Бэтмен</p></div><div class="movie-item"><a class="movie-item-text" alt="Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."><img class="hollywood" src="./images/hollywood-pic.png" alt="hollywood"/></a><p class="movie-item-sign">Однажды... в Голливуде</p></div><div class="movie-item"><a class="movie-item-text"      alt="Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."><img class="strip" src="./images/strip-pic.png" alt="strip"/></a><p class="movie-item-sign">Стриптизёрши</p></div></div>');
filmContainer.append(newProd)

let genres = document.createElement('section');
genres.className = "genres";
genres.insertAdjacentHTML('beforeend',' <h1>Жанры</h1><div class="genres-cont"><a href="#" class="genre-item"><p class="genre-item-smile">&#128513;</p><p class="genre-item-text">Комедии</p></a><a href="#" class="genre-item"><p class="genre-item-smile">&#128557;</p><p class="genre-item-text">Драмы</p></a><a href="#" class="genre-item"><p class="genre-item-smile">&#128125;</p><p class="genre-item-text">Фантастика</p></a><a href="#" class="genre-item"><p class="genre-item-smile">&#128123;</p><p class="genre-item-text">Ужасы</p></a></div>');
filmContainer.append(genres)
    })
}

function channelsCategory () {
    const channelsToggle = document.getElementById('fid-2')
    channelsToggle.addEventListener('click', () => {
    removeFilms () 
    
    let channels = document.createElement('section');
    channels.className = "channels";
    channels.insertAdjacentHTML('beforeend','<ul class="channel-list"><li class="channel-item"><img src="./images/first-channel.png" alt="first-channel" class="channel-pic_first"><ul class="channel-item_list"><li class="channel-item_list-item"><a href="#"class="channel-item_list_link"><h3>Первый канал</h3></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">13:00</time><p class="channel-item_text">Новости (с субтитрами)</p></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">14:00</time><p class="channel-item_text">Давай поженимся</p></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">15:00</time><p class="channel-item_text">Другие новости</p></a></li></ul></li><li class="channel-item"><img src="./images/2x2-channel.png" alt="2x2-channel" class="channel-pic_2x2"><ul class="channel-item_list"><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><h3>2x2</h3></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">13:00</time><p class="channel-item_text">МУЛЬТ ТВ. Сезон 4, 7 серия</p></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">14:00</time><p class="channel-item_text">ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия</p></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">15:00</time><p class="channel-item_text">БУРДАШЕВ. Сезон 1, 20 серия</p></a></li></ul></li><li class="channel-item"><img src="./images/rbc-channel.png" alt="rbc-channel" class="channel-pic_rbc"><ul class="channel-item_list"><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><h3>РБК</h3></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">13:00</time><p class="channel-item_text">ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС</p></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">14:00</time><p class="channel-item_text">ДЕНЬ. Главные темы</p></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">15:00</time><p class="channel-item_text">Главные новости</p></a></li></ul></li><li class="channel-item"><img src="./images/amedia-channel.png" alt="amedia-channel" class="channel-pic_amedia"><ul class="channel-item_list"><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><h3>AMEDIA PREMIUM</h3></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">13:00</time><p class="channel-item_text">Клиент всегда мёртв</p></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">14:00</time><p class="channel-item_text">Голодные игры: Сойка-пересмешница. Часть I</p></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">15:00</time><p class="channel-item_text">Секс в большом городе</p></a></li></ul></li><li class="channel-item"><img src="./images/first-channel.png" alt="first-channel" class="channel-pic_first"><ul class="channel-item_list"><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><h3>Первый канал</h3></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">13:00</time><p class="channel-item_text">Новости (с субтитрами)</p></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">13:00</time><p class="channel-item_text">Новости (с субтитрами)</p></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">13:00</time><p class="channel-item_text">Новости (с субтитрами)</p></a></li></ul></li><li class="channel-item"><img src="./images/2x2-channel.png" alt="2x2-channel" class="channel-pic_2x2"><ul class="channel-item_list"><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><h3>2x2</h3></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">13:00</time><p class="channel-item_text">МУЛЬТ ТВ. Сезон 4, 7 серия</p></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">14:00</time><p class="channel-item_text">ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия</p></a></li><li class="channel-item_list-item"><a href="#" class="channel-item_list_link"><time class="channel-item_time">15:00</time><p class="channel-item_text">БУРДАШЕВ. Сезон 1, 20 серия</p></a></li></ul></li></ul>');
    main.append(channels)
    })
}



function removeFilms () {
    const films = document.querySelector('.film-container')
    if(films){
        films.remove()
    } 
    
 }

 function removeChannels () {
    const channels = document.querySelector('.channels')
    if(channels){
        channels.remove()
} 
    
 }



filmsCategory()
channelsCategory ()