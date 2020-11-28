import React from 'react';
import StarWarsCharacter from "./StarWarsCharacter";

export default class StarWarsPeople extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.loadData = this.loadData.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        let data = this.state.data;
        let renderedData = [];
        for(let i = 0; i < data.length; i++) {
            renderedData.push(<div>{data[i].name}</div>);
            renderedData.push(<div>{data[i].height}</div>);
            renderedData.push(<div>{data[i].mass}</div>);
        }
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Altura</th>
                        <th>Peso</th>
                        <th>Color de Pelo</th>
                        <th>Color de Piel</th>
                        <th>Color de Ojos</th>
                        <th>Fecha de nacimiento</th>
                        <th>Genero</th>
                    </tr>
                </thead>
                <body>
                    {this.state.data.map(character => {
                        return <StarWarsCharacter character={character} />
                    })}
                </body>
            </table>
        );

    }

    async loadData() {
        let response = await fetch("https://swapi.dev/api/people/");
        let parsedResponse = await response.json();
        this.setState({
            data: parsedResponse.results
        });
    }
}