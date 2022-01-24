import React from 'react';
import Table from './Table';

class App extends React.Component{

    render(){

        const tableData = [
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
        return (
            <div className='container'>
                <h1>Hello World!</h1>
                <Table tableData={tableData} />
            </div>
        );
    }
}

export default App;