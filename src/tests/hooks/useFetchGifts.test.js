import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifts } from "../../hooks/useFetchGifts"

describe('probando hook useFetchGifts', () => { 
    
    test('Debe regresar el estado inicial', () => { 
        
        const { result } = renderHook( () => useFetchGifts('Saitama') );
        // console.log( result );
        const { images, isLoading } = result.current;
        
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

     })

     test('debe retornar un arreglo de imagenes y isloading enn false', async() => { 
        
        const { result } = renderHook( () => useFetchGifts('One Punch man') );
        // console.log( result );
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;
        
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

      })

 })