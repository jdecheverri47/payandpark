import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FormPage from '@/components/UI/FormPage';

describe('InputBox', () => {
  test('renders InputBox component', () => {
    render(
      <FormPage/>
    );
    const inputBoxElement = screen.getByText('Email');
    expect(inputBoxElement).toBeInTheDocument();
    const inputBoxElement2 = screen.getByText('City');
    expect(inputBoxElement2).toBeInTheDocument();
    const inputBoxElement3 = screen.getByText('Phone');
    expect(inputBoxElement3).toBeInTheDocument();
    const inputBoxElement4 = screen.getByText('Name');
    expect(inputBoxElement4).toBeInTheDocument();
    const inputBoxElement5 = screen.getByText('Company');
    expect(inputBoxElement5).toBeInTheDocument();
    const inputBoxElement6 = screen.getByText('Send & Continue');
    expect(inputBoxElement6).toBeInTheDocument();
  });
});
