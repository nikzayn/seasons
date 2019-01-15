import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Season from './season';
import Spinner from './spinner';

class App extends Component{
    state = {
        lat: null,
        errorMessage: ''
    };
       
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }), 
            error => this.setState({ errorMessage: error.message })
        );
    }

    render(){

        if(this.state.lat && !this.state.errorMessage){
            return <Season season = {this.state.lat}/>
        }  

        if(!this.state.lat && this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>;
        }

        return <div><Spinner /></div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));