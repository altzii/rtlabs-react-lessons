import React from "react";
import {render} from "react-dom";
import {Homework} from "./Homework";

render(
    <div>
        <Homework header="Qu'est-ce que le Lorem Ipsum?"
                  alertButtonText="Oops!"/>
    </div>,
    document.getElementById('root')
);