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

    const rows = props.tableData.map((row, index) => {
        return(<tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
        </tr>);
    });

    return(
        <tbody>{rows}</tbody>
    );

};

class Table extends Component{

    render(){
        
        const {tableData} = this.props
        return (
            <table className='table'>
                <TableHeader />
                <TableBody tableData={tableData}/>
            </table>
        );
    }
}

export default Table;