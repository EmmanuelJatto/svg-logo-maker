class SVG {
    constructor() {
        this.text = '';
        this.shape = '';
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shape}${this.text}</svg>`;
    }

    setText(textInput, textColor) {
        this.text = `<text x="150" y="100" font-size="40" text-anchor="middle" fill="${textColor}">${textInput}</text>`;
    }

    setShape(shapeInput) {
        this.shape = shapeInput.render();
    }
}

module.exports = SVG;