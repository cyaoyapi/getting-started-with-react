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

const TableBody = (props) => {

    const {tableData, removeData} = props;

    const rows = tableData.map((row, index) => {
        return(<tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td><button className='btn btn-danger' onClick={() => removeData(index)}>Delete</button></td>
        </tr>);
    });

    return(
        <tbody>{rows}</tbody>
    );

};

class Table extends Component{

    render(){
        
        const {tableData, removeData} = this.props
        return (
            <table className='table'>
                <TableHeader />
                <TableBody tableData={tableData} removeData={removeData} />
            </table>
        );
    }
}

export default Table;