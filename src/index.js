import './index.scss';



// interactive header navigation

import Header from './components/Header';

const headerSettings = {
    headerSwitcherClass: "header__switcher-button",
    headerLogoAreaSelector: ".header__logo-area",
    headerNavigationSelector: ".header__nav"
}

const header = new Header(headerSettings);
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
