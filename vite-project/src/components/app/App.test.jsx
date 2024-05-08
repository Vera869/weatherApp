import {render, screen} from '@testing-library/react'
import App from './App'
import { it, vitest } from 'vitest'
import { useSelector } from 'react-redux'

vitest.mock('react-redux');

it('renders headline', () => {
   useSelector.mockReturnValue('');
   render(<App />);

   screen.debug();

 });