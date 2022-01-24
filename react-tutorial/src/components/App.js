import React from 'react';
import Table from './Table';

class App extends React.Component{

    state = {

        tableData: [
            {
                name: "Dabira",
                job: "Doctor",
            },
            {
                name: "Akiva",
                job: "God's servent",
            },
            {
                name: "Amram",
                job: "Business man",
            },
    
        ]

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

    render(){

        const {tableData} = this.state;

        return (
            <div className='container'>
                <h1>Hello World!</h1>
                <Table tableData={tableData} removeData={this.removeData} />
            </div>
        );
    }
}

export default App;