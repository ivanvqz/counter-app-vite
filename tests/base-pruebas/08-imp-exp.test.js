import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from "../../src/data/heroes"

describe('pruebas en import-text', () => { 


    test('getHeroeById debe de regresar un string', () => { 
        const id = 1

        const heroe = getHeroeById( id )
        expect( heroe ).toEqual( { id: 1, name: 'Batman', owner: 'DC' } );
    })

    test('getHeroeById debe de regresar undefined si no existe el id', () => { 
        const id = 100

        const heroe = getHeroeById( id )
        expect( heroe ).toBeFalsy();//undefined
    })


    test('getHeroesBy Owner debe regresar heroes de DC', () => { 
        const owner = 'DC'// se define el owner

        //se crea una segunda variable para guardar el resultado de la funcion
        const heroes = getHeroesByOwner( owner )

        //se crea un array con los heroes de DC
        expect( heroes.length ).toBe( 3 )//se espera que el array tenga 3 elementos
        expect( heroes ).toEqual( [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ] )
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )
        
    })

    test('getHeroesBy Owner debe regresar heroes de Marvel', () => { 
        const owner = 'Marvel'// se define el owner

        //se crea una segunda variable para guardar el resultado de la funcion
        const heroes = getHeroesByOwner( owner )

        //se crea un array con los heroes de DC
        expect( heroes.length ).toBe( 2 )//se espera que el array tenga 3 elementos  
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ) )
        
        console.log( heroes )
    })

})