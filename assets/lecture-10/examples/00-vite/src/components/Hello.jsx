import { useState } from 'react';

import classes from './Hello.module.css'

const { header, button } = classes;

function Hello({ name }) {
    const [counter, setCounter] = useState(0);

    return <>
        <h1 className={header}>Hello, {name}!</h1>
        <p>Counter: {counter}</p>
        <button
            style={{
                color: 'whitesmoke',
                backgroundColor: 'palevioletred',
            }}
            onClick={
                () => setCounter((c) => c + 1)
            }>Click me</button>
    </>
}

export default Hello
