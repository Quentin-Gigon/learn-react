import React, {useState} from 'react';
import ComponentD from "./ComponentD";

function ComponentC() {
    return (
        <div>
            <div className="box">
                <h1>Component C</h1>
                <ComponentD />
            </div>
        </div>
    );
}

export default ComponentC;