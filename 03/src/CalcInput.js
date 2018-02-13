import React, {Component} from "react"

export class CalcInput extends Component {

    render() {
        return <input type="number" value={this.props.value} onChange={this.props.onChange}
                      styles="{{textAlign : 'right'}}"/>
    }

}