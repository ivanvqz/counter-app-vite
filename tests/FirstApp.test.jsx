import { render } from "@testing-library/react"
import FirstApp from "../src/FirstApp"

describe('Pruebas en subTitle', () => { 
    test('Debe hacer match con el snapshot', () => { 

        // Render renderiza el componente en memoria
        const subTitle = 'Me llammo ivannnn'
        render( <FirstApp subTitle={ subTitle } /> )

    })
})