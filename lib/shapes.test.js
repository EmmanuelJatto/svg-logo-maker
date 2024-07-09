const { Triangle, Square, Circle } = require('./shapes');

describe('Triangle Test', () => {
    it('test if a triangle has a blue background', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

describe('Circle Test', () => {
    it('test if a circle has a green background', () => {
        const shape = new Circle();
        shape.setColor('green');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
    });
});

describe('Square Test', () => {
    it('test if a square has red background', () => {
        const shape = new Square();
        shape.setColor('red');
        expect(shape.render()).toEqual('<rect x="90" y="40" width="115" height="115" fill="red" />');
    })
})