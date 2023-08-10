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
