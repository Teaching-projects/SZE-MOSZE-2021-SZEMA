import React from 'react';
import { render, screen } from "../../testUtils";
import MainDashboard from './MainDashboard';

describe('MainDashboard test cases', () => {
  render(<MainDashboard />)
  it('should render component', () => {
    expect(screen.getByTestId('question-base')).toBeDefined()
  })
})