export default class Header {
    constructor(
        {
            navigationClass,
            logoAreaClass,
            switcherAreaClass,
            switcherButtonClass,
        }
    ) {
        this._navigationClass = navigationClass;
        this._logoAreaClass = logoAreaClass;
        this._switcherAreaClass = switcherAreaClass;
        this._switcherButtonClass = switcherButtonClass;
        this._navigation = document.querySelector(`.${navigationClass}`);
        this._logoArea = document.querySelector(`.${logoAreaClass}`);
        this._switcherArea = document.querySelector(`.${switcherAreaClass}`);
        this._switcherButton = document.querySelector(`.${switcherButtonClass}`);
    };
    
    _switcherShowReveal() {
        this._switcherButton.classList.remove(`${this._switcherButtonClass}_state_hide`);
        this._switcherButton.classList.add(`${this._switcherButtonClass}_state_reveal`);    
    };
    
    _switcherShowHide() {
        this._switcherButton.classList.remove(`${this._switcherButtonClass}_state_reveal`);         
        this._switcherButton.classList.add(`${this._switcherButtonClass}_state_hide`);
    };

    setState() {
        if (window.innerWidth <= 1000) {
            this._navigation.classList.remove(`${this._navigationClass}_visible`);          
            this._logoArea.classList.add(`${this._logoAreaClass}_visible`);
            this._switcherShowReveal();
            this._switcherArea.classList.add(`${this._switcherAreaClass}_visible`);
        } else {
            this._navigation.classList.add(`${this._navigationClass}_visible`);          
            this._logoArea.classList.add(`${this._logoAreaClass}_visible`);
            this._switcherArea.classList.remove(`${this._switcherAreaClass}_visible`);
        }
    };

    _revealNavigation() {
        this._switcherShowHide();
        this._navigation.classList.add(`${this._navigationClass}_visible`);      
        this._logoArea.classList.remove(`${this._logoAreaClass}_visible`);
    };

    _hideNavigation() {
        this._switcherShowReveal();
        this._navigation.classList.remove(`${this._navigationClass}_visible`);        
        this._logoArea.classList.add(`${this._logoAreaClass}_visible`);
    };

    _toggleNavigation() {
        if (
            this._switcherButton.classList.contains(
                `${this._switcherButtonClass}_state_reveal`
            )
        ) {
            this._revealNavigation();
        } else {
            this._hideNavigation();
        };
    };

    setEventListeners() {
        this._switcherButton.addEventListener(
            "click", this._toggleNavigation.bind(this)
        );
        window.addEventListener(
            "resize", this.setState.bind(this)
        );        
    };
};
