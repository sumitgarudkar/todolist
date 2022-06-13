import React, { useState } from 'react';

function InputArea(props) {
    const [item, setItem] = useState("");

    function handleChange(event) {
        const newVal = event.target.value;
        setItem(newVal);
    }

    return (
        <div className="form">
            <input type="text" value={item} onChange={handleChange} />

            <button onClick={() => {
                props.addItem(item);
                setItem("");
            }}>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;