import React, { Component } from "react";
import FilmsPresentation from "./FilmsPresentation";
import { Films } from "../shared/ListOfFilms";

export default class Main extends Component {
    constructor(){
        super();
        this.state = {
            films: Films
        };
    }
    render(){
        return <FilmsPresentation film={this.state.films}/>
    }
}