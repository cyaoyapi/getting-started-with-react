import {Component} from 'react';

const TableHeader = function(){
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
};

const TableBody = () => {

    return(
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
    );

};

class Table extends Component{

    render(){
        return (
            <table className='table'>
                <TableHeader />
                <TableBody />
            </table>
        );
    }
}

export default Table;