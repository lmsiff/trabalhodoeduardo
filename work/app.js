class ColorChanger {
    constructor(cssVariable) {
        this.cssVariable = cssVariable;
    }

    changeColor(newColor) {
        document.documentElement.style.setProperty(this.cssVariable, newColor);
    }
}

const colorChanger = new ColorChanger('--color-primary');