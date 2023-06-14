import React from "react";
import { Films } from "../shared/ListOfFilms";

export default function FilmsPresentation({films}) {
    return(
        <div className="container">
            {Films.map((films) => (
                <div className="column">
                    <div className="card">
                        <img src={Films.image}/>
                        <h3>{Films.title}</h3>
                        <p>{Films.year}</p>
                        <p>{Films.nation}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}