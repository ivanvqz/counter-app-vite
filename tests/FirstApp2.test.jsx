import { render, screen } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {     
    const title = 'me llamo ivan';
    const subTitle = 'Soy desarrollador web';

    test('Debe de hacer match con snapshot', () => { 
        const { container } = render( <FirstApp subTitle={title} /> )
        expect( container ).toMatchSnapshot()
    })

    test('Debe de mostrar el mensaje "me llamo ivan" ', () => { 
        render( <FirstApp subTitle={ title } /> )
        //screen: es el objeto que renderizamos
        expect( screen.getAllByText( title ) ).toBeTruthy()
        screen.debug()
    })

    test('Debe de mostrar un párrafo en un p', () => { 
        render( <FirstApp title={ title } /> )
        //el role es el tipo de elemento que es
        expect( screen.getByRole( 'heading', {level: 1} ).innerHTML ).toContain( title )
    })

    test('debe de mostrar el subtitulo mostrado por props', () => { 
        render( <FirstApp title={ title } subTitle={ subTitle } /> )

        expect( screen.getAllByText( subTitle ).length).toBe(2)
    })
})