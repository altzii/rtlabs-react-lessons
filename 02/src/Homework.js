import React, {Component} from "react"
import {Div} from './Div'
import {A} from './A'
import {Button} from './Button'
import {H1} from './H1'
import {P} from './P'

export class Homework extends Component {

    render() {
        return (
            <Div>
                <H1>{this.props.header}</H1>
                <P>Le Lorem Ipsum est <A link="https://ru.wiktionary.org/wiki/simplement">simplement</A> du faux
                    texte employé dans la com
                    position et la mise en page avant impression.</P>
                <Button text={this.props.alertButtonText} func={click}/>
            </Div>
        )
    }

}

function click() {
    alert(this.props.text);
}