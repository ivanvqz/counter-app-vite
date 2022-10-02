describe('Pruebas en <DemoComponent />', () => { 
    test('jeje mi primer testing', () => {
        //inicialización
        const message1 = 'Hola mundo'

        //estímulo
        const message2 = message1.trim();

        //observar el comportamiento
        // Es la condición para que pase la prueba
        expect( message1 ).toBe( message2 )
    })


})