import { getByTestId, render } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('Pruebas en subTitle', () => { 
    //no es muy recomendable usar el snapshot en desarrollo porque si cambia algo en el componente, el snapshot se rompe, y hay que actualizarlo
    // test('Debe hacer match con el snapshot', () => { 

    //     // Render renderiza el componente en memoria
    //     const subTitle = 'Me llammo ivannnn'
    //     const { container } = render( <FirstApp subTitle={ subTitle } /> )

    //     // Aserción
    //     //snapshot: se asegura de que el componente no cambie accidentalmente, permitiendo 
    //     //comparar el render
    //     expect( container ).toMatchSnapshot()
    // })

    test('Debe de mostrar el subtitle en un p', () => { 
        const subTitle = 'Me llammo ivannnn'
        const { container, getByText, getByTestId } = render( <FirstApp subTitle={ subTitle } /> )
        expect( getByText( subTitle ) ).toBeTruthy()

        // //salta directamente en el dom
        // const p = container.querySelector('p')
        // //se esperaba que el p existiera y contenga un texto
        // expect(p.innerHTML).toContain( subTitle )

        //pruebas flexibles
        expect( getByTestId('test-subtitle').innerHTML ).toContain( subTitle )
        //toBe se asegura de que el valor sea exactamente igual
        //toContain se asegura de que el valor exista en el texto

    })

    test('Debe regresar el título enviado por props', () => { 
        const title = 'Hola soy ivan'
        const subTitle = 'Soy desarrollador web'
        const { getByText } = render( <FirstApp title={ title } subTitle={ subTitle } /> )
        expect( getByText( title ) ).toBeTruthy()
    })
})