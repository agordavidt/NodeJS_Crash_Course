import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello React!</h1>

class Car {
    constructor(name) {
        this.brand = name;
    }
    present() {
        return 'I have a ' + this.brand;
    }
}

class Model extends Car {
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model
    }
}
const mycar = new Model("Ford", "Mustang");
mycar.show(); 

const myelement = (
    <table>
        <tr>
            <th>Name</th>
            <th>Nationality</th>
            <th>Genre</th>
        </tr>
        <tr>
            <td>Chris Brown</td>
            <td>American</td>
            <td>R&B</td>
        </tr>
        <tr>
            <td>Jarmaine Cole</td>
            <td>Canadian</td>
            <td>Hip Hop</td>
        </tr>
    </table>
);

const mylife (
    <p>I started up learning web development, started with html css and javascript, then moved
        to python and then mySQL for database mangement
    </p>
);

ReactDOM.render(mylife, document.getElementById('root'));
ReactDOM.render(myelement, document.getElementById('root'));

ReactDOM.render(<p>Hello</p>, document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);

