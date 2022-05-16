import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchResults } from "./searchResults.jsx";

it("renders without data", () => {
    render(<SearchResults data={[]} />);
    const list = screen.queryByRole('list');
    expect(list).toBeInTheDocument();
});


it("renders results with data and no pagination", () => {
    const testData = [
        {
            "title": "Sky WiFi",
            "url": "https://www.sky.com/help/articles/sky-wifi-help",
            "description": "Help with Sky WiFi."
        },
        {
            "title": "WiFi issues and smart thermostats (Hive, Google nest, etc)",
            "url": "https://www.sky.com/help/articles/wifi-issues-and-smart-thermostats",
            "description": "Smart thermostats are connected to your home broadband, but if there’s a broadband outage or if you have a WiFi or connection problem, you can still manually adjust your heating using your thermostat."
        }
    ];

    render(<SearchResults data={testData} />);
    const list = screen.queryByRole('list');
    const listItem = screen.queryAllByRole('listitem');
    const link = screen.queryAllByRole('link');
    expect(list).toBeInTheDocument();
    expect(listItem).toHaveLength(2);
    expect(link).toHaveLength(2);
    expect(link[0]).toHaveTextContent(/^Sky WiFi$/);
    expect(link[1]).toHaveTextContent("WiFi issues and smart thermostats (Hive, Google nest, etc)");
    expect(listItem[0]).toHaveTextContent("Help with Sky WiFi.");
    expect(listItem[1]).toHaveTextContent("Smart thermostats are connected to your home broadband, but if there’s a broadband outage or if you have a WiFi or connection problem, you can still manually adjust your heating using your thermostat.");
});

it("renders results with pagination", async () => {
    const user = userEvent.setup();
    const testData = [
        {
            "title": "Sky WiFi",
            "url": "https://www.sky.com/help/articles/sky-wifi-help",
            "description": "Help with Sky WiFi."
        },
        {
            "title": "WiFi issues and smart thermostats (Hive, Google nest, etc)",
            "url": "https://www.sky.com/help/articles/wifi-issues-and-smart-thermostats",
            "description": "Smart thermostats are connected to your home broadband, but if there’s a broadband outage or if you have a WiFi or connection problem, you can still manually adjust your heating using your thermostat."
        },
        {
            "title": "Test 3",
            "url": "https://www.sky.com/help/articles/sky-wifi-help",
            "description": "Help test 3."
        },
        {
            "title": "Test 4",
            "url": "https://www.sky.com/help/articles/wifi-issues-and-smart-thermostats",
            "description": "Help test 4."        
        },
        {
            "title": "Test 5",
            "url": "https://www.sky.com/help/articles/sky-wifi-help",
            "description": "Help test 5."
        },
        {
            "title": "Test 6",
            "url": "https://www.sky.com/help/articles/wifi-issues-and-smart-thermostats",
            "description": "Help test 6."        
        },
        {
            "title": "Test 6",
            "url": "https://www.sky.com/help/articles/sky-wifi-help",
            "description": "Help test 6."
        },
        {
            "title": "Test 7",
            "url": "https://www.sky.com/help/articles/wifi-issues-and-smart-thermostats",
            "description": "Help test 7."        
        },
    ];

    render(<SearchResults data={testData} />);
    const list = screen.queryAllByRole('list');
    expect(list).toHaveLength(2);
    const paginationItems = document.getElementsByClassName('pagination-item');
    expect(paginationItems).toHaveLength(4);
    expect(paginationItems[0]).toHaveClass('disabled');
    expect(paginationItems[1]).toHaveClass('selected');
    expect(paginationItems[2]).not.toHaveClass('selected');
    expect(paginationItems[3]).not.toHaveClass('disabled');
    //clicking second page changes class applied
    await user.click(paginationItems[2]);
    expect(paginationItems[0]).not.toHaveClass('disabled');
    expect(paginationItems[1]).not.toHaveClass('selected');
    expect(paginationItems[2]).toHaveClass('selected');
    expect(paginationItems[3]).toHaveClass('disabled');
});