import { Component } from "react";
import axios from 'axios';

export default class ExercisesList extends Component {
    constructor(props){
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {exercises : []};

    }
    
    componentDidMount(){
        axios.get('http://localhost:5000/exercises/')
            .then(response => {
                this.setState({exercises : response.data})
            })
            .catch((error)=>{
                console.log(error);
            })
    }
    
    deleteExercise(id){
        axios.delete('http://localhost:5000/exercises/'+id)
            .then(res => console.log(res.data));

        this.setState({
            exercises: this.state.exercises.filter(el => el._id !== id)
        })
    }
    
    
    
    
    
    
    render(){
        return(
            <div>
                <p>this is Exercise list</p>
            </div>
        )
    }
}