const movies = [
    {
        title: 'Unorthodox',
        img: './assets/imgs/movies/1.png',
        pegi: '16+',
        duration: '55m',
        quality: 'hd',
        genre: ['Thriller','Drammatico'],
        isWatched: false,
        isNew: true,
    },
    {
        title: 'After Life',
        img: './assets/imgs/movies/2.png',
        pegi: '12+',
        duration: '31m',
        quality: '4k',
        genre: ['Drammatico','Commedia','Sitcom'],
        isWatched: true,
        isNew: false,
    },
    {
        title: 'Vis a Vis',
        img: './assets/imgs/movies/3.png',
        pegi: '18+',
        duration: '1h15m',
        quality: 'sd',
        genre: ['Poliziesco','Drammatico','Thriller'],
        isWatched: true,
        isNew: false,
    },
    {
        title: 'The Place',
        img: './assets/imgs/movies/4.png',
        pegi: '14+',
        duration: '1h45m',
        quality: '3d',
        genre: ['Noir','Drammatico','Fantastico'],
        isWatched: false,
        isNew: true,
    },
    {
        title: 'Summertime',
        img: './assets/imgs/movies/5.png',
        pegi: '10+',
        duration: '54m',
        quality: '3d',
        genre: ['Drammatico','Teenager'],
        isWatched: false,
        isNew: true,
    },
    {
        title: 'I Delitti del Valhalla',
        img: './assets/imgs/movies/6.png',
        pegi: '18+',
        duration: '50m',
        quality: 'sd',
        genre: ['Thriller','Azione','Guerra'],
        isWatched: true,
        isNew: false,
    },
    {
        title: 'L\'altra Grace',
        img: './assets/imgs/movies/7.png',
        pegi: '18+',
        duration: '46m',
        quality: 'sd',
        genre: ['Crime','Drammatico','Thriller'],
        isWatched: true,
        isNew: false,
    },
    {
        title: 'Virgin River',
        img: './assets/imgs/movies/8.png',
        pegi: '14+',
        duration: '48m',
        quality: '3d',
        genre: ['Romantico','Azione','Drammatico'],
        isWatched: true,
        isNew: false,
    },
    {
        title: 'The English Game',
        img: './assets/imgs/movies/9.png',
        pegi: '16+',
        duration: '43m',
        quality: '4k',
        genre: ['Storico','Sportivo','Azione'],
        isWatched: false,
        isNew: true,
    },
    {
        title: 'Il Metodo Kominsky',
        img: './assets/imgs/movies/10.png',
        pegi: '18+',
        duration: '33m',
        quality: '4k',
        genre: ['Commedia','Drammatico'],
        isWatched: false,
        isNew: true,
    },
    {
        title: 'Patto d\'Amore',
        img: './assets/imgs/movies/11.png',
        pegi: '14+',
        duration: '96m',
        quality: 'sd',
        genre: ['Sentimentale','Romantico'],
        isWatched: true,
        isNew: false,
    },
    {
        title: 'La Casa de las Flores',
        img: './assets/imgs/movies/12.png',
        pegi: '18+',
        duration: '37m',
        quality: 'hd',
        genre: ['Commedia','Drammatico'],
        isWatched: false,
        isNew: true,
    },
    {
        title: 'Collateral Beauty',
        img: './assets/imgs/movies/13.png',
        pegi: '18+',
        duration: '1h37m',
        quality: '4k',
        genre: ['Drammatico','Fantastico','Psicologico'],
        isWatched: true,
        isNew: true,
    },
    {
        title: 'Self-Made',
        img: './assets/imgs/movies/14.png',
        pegi: '14+',
        duration: '45m',
        quality: 'hd',
        genre: ['Biografico','Drammatico'],
        isWatched: false,
        isNew: true,
    },
    {
        title: 'Freud',
        img: './assets/imgs/movies/15.png',
        pegi: '16+',
        duration: '58m',
        quality: 'hd',
        genre: ['Giallo','Psicologico','Thriller'],
        isWatched: true,
        isNew: false,
    },
    {
        title: 'Grace and Frankie',
        img: './assets/imgs/movies/16.png',
        pegi: '10+',
        duration: '25m',
        quality: 'sd',
        genre: ['Sitcom','Comico'],
        isWatched: false,
        isNew: true,
    },
    {
        title: 'Lasciati Andare',
        img: './assets/imgs/movies/17.png',
        pegi: '18+',
        duration: '1h33m',
        quality: '3d',
        genre: ['Commedia','Thriller','Drammatico'],
        isWatched: true,
        isNew: false,
    },
    {
        title: 'Dogman',
        img: './assets/imgs/movies/18.png',
        pegi: '18+',
        duration: '1h42m',
        quality: '4k',
        genre: ['Drammatico','Noir','Thriller'],
        isWatched: true,
        isNew: true,
    },
];

const navbar = document.querySelector('.navbar');
const header = document.querySelector('header');

const burgerBtn = document.querySelector('.navbar-burger-btn');
const mobileMenu = document.querySelector('.mobile-menu');

const randomizeArray = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
};

const trendingMovies = randomizeArray(movies);
const watchedMovies = randomizeArray(movies.filter(movie => movie.isWatched === true));
const newReleasedMovies = randomizeArray(movies.filter(movie => movie.isNew === true));
const dramaMovies = randomizeArray(movies.filter(movie => movie.genre.includes('Drammatico')));
const thrillerMovies = randomizeArray(movies.filter(movie => movie.genre.includes('Thriller')));

const trendingSection = document.querySelector('#trending-section');
const watchAgainSection = document.querySelector('#watch-again-section');
const newReleasesSection = document.querySelector('#new-releases-section');
const dramaSection = document.querySelector('#drama-section');
const thrillerSection = document.querySelector('#thriller-section');
const footer = document.querySelector('footer');
const footerSection = document.querySelector('.footer-section');

const trendingSwiper = document.querySelector('#trending-swiper');
const watchAgainSwiper = document.querySelector('#watch-again-swiper');
const newReleasesSwiper = document.querySelector('#new-releases-swiper');
const dramaSwiper = document.querySelector('#drama-swiper');
const thrillerSwiper = document.querySelector('#thriller-swiper');

const createCardPreview = (data) => {
    const cardPreview = document.createElement('img');
    cardPreview.classList.add('img-fluid', 'card-preview');
    cardPreview.src = data.img;
    cardPreview.alt = data.title.replaceAll(' ', '-').toLowerCase();

    return cardPreview;
};

const createCardGenre = (data) => {
    const cardGenre = document.createElement('div');
    cardGenre.classList.add('card-genre');

    const genreParag = document.createElement('p');
    genreParag.innerHTML = data.genre.join(` &bull; `);

    cardGenre.appendChild(genreParag);

    return cardGenre;
};

const createCardInfo = (data) => {
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info', 'pb-2');

    const cardPegi = document.createElement('div');
    cardPegi.classList.add('pegi', 'px-1');
    cardPegi.innerText = data.pegi;

    const cardDuration = document.createElement('p');
    cardDuration.classList.add('mb-0');
    cardDuration.innerText = data.duration;

    const cardQuality = document.createElement('i');
    cardQuality.classList.add('bi', `bi-badge-${data.quality}`);

    cardInfo.append(cardPegi, cardDuration, cardQuality);

    return cardInfo;
};

const createCardContent = (info, genre) => {
    const cardContent = document.createElement('div');
    cardContent.classList.add('movie-card-content');

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container', 'd-flex', 'justify-content-between', 'align-items-center', 'pb-3');

    const leftButtons = document.createElement('div');
    leftButtons.classList.add('btns-left', 'd-flex', 'align-items-center', 'gap-1');

    const playButton = document.createElement('button');
    playButton.classList.add('card-btn', 'play-btn');
    playButton.innerHTML = '<i class="bi bi-play-fill"></i>';

    const addButton = document.createElement('button');
    addButton.classList.add('card-btn');
    addButton.innerHTML = '<i class="bi bi-plus"></i>';

    const likeButton = document.createElement('button');
    likeButton.classList.add('card-btn');
    likeButton.innerHTML = '<i class="bi bi-hand-thumbs-up"></i>';

    const rightButtons = document.createElement('div');
    rightButtons.classList.add('btns-right');

    const downButton = document.createElement('button');
    downButton.classList.add('card-btn');
    downButton.innerHTML = '<i class="bi bi-chevron-down"></i>';
    
    rightButtons.appendChild(downButton);
    leftButtons.append(playButton, addButton, likeButton);

    buttonsContainer.append(leftButtons, rightButtons);

    cardContent.append(buttonsContainer, info, genre);

    return cardContent;
};

const createCard = (preview, content) => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');

    movieCard.append(preview, content);

    return movieCard;
};

const createSliderSlide = (card) => {
    const movieSlide = document.createElement('div');
    movieSlide.classList.add('swiper-slide');

    movieSlide.appendChild(card);

    return movieSlide
};

const createSlider = (container, slide) => {
    container.appendChild(slide)
};

const createSection = (moviesArray, section) => {
    moviesArray.forEach(movie => {
        const cardPreview = createCardPreview(movie);
        const cardInfo = createCardInfo(movie);
        const cardGenre = createCardGenre(movie);
        const cardContent = createCardContent(cardInfo, cardGenre);
        const movieCard = createCard(cardPreview, cardContent);
        const movieSlide = createSliderSlide(movieCard);
    
        createSlider(section, movieSlide);
    });
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target);
        };
    });
}, {
    root: null,
    threshold: 0.3,
});

const footerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            footerSection.classList.add('footer-visible');
            observer.unobserve(entry.target);
        };
    });
}, {
    root: null,
    threshold: 0.6,
});

const swiper = new Swiper('.swiper', {
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: '4px',
        },
        640: {
            slidesPerView: 4,
            spaceBetween: '8px',
        },
        992: {
            slidesPerView: 6,
            spaceBetween: '8px',
        },
    },
});

document.addEventListener('DOMContentLoaded', () => {
    navbar.classList.add('navbar-visible');
    setTimeout( () => {
        header.classList.add('header-visible');
    }, 1000);
});


document.addEventListener('DOMContentLoaded', () => {
    setTimeout( () => {
        trendingSection.classList.add('section-visible');

        createSection(trendingMovies, trendingSwiper);
        createSection(watchedMovies, watchAgainSwiper);
        createSection(newReleasedMovies, newReleasesSwiper);
        createSection(dramaMovies, dramaSwiper);
        createSection(thrillerMovies, thrillerSwiper);

        sectionObserver.observe(watchAgainSection);
        sectionObserver.observe(newReleasesSection);
        sectionObserver.observe(dramaSection);
        sectionObserver.observe(thrillerSection);

        footerObserver.observe(footer);
    }, 2600);
});

burgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('mobile-menu-active');
});