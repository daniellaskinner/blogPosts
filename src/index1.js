// Import the react and reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a functional react component
const App = () => {
    const buttonText = 'Click me';
    const labelText = 'Enter name:';

    return (
        <div>
            <label className="label" htmlFor="name">
                {labelText}
            </label>
            <input id="name" type="text"/>
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText}
            </button>
        </div>
    );
};
// Take the react component and show it on the screen
// ReactDOM.render(
//     <App/>,
//     document.querySelector('#root')
// );

// To enable fast refresh if code changes made to index.js
// if (module.hot) {
//     module.hot.accept();
// }