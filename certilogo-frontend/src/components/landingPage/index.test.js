import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LeadForm from './index';

test('inputs should be initially empty', () => {
  render(<LeadForm />);
  expect(screen.getByPlaceholderText('Email')).toHaveValue('');
});

test('allows user to enter email', () => {
  render(<LeadForm />);
  const input = screen.getByPlaceholderText('Email');
  fireEvent.change(input, { target: { value: 'test@example.com' } });
  expect(input).toHaveValue('test@example.com');
});


