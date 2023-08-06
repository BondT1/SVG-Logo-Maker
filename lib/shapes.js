class Shape {
    constructor() {
        this.colour = "";
    }
    Colour(colourChoice) {
        this.colour = colourChoice;
    }
}

class Circle extends Shape {
    render () {
        return`<circle cx="150" cy="100" r="80" fill="${this.colour}" />`;
    }
}