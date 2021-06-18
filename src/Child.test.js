import React from 'react';
import Child from './Child';
import { render, fireEvent, act } from "@testing-library/react";


it('should render Child component', () => {
    const { container } = render(<Child />);
    expect(container).toMatchSnapshot();
})

// describe('clickButton', () => {
//     it("on click", () => {
//         const { queryByTitle } = render(<Child />);
//         const btn = queryByTitle("parent_button");
//         expect(btn.innerHTML).toBe("switch to memo")
//         fireEvent.click(btn);
//         expect(btn.innerHTML).toBe("switch to unmemo")
        
//     })

//     it('on input change', async () => {
//         const onInputChange = jest.fn();
//         const { queryByTitle } = render(<Child />);
//         await act(async () => {
//             fireEvent.input(await queryByTitle("parent_input"))
//         })
//         const input = await queryByTitle("parent_input");
        
//         expect(Child).toMatchSnapshot();
//     })
// })