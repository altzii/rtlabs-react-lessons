import React, {Component} from "react"

export class H1 extends Component {

    render() {
        return <h1>{this.props.children.toUpperCase()}</h1>
    }

}