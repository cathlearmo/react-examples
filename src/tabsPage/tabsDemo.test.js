import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TabDemo } from "./tabDemo.jsx";

it("it shows 3 tabs the Product tab is the current one", () => {
    render(<TabDemo />);
    const currentTab = document.getElementsByClassName('current');
    expect(currentTab[0]).toHaveTextContent('Product');
    const tabOne = screen.getAllByText('Product');
    expect(tabOne).toHaveLength(1);
    const tabTwo = screen.getAllByText('Details');
    expect(tabTwo).toHaveLength(1);
    const tabThree = screen.getAllByText('Reviews');
    expect(tabThree).toHaveLength(1);
});

it("Clicking the second tab makes it current", async () => {
    const user = userEvent.setup();
    render(<TabDemo />);
    const detailsTab = screen.getByText('Details');
    await user.click(detailsTab);
    expect(detailsTab).toHaveClass('current');
});