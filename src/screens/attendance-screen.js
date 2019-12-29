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
  
  const rows_grades = [
    { name: "Achim Diana-Nicoleta", lab1: 10, lab2: 10 },
    { name: "Ardelian Alexandra Ioana", lab1: 10, lab2: 10 },
    { name: "Cardaș Andra Mălina", lab1: 10, lab2: 10, lab5: 10 },
    { name: "Ciocea Christine-Gerlinde", lab1: 10, lab2: 10 },
    { name: "Truța Patricia Georgiana", lab1: 10, lab2: 10 },
  ];

  const rows_attendance = [
    { name: "Achim Diana-Nicoleta", lab1: "Present", lab2: "Present", lab3: "Present", lab4: "Present", lab5: "Present", lab6: "Present", lab7: "Present" },
    { name: "Ardelian Alexandra Ioana", lab1: "Present", lab2: "Present", lab3: "Present", lab4: "Present", lab5: "Present", lab6: "Present", lab7: "Present" },
    { name: "Cardaș Andra Mălina", lab1: "Present", lab2: "Present", lab3: "Present", lab4: "Present", lab5: "Present", lab6: "Present", lab7: "Present" },
    { name: "Ciocea Christine-Gerlinde", lab1: "Present", lab2: "Absent", lab3: "Present", lab4: "Present", lab5: "Absent", lab6: "Present", lab7: "Present" },
    { name: "Truța Patricia Georgiana",lab1: "Present", lab2: "Present", lab3: "Present", lab4: "Present", lab5: "Present", lab6: "Present", lab7: "Absent"},
  ]

export default class AttendanceSheet extends React.Component {
    state = { rows_grades, rows_attendance };

    onGridRowsUpdatedGrades = ({ fromRow, toRow, updated }) => {
        this.setState(state => {
            const rows = state.rows_grades.slice();
            for (let i = fromRow; i <= toRow; i++) {
                rows_grades[i] = { ...rows_grades[i], ...updated };
            }
            return { rows_grades };
        });
    };

    onGridRowsUpdatedAttendance = ({ fromRow, toRow, updated }) => {
        this.setState(state => {
            const rows = state.rows_attendance.slice();
            for (let i = fromRow; i <= toRow; i++) {
                rows_attendance[i] = { ...rows_attendance[i], ...updated };
            }
            return { rows_attendance };
        });
    };

    render() {
        return (
            <Container maxWidth="l">
                <ReactDataGrid
                    columns = {columns}
                    rowGetter={i => this.state.rows_attendance[i]}
                    rowsCount={this.state.rows_attendance.length}
                    onGridRowsUpdated={this.onGridRowsUpdatedAttendance}
                    enableCellSelect={true}
                />

                <ReactDataGrid
                    columns = {columns}
                    rowGetter={i => this.state.rows_grades[i]}
                    rowsCount={this.state.rows_grades.length}
                    onGridRowsUpdated={this.onGridRowsUpdatedGrades}
                    enableCellSelect={true}
                />
            </Container>
        );
    }
}
