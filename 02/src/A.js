import React, {Component} from "react"

export class A extends Component {

    render() {
        return <a href={this.props.link}>{this.props.children}</a>
    }

}