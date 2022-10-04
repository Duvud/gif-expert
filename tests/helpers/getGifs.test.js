import { getGifs } from "../../src/helpers/getGifs";

describe('Pruebas sobre la función getGifs()', () => {
    test('debe devolver un vector de gifs', async () => {
        const gifs = await getGifs('coffee');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String), 
            title: expect.any(String), 
            url: expect.any(String)
        });
    });
});