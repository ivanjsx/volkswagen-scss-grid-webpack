export default class Header {
    constructor(
        {
            headerSwitcherClass, 
            headerLogoAreaSelector, 
            headerNavigationSelector
        }
    ) {
        this._headerSwitcherClass = headerSwitcherClass;
        this._headerSwitcher = document.querySelector(`.${headerSwitcherClass}`);
        this._headerLogoArea = document.querySelector(headerLogoAreaSelector);
        this._headerNavigation = document.querySelector(headerNavigationSelector);
    };

    _revealNavigation() {
        this._headerSwitcher.classList.remove(`${this._headerSwitcherClass}_state_reveal`);
        this._headerSwitcher.classList.add(`${this._headerSwitcherClass}_state_hide`);
        this._headerLogoArea.style.display = "none";
        this._headerNavigation.style.display = "flex";     
    };

    _hideNavigation() {
        this._headerSwitcher.classList.remove(`${this._headerSwitcherClass}_state_hide`);
        this._headerSwitcher.classList.add(`${this._headerSwitcherClass}_state_reveal`);
        this._headerLogoArea.style.display = "flex";
        this._headerNavigation.style.display = "none";  
    };

    _toggleMenu() {
        if (
            this._headerSwitcher.classList.contains(
                `${this._headerSwitcherClass}_state_reveal`
            )
        ) {
            this._revealNavigation();
        } else {
            this._hideNavigation();
        };
    };

    setEventListeners() {
        this._headerSwitcher.addEventListener(
            "click", this._toggleMenu.bind(this)
        );
    };
};
