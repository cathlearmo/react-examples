import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from "./tableMap.jsx";

it("renders without data", () => {
    render(<Table />);
    const noTable = screen.queryByRole('table');
    expect(noTable).toEqual(null);
});

it("renders with data", () => {
    const tableData = [{"id": 1, "name": "Test"}];
    render(<Table tableData={tableData}/>);
    const testTable = screen.getByRole('table');
    expect(testTable).toBeInTheDocument();
    const idHeader = screen.getByLabelText('Id');
    expect(idHeader).toBeInTheDocument();
    const nameHeader = screen.getByLabelText('Name');
    expect(nameHeader).toBeInTheDocument();
    const dataId = screen.getByLabelText(1);
    expect(dataId).toBeInTheDocument();
    const dataName = screen.getByLabelText('Test');
    expect(dataName).toBeInTheDocument();
});