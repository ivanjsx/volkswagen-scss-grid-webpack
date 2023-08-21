export default class Article {
    constructor(
        articleObject,
        {
            linkSelector,
            titleSelector,
            magazineSelector, 
            switcherButtonsContainerSelector,
            switcherButtonTemplateSelector, 
            switcherButtonElementClass,
        }
    ) {
        this._article = articleObject;
        this._linkElement = document.querySelector(linkSelector);
        this._titleElement = document.querySelector(titleSelector);
        this._magazineElement = this._titleElement.querySelector(magazineSelector);
        this._switcherButtonsContainer = document.querySelector(switcherButtonsContainerSelector);
        this._switcherButtonTemplate = this._switcherButtonsContainer.querySelector(switcherButtonTemplateSelector).content;
        this._switcherButtonElementClass = switcherButtonElementClass;
    };

    _createSwitcher() {
        this._switcherButtonElement = this._switcherButtonTemplate.querySelector(
            `.${this._switcherButtonElementClass}`
        ).cloneNode(true);
    };

    _replaceTextContent() {
        this._magazineElement.textContent = `${this._article.magazine}:`;
        const clonedMagazine = this._magazineElement.cloneNode(true);
        this._titleElement.textContent = "";
        this._titleElement.append(clonedMagazine);
        this._titleElement.append(` ${this._article.title}.`);        
    };

    _makeActive() {
        this._linkElement.href = this._article.link;
        this._replaceTextContent();

        const allActiveButtons = Array.from(
            document.querySelectorAll(
                `.${this._switcherButtonElementClass}_active`
            )
        );
        allActiveButtons.forEach(
            button => {
                button.classList.remove(`${this._switcherButtonElementClass}_active`);
            }
        );

        this._switcherButtonElement.classList.add(`${this._switcherButtonElementClass}_active`);
    };

    _setEventListeners() {
        this._switcherButtonElement.addEventListener(
            "click", this._makeActive.bind(this)
        );
    };

    generate() {
        this._createSwitcher();
        this._setEventListeners();
        this._makeActive();
        this._switcherButtonsContainer.prepend(this._switcherButtonElement);
    };
};
