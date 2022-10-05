import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Probando el custom hook useFetchGifs()', () => { 
    const category = 'code';
    test('Debe de devolver el estado inicial', () => { 
        const {result} = renderHook(() => useFetchGifs(category));
        const {images, isLoading} = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });
    
    test('Debe de devolver un array lleno y !isLoading', async () => { 
        const {result} = renderHook(() => useFetchGifs(category));
        await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0));

        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

     });
 });