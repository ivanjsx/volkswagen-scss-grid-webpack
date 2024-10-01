export default class Icon {
    constructor() {
        this._link = document.createElement('link');
    };
    
    setSource(source) {
        this._link.rel = "icon";
        this._link.href = source;
        this._link.type = "image/png";    
        document.head.appendChild(this._link);
    };
};
