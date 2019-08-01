import React from "react";

const AppView = (props) => {
    const { counter, incrementCounter, decrementCounter, handleChange, amount } = props;

    return (
    <div className="App">
        <header className="App-header">
            Counter: {counter}
            <form>
                <label>Type in amount here:</label>
                <input name="amount" type="number" onChange={handleChange}></input>
            </form>
            <button onClick={() => incrementCounter(Number(amount))}>Plus</button>
            <button onClick={() => decrementCounter(Number(amount))}>Minus</button>
        </header>
    </div>
    )
}

export default AppView;