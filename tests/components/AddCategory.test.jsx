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

     test('Debe de llamar onNewCategor si el input tiene un valor', () => { 
        const onNewCategoryTap = jest.fn();
        const inputValue = 'code';

        render(<AddCategory onNewCategoryTap={onNewCategoryTap}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');

        expect(onNewCategoryTap).toHaveBeenCalled();
        expect(onNewCategoryTap).toHaveBeenCalledTimes(1);
        expect(onNewCategoryTap).toHaveBeenCalledWith(inputValue);


      });

      test('No debe de llamar onNewCategory si el input está vacío', () => { 
        const onNewCategoryTap = jest.fn();
        const inputValue = '';

        render(<AddCategory onNewCategoryTap={onNewCategoryTap}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(onNewCategoryTap).not.toHaveBeenCalled();
        //expect(onNewCategoryTap).toHaveBeenCalledTimes(0);
      });
 });