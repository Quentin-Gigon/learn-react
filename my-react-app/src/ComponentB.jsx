import React, {useState} from 'react';
import ComponentC from "./ComponentC";

function ComponentB() {
    return (
        <div>
            <div className="box">
                <h1>Component B</h1>
                <ComponentC />
            </div>
        </div>
    );
}

export default ComponentB;