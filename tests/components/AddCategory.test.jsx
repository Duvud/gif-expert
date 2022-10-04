import { fireEvent, render, screen } from "@testing-library/react"
import AddCategory from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => { 
    test('debe de cambiar el valor de la caja den texto', () => { 
        render(<AddCategory onNewCategoryTap={() => {}}/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'code'}});
        expect(input.value).toBe('code');
        //screen.debug();
     });

     test('Debe de llamar onNewCategor si el inut titnen un valor', () => { 
        render(<AddCategory onNewCategoryTap={() => {}}/>);

        const inputValue = 'code';
        // TODO: ???
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: 'code'}});
        fireEvent.submit(form);
        expect(input.value).toBe('');

      });
 });