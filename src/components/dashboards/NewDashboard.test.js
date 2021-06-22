import React from 'react';
import { render, screen } from "../../testUtils";
import NewsDashboard from './NewsDashboard';

describe('NewsDashboard test cases', () => {
  render(<NewsDashboard />)
  it('should render component', () => {
    expect(screen.getByTestId('typo-graphy')).toBeDefined()
  })
})