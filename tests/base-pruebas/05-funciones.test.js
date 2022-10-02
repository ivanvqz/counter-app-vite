import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('pruenas en funciones', () => { 
    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(userTest).toEqual(user);
    })

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = 'Ivan';

        const userActivoTest = getUsuarioActivo(name);
        console.log(userActivoTest);

        expect(userActivoTest).toStrictEqual({
            uid: 'ABC567',
            username: name,
        })

    })
})