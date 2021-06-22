import { fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "../../testUtils";
import { AuthContext } from './Auth';
import Login from "./Login.js";


describe('Login Unit Tests', () => {
  window.alert = jest.fn()
  jest.mock('firebase/app', () => ({
    auth: {
      GoogleAuthProvider: () => {
        this.name = 'google'
      }
    }
  }))

  beforeEach(() => {
    render(
      <AuthContext.Provider value={{currentUser: {name: 'test'}}}>
        <Router>
          <Login />
        </Router>
      </AuthContext.Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks()
  })
  
  it("Should render Auth Component", () => {
    expect(screen.getByText('SZEMA')).toBeTruthy()
  });

  it('should handle login', () => {
    const loginButton = screen.getByTitle('login-button');

    fireEvent(loginButton, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));

    // expect()
  })
});