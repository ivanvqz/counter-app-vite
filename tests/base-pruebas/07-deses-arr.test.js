import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('pruebas en 07-deses-arr', () => { 
    test('should string and number', () => { 
        const [ letters, numbers ] = retornaArreglo(); // ['ABC', 123]
        
        expect( letters ).toBe('ABC');
        expect( numbers ).toBe(123);
        console.log( typeof letters );
        console.log( typeof numbers );

        expect( typeof letters ).toBe('string');
        expect( typeof numbers ).toBe('number');

        //añade más flexibilidad a la prueba
        expect( letters ).toEqual( expect.any(String) );
        expect( numbers ).toEqual( expect.any(Number) );
    })
})