import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas sobre <GifGrid />', () => { 
    const category = 'code';
    const loadingText = 'Cargando...'

    
    test('debe de mostrar el loading inicialmente', () => {  
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect(screen.getByText(loadingText)).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('Debe de mostrar items cuando se carga useFetchGifs', () => { 
        const gifs = [
            {
                id:'1',
                title: 'ABC',
                url: 'url de ejemplo1'
            },
            {
                id:'2',
                title: 'ABCD',
                url: 'url de ejemplo2'
            },
            {
                id:'3',
                title: 'ABCE',
                url: 'url de ejemplo3'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(3);
     });
 });