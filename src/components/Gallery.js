export default class Gallery {
    constructor(
        pictureSourcesList,
        {
            pictureSelector, 
            switcherButtonClass
        }
    ) {
        this._picture = document.querySelector(pictureSelector);
        this._showNextButton = document.querySelector(`${switcherButtonClass}_direction_next`);
        this._showPreviousButton = document.querySelector(`${switcherButtonClass}_direction_previous`);
        this._pictureSourcesList = pictureSourcesList;
    };

    setInitialSourceIndex(value) {
        this._sourceIndex = value;
        this._setSource();
    };    

    _updateIndex() {
        this._sourceIndex = this._sourceIndex % this._pictureSourcesList.length;
    };

    _setSource() {
        this._updateIndex();
        if (
            this._sourceIndex == -1
        ) {
            this._picture.src = this._pictureSourcesList.slice(
                this._sourceIndex
            );
        } else {
            this._picture.src = this._pictureSourcesList.slice(
                this._sourceIndex, 
                this._sourceIndex + 1
            );
        };        
    }

    _upshiftSource() {
        this._sourceIndex += 1;
        this._setSource();
    };

    _downshiftSource() {
        this._sourceIndex -= 1;
        this._setSource();
    };

    setEventListeners() {
        this._showNextButton.addEventListener(
            "click", this._upshiftSource.bind(this)
        );
        this._showPreviousButton.addEventListener(
            "click", this._downshiftSource.bind(this)
        );        
    };
};
