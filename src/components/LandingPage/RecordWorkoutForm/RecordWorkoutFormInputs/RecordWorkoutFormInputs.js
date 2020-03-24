import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../../../redux/mapStoreToProps';

class RecordWorkoutFormInputs extends Component {
    state = {
        reps: '',
        weight: '',
        addSetIsClicked: false,
    }
    
    handleInputChange = key => event => {
        this.setState({
          ...this.state,
          [key]: event.target.value,
        },
        () => console.log(this.state)
        );
      };
    
    render() {
        
        return (
            <div className="post-workout-form-inputs">
                <label htmlFor="reps-input">Reps</label>
                <input 
                    type="number"
                    className="reps-input"
                    onChange={this.handleInputChange('reps')}
                    value={this.state.reps}
                >
                    
                </input>
                <br/>
                <label htmlFor="weight-input">Weight</label>
                <input 
                    type="number"
                    className="weight-input"
                    onChange={this.handleInputChange('weight')} 
                    value={this.state.weight}
                >
                </input>
                <button
                    onClick={()=>{this.setState({...this.state, addSetIsClicked: !this.state.addSetIsClicked})}}
                >Add Set</button>
                {/* {this.state.addSetIsClicked ?  
                        <newRow 
                            exerciseName={exerciseName}
                            exerciseDescription={exerciseDescription} 
                        /> : false} */}
            </div>
        )
    }
}

export default connect(mapStoreToProps)(RecordWorkoutFormInputs);