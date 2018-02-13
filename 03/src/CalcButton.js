import React, {Component} from "react"

export class CalcButton extends Component {

    constructor(props) {
        super();
        this.numberValue = props.value;
    }

    render() {
        return <button type="button" onClick={this.props.onClick}>{this.numberValue}</button>
    }

}