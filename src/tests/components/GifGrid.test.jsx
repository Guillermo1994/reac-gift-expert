import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifts } from "../../hooks/useFetchGifts";


jest.mock('../../hooks/useFetchGifts');

describe('Probar componeten <GifGrid />', () => { 

    const category = 'One Punch';

    test('debe mostrar el loading inicialmente', () => { 
        
        useFetchGifts.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={ category }/> );
        expect( screen.getByText('cargando...') );
        expect( screen.getByText( category ) );

     });

     test('Debe mostrar las images con el useFetchGifs', () => { 

        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/saitama.com'
        },
        {
            id: '123',
            title: 'Goku',
            url: 'https://localhost/goku.com'
        }];
        
        useFetchGifts.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render( <GifGrid category={ category }/> );
        // screen.debug();
        expect( screen.getAllByRole('img').length ).toBe(2);

      })
 })