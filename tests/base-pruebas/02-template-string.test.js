import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Pruebas en 02-template-sring', () => { 
    
    test('Get saludo debe retornar "hola ivan"', () => { 
        const name = 'Ivan'
        const message = getSaludo(name);
        expect(message).toBe(`Hola ${name}!!!!`)
    })

})