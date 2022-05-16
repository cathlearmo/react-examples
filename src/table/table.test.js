import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Table } from "./tableMap.jsx";
import { doSort } from "./tableMap.jsx";

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

//Sort test
let sortValues = {
    Id: {
        value: "id",
        direction: "down"
    },
    Name: {
        value: "name",
        direction: "down"
    },
    Surname: {
        value: "surname",
        direction: "down"
    }
};
const testAllData = [
    {id: 507, name: 'Tiffany', surname: 'MacFaell'},
    {id: 881, name: 'Abagael', surname: 'Seely'},
    {id: 792, name: 'Aarika', surname: 'Burnitt'},
    {id: 770, name: 'Zen', surname: 'McCleary'},
    {id: 655, name: 'Zebedee', surname: 'Bogges'}
];

it("can sort data by the Name header key", () => {
    let headerKey = "Name";
    //sort by first name
    let {data} = doSort(headerKey, testAllData, sortValues);
    expect(data[0].name).toEqual('Aarika');
    expect(data[4].name).toEqual('Zen');

});

it("can sort data by the Id header key", () => {
    let headerKey = "Id";
    let {data} = doSort(headerKey, testAllData, sortValues);
    expect(data[0].id).toEqual(507);
    expect(data[4].id).toEqual(881);
});

it("can sort data by the Surname header key", () => {
    let headerKey = "Surname";
    let {data} = doSort(headerKey, testAllData, sortValues);
    expect(data[0].surname).toEqual('Bogges');
    expect(data[4].surname).toEqual('Seely');
});

it("can sort data by the Name header key in opposite direction", () => {
    let headerKey = "Name";
    //sort by first name - descending
    let {data} = doSort(headerKey, testAllData, sortValues);
    expect(data[0].name).toEqual('Zen');
    expect(data[4].name).toEqual('Aarika');
});

it("can sort data by the Id header key in opposite direction", () => {
    let headerKey = "Id";
    //sort by first name - descending
    let {data} = doSort(headerKey, testAllData, sortValues);
    expect(data[0].id).toEqual(881);
    expect(data[4].id).toEqual(507);
});

it("can sort data by the Surname header key in opposite direction", () => {
    let headerKey = "Surname";
    let {data} = doSort(headerKey, testAllData, sortValues);
    expect(data[0].surname).toEqual('Seely');
    expect(data[4].surname).toEqual('Bogges');
});
