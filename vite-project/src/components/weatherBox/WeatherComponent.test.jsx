import {render, screen} from '@testing-library/react'
import WeatherBox from './WeatherComponent'
import { expect, it, vitest } from 'vitest'
import { useSelector } from 'react-redux'

vitest.mock('react-redux');

it("Отображение заголовка в хедере", () => {
   useSelector.mockReturnValue('');
   render(<WeatherBox/>);
   const message = screen.queryByText(/прогноз на 5 дней/i);
   expect(message).toBeDefined();
})