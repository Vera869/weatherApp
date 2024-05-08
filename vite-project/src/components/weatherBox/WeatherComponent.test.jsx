import {render, screen} from '@testing-library/react'
import WeatherBox from './WeatherComponent'
import { expect, it, vitest } from 'vitest'
import { useSelector } from 'react-redux'

vitest.mock('react-redux');

it("Отображение заголовка в хедере", () => {
   useSelector.mockReturnValue('');
   render(<WeatherBox/>);
   const message = screen.queryByText(/У природы нет пдохой погоды!/i);
   expect(message).toBeDefined();
})