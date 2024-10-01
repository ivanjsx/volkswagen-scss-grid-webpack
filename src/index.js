// load styles
import './index.css';



// add website icon

import Icon from './components/Icon';

import source from '../images/icon.png';

const icon = new Icon();
icon.setSource(source);



// interactive header navigation

import Header from './components/Header';

const headerSettings = {
    navigationClass: "header__nav",
    logoAreaClass: "header__logo-area",
    switcherAreaClass: "header__switcher-area",
    switcherButtonClass: "header__switcher-button"
}

const header = new Header(headerSettings);
header.setState();
header.setEventListeners();



// scrollable photo gallery

import Gallery from './components/Gallery';

import rearViewImage from '../images/rear_view.png';
import driverSeatImage from '../images/driver_seat.png';
import passengerSeatImage from '../images/passenger_seat.png';

// might as well collect photos from an API endpoint
const pictureSourcesList = [
    rearViewImage,
    driverSeatImage,
    passengerSeatImage
];

const galleryOptions = {
    pictureSelector: ".gallery__picture", 
    switcherButtonClass: ".gallery__switcher-button",
};

const gallery = new Gallery(pictureSourcesList, galleryOptions);
gallery.setInitialSourceIndex(0);
gallery.setEventListeners();



// external articles section

import Article from './components/Article';

// might as well collect articles from an API endpoint
const articlesObjectList = [
    {
        magazine: "Drive.ru",
        title: "Вэн Volkswagen e-Bulli скрестил классику с современной техникой",
        link: "https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html"
    },
    {
        magazine: "Engadget",
        title: "VW’s e-BULLI concept shows how your classic van can become an EV",
        link: "https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html"
    }
];

const articleSettings = {
    linkSelector: ".press__link",
    titleSelector: ".press__article-title",
    magazineSelector: ".press__article-magazine",
    switcherButtonsContainerSelector: ".press__switcher-area",
    switcherButtonTemplateSelector: "#press__switcher-button",
    switcherButtonElementClass: "press__switcher-button"
};

articlesObjectList.forEach(
    articleObject => {
        const article = new Article(articleObject, articleSettings);
        article.generate();
    }
);



// subscription form submission

import Form from './components/Form';

// might as well send form data to an API endpoint
function subscriptionFormSubmitHandler(event) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(
                () => {
                    if (Math.random() < 0.5) {
                        resolve();
                    } else {
                        reject();
                    };
                }, 
                1000
            );
        }
    );
};

const subscriptionFormSettings = {
    name: "subscription",
    submitButtonSelector: ".footer__submit", 
    submitHandler: subscriptionFormSubmitHandler
};

const form = new Form(subscriptionFormSettings);
form.setProcessingText("отправляем...");
form.setSuccessText("готово!");
form.setErrorText("ошибка :(");
form.setEventListeners();
