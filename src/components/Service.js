import React, { Component } from 'react'
import axios from 'axios';
import Dialog from './Dialog';

class Service extends Component {

    state = {
        feelings: [],
        id: null,
        imgUrl: "",
        desc: ""
    }

    componentWillMount() {
        axios.get('http://159.89.143.117:3001/raccoon/feelings')
        .then(response => {
            console.log(response.data.feelings);
            this.setState({feelings: response.data.feelings});
        })
        .catch(error => {console.log("falla "+ error)});
    }

    render() {
        const {feelings} = this.state;
        const feels = feelings.map((feel,i) => (
            <tr key={i}>
                <td>{feel.id}</td>
                <td>{feel.desc}</td>
                <td>
                    <button type="button" 
                            className="btn mr-2 btn-sm text-light" 
                            data-toggle="modal" 
                            data-target="#myModal" onClick={() => this.setState({id:feel.id, imgUrl:feel.imgUrl, desc: feel.desc})}>
                            Detalle
                    </button>
                    <button type="button" disabled className="btn text-light btn-sm disabled">
                        Elegir
                    </button>
                </td>
            </tr>));
        
        return (
            <div className="row d-flex justify-content-center">
                <table className="table col-md-6 bg-light">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Me siento...</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {feels}
                    </tbody>
                </table>
                <Dialog index={this.state.id} desc={this.state.desc} imgUrl={this.state.imgUrl}/>
            </div>
        )
    }
}

export default Service
