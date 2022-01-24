import {Component} from 'react';

class Table extends Component{

    render(){
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dabira</td>
                        <td>Doctor</td>
                    </tr>
                    <tr>
                        <td>Akiva</td>
                        <td>God's servent.</td>
                    </tr>
                    <tr>
                        <td>Amram</td>
                        <td>Business man</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Table;