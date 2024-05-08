import {render, screen} from '@testing-library/react'
import HeaderBox from './HeaderComponent'
import { expect, it } from 'vitest'

it("Отображение заголовка в хедере", () => {
   render(<HeaderBox/>);
   const message = screen.queryByText(/У природы нет пдохой погоды!/i);
   expect(message).toBeDefined();
})
