import {Component} from 'react';

class Form extends Component{

    initialState = {
        name: '',
        job: '',
    };
    state = this.initialState;

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render(){
        const {name, job} = this.state;

        return(
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        className="form-control"
                        value={name} 
                        onChange={this.handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="job" className="form-label">Job</label>
                    <input 
                        type="text" 
                        id="job" 
                        name="job" 
                        className="form-control" 
                        value={job} 
                        onChange = {this.handleChange} />
                </div>       
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={this.submitForm}>Submit</button>     
            </form>
        );
    }


}

export default Form;