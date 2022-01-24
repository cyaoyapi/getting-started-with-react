import React from 'react';
import Table from './Table';
import Form from './Form';

class App extends React.Component{

    state = {

        tableData: []

    }

    removeData = (indexToDelete) => {
        const {tableData} = this.state;
        this.setState(
            {
                tableData: tableData.filter((currentRow, currentRowIndex) => {
                    return currentRowIndex !== indexToDelete;
                }),
            }
        );

    }

    handleSubmit = (submitedData) => {
        this.setState({
            tableData: [...this.state.tableData, submitedData]
        });
    }

    render(){

        const {tableData} = this.state;

        return (
            <div className='container'>
                <h1>Hello World!</h1>
                <Table tableData={tableData} removeData={this.removeData} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;