import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('pruebas en GifExpertApp', () => {  

    const testInputValue = 'code';

    test('Debe de aparecer el título de la categoría después de hacer submit', () => {  
        render(<GifExpertApp />);

        const categoryInput = screen.getByRole('textbox');
        const categoryForm = screen.getByRole('form');

        fireEvent.input(categoryInput, {target: {value: testInputValue}});
        fireEvent.submit(categoryForm);

        expect(screen.getByText(testInputValue)).toBeTruthy();
        //screen.debug();
    });


    test('No deben de repetirse los títulos', () => {  
        render(<GifExpertApp />);

        const categoryInput = screen.getByRole('textbox');
        const categoryForm = screen.getByRole('form');

        fireEvent.input(categoryInput, {target: {value: testInputValue}});
        fireEvent.submit(categoryForm);
        fireEvent.input(categoryInput, {target: {value: testInputValue}});
        fireEvent.submit(categoryForm);

        expect(screen.getAllByText(testInputValue).length).toBe(1);
        //screen.debug();
    });

    test('No deben de aparecer categorías vacías', () => {  
        render(<GifExpertApp />);

        const categoryInput = screen.getByRole('textbox');
        const categoryForm = screen.getByRole('form');

        fireEvent.input(categoryInput, {target: {value: testInputValue}});
        fireEvent.submit(categoryForm);
        fireEvent.input(categoryInput, {target: {value: ''}});
        fireEvent.submit(categoryForm);
        
        expect(screen.getAllByText(testInputValue).length).toBe(1);
        //screen.debug();
    });

});