import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchQuery } from "./search.jsx";

it("it shows the search input and button", () => {
    render(<SearchQuery />);
    const placeholder = screen.getByPlaceholderText('Enter a search phrase...');
    const submit = screen.getByRole('button');
    const list = screen.queryAllByRole('list');
    expect(placeholder).toBeInTheDocument();
    expect(submit).toBeInTheDocument();
    expect(list).toHaveLength(0);
});

it("can enter text", async () => {
    const user = userEvent.setup();
    render(<SearchQuery />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'Test');
    expect(input).toHaveValue('Test');
});