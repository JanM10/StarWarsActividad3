import React from 'react'

const StarWarsCharacter = (props) => {
    return (
        <tr>
            <td>{props.character.name}</td>
            <td>{props.character.height}</td>
            <td>{props.character.mass}</td>
            <td>{props.character.hair_color}</td>
            <td>{props.character.skin_color}</td>
            <td>{props.character.eye_color}</td>
            <td>{props.character.birth_year}</td>
            <td>{props.character.gender}</td>
        </tr>
    );
}

export default StarWarsCharacter;