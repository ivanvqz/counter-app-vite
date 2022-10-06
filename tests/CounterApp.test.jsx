const { render, screen, fireEvent } = require("@testing-library/react")
const { CounterApp } = require("../src/CounterApp")


describe('Pruebas en el <CounterApp/>', () => { 
    const initialValue = 20

    test('debe de hacer match con el snapshot', () => { 
        const { container } = render( <CounterApp value={ initialValue }/> )
        expect( container ).toMatchSnapshot()
    })

    test('Debe mostrar el valor inicual de 100', () => { 
        render( <CounterApp value={ 100 }/> )
        //se espera que el elemento con el id counter tenga un valor de 100
        expect( screen.getByText(100)).toBeTruthy()
    }) 

    test('Debe de incrementar el botón +1', () => { 
        const { container } = render( <CounterApp value={ initialValue }/> )
        //fireEvent: es un método que nos permite disparar eventos en el DOM
        fireEvent.click( screen.getByText('+1') )

        expect( screen.getByText( '21' ) ).toBeTruthy()
    })

    test('Debe de disminuir -1', () => { 
        const { container } = render( <CounterApp value={ initialValue }/> )
        //fireEvent: es un método que nos permite disparar eventos en el DOM
        fireEvent.click( screen.getByText('-1') )

        expect( screen.getByText( '19' ) ).toBeTruthy()
    })

    test('Debe de resetear con el botón reset', () => { 
        const { container } = render( <CounterApp value={ 2312 }/> )
        //fireEvent: es un método que nos permite disparar eventos en el DOM
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('Reset') )
        // expect( screen.getByText(2312) ).toBeTruthy()

        //acceder al elemento con el aria-label
        screen.getByRole('button', {name: 'btn-reset'})
    })
})