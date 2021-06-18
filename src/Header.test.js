import React from 'react';
import Header from './Header';
import { render, fireEvent, act } from "@testing-library/react";


it('should render Header component', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
})