import React from 'react';
import Parent from './Parent';
import { render, fireEvent, act } from "@testing-library/react";


it('should render Parent component', () => {
    const { container } = render(<Parent />);
    expect(container).toMatchSnapshot();
})

describe('clickButton', () => {
    it("on click", () => {
        const { queryByTitle } = render(<Parent />);
        const btn = queryByTitle("parent_button");
        expect(btn.innerHTML).toBe("switch to memo")
        fireEvent.click(btn);
        expect(btn.innerHTML).toBe("switch to unmemo")
        
    })

    it('on input change', async () => {
        const onInputChange = jest.fn();
        const { queryByTitle } = render(<Parent />);
        await act(async () => {
            fireEvent.input(await queryByTitle("parent_input"))
        })
        const input = await queryByTitle("parent_input");
        
        expect(Parent).toMatchSnapshot();
    })
})