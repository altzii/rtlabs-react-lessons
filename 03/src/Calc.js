import React, {Component} from "react"
import {CalcButton} from "./CalcButton";
import {CalcInput} from "./CalcInput";

export class Calc extends Component {

    state = {
        displayValue: '',
    };

    render() {
        return <div>
            <h2>Homework for lesson 03</h2>
            <table>
                <tbody>

                <tr>
                    <td colSpan="4">
                        <CalcInput onChange={this.handleOnChange.bind(this)}
                                   value={this.state.displayValue}/>
                    </td>
                </tr>

                <tr>
                    <td><CalcButton value="1" onClick={() => this.handleNumberClick(1)}/></td>
                    <td><CalcButton value="2" onClick={() => this.handleNumberClick(2)}/></td>
                    <td><CalcButton value="3" onClick={() => this.handleNumberClick(3)}/></td>
                    <td><CalcButton value="4" onClick={() => this.handleNumberClick(4)}/></td>
                </tr>

                </tbody>
            </table>
        </div>
    }

    handleNumberClick(number) {
        this.setState({displayValue: this.state.displayValue + number});
    }

    handleOnChange = event => {
        this.setState({displayValue: event.target.value});
    }

}