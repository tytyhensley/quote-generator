import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component{

    state = { /* sets the state of the component to advice which is initially null*/
        advice: ''
    };

    componentDidMount() {  /*calls fetchAdvice method to run when component is being mounted*/
        this.fetchAdvice();
    }

    fetchAdvice = () => { 
        axios.get('https://api.adviceslip.com/advice') /*gets advice object from API*/
            .then((response) => {
                const { advice } = response.data.slip; /*separates the actual word advice from other object elements*/
                this.setState({advice: advice}); /*sets the state of component to advice, setState re renders the component*/
            })
            .catch ((error) => {
                console.log(error);
            });
    } 

    render() {
        const {advice} = this.state; /* sets a single variable advice to be this.state.advice so we don't have to right all that*/

        return (
            <div className='app'> {/*backgorund of app*/}
                <div className='card'> {/*center card*/}
                    <h1 className='heading'>{advice}</h1> {/*actual advice*/}
                    <button className='button' onClick={this.fetchAdvice}> {/*button for more advice*/}
                        <span>GIVE ME SOME MORE!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;