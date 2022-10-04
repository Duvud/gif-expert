import { render, screen } from "@testing-library/react";
import GifGridItem from "../../src/components/GifGridItem";

describe('Tests sobre <GifGridItem />', () => { 

    const defaultTestTitle = 'default title';
    const defaultTestUrl = 'http://localhost/default%20url';


    test('Debe de coincidir con el snapshot', () => { 
        const {container} = render(
            <GifGridItem 
                title={defaultTestTitle}
                url={defaultTestUrl}
            />
        );
        expect(container).toMatchSnapshot();
     });

     test('Debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render(
            <GifGridItem 
                title={defaultTestTitle}
                url={defaultTestUrl}
            />
        );
        const testImg = screen.getByRole('img');
        expect(testImg.src).toBe(defaultTestUrl);
        expect(testImg.alt).toBe(defaultTestTitle);
      });

      test('Debe de mostrar el título del componente', () => {
        render(
            <GifGridItem 
                title={defaultTestTitle}
                url={defaultTestUrl}
            />
        );
        expect(screen.getByText(defaultTestTitle)).toBeTruthy();
      })
 });