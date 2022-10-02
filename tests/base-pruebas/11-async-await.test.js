import { getImagen } from '../../src/base-pruebas/11-async-await'

describe('pruebas sobre el 11-async-await', () => {

    test('getImagen debe devolver una url', async () => { 
        const url = await getImagen();

        expect( typeof url ).toBe('string');
    })

    // test('getImagen() debe retornar la url de una imagen', async () => {
    //     const url = await getImagen();
    //     await fetch(url)
    //         .then(response => {
    //             expect(response.status).toBe(200);
    //         })
    //         .catch(() => {
    //             throw new Error('No se generó una imagen')
    //         })
    // })
})