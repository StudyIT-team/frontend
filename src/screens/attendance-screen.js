import React from "react";
import ReactDataGrid from "react-data-grid";
import Container from '@material-ui/core/Container';

const columns = [
    { key: "name", name: "Student Name", editable: false },
    { key: "lab1", name: "Laborator 1", editable: true },
    { key: "lab2", name: "Laborator 2", editable: true },
    { key: "lab3", name: "Laborator 3", editable: true },
    { key: "lab4", name: "Laborator 4", editable: true },
    { key: "lab5", name: "Laborator 5", editable: true },
    { key: "lab6", name: "Laborator 6", editable: true },
    { key: "lab7", name: "Laborator 7", editable: true },
  ];
  
  const rows = [
    { name: "Achim Diana-Nicoleta", lab1: 10, lab2: 10 }
  ];

export default class AttendanceSheet extends React.Component {
    state = { rows };

    onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
        this.setState(state => {
            const rows = state.rows.slice();
            for (let i = fromRow; i <= toRow; i++) {
                rows[i] = { ...rows[i], ...updated };
            }
            return { rows };
        });
    };

    render() {
        return (
            <Container maxWidth="l">
                <ReactDataGrid
                columns = {columns}
                rowGetter={i => this.state.rows[i]}
                rowsCount={3}
                onGridRowsUpdated={this.onGridRowsUpdated}
                enableCellSelect={true}
                />
            </Container>
        );
    }
}
