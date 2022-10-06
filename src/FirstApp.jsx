import PropTypes from 'prop-types' //npm i prop-types
// const getSaludo = ( nombre, edad ) => 
//     `Saludos ${ nombre }, tienes ${edad} años`

const FirstApp = ( { title, subTitle, title2 } ) => {
    // Si no existen las properties se lanza un error
    
    return (
        <div className="container center">
            {/* <code>{ JSON.stringify( saludo ) }</code> */}
            {/* <h1> { getSaludo('Ivan', 23) } </h1> */}
            <h3 >{title2}</h3>
            <h2>{subTitle}</h2>
            <h2>{subTitle}</h2>
            <h1 data-testid="test-subtitle"> {title} </h1>
        </div>
    )
}
// para saber cómo funciona el componente, al menos en las properties
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}
//Valores por defecto
FirstApp.defaultProps = {
    title: 'No hay título',
    // subTitle: 'No hay subtítulo'
}

export default FirstApp