import PropTypes from 'prop-types' //npm i prop-types
// const getSaludo = ( nombre, edad ) => 
//     `Saludos ${ nombre }, tienes ${edad} años`

const FirstApp = ( { title, subTitle, title2 } ) => {
    // Si no existen las properties se lanza un error
    
    return (
        <>
            {/* <code>{ JSON.stringify( saludo ) }</code> */}
            {/* <h1> { getSaludo('Ivan', 23) } </h1> */}
            <h1>{title}</h1>
            <h2>{title2}</h2>
            <p>{subTitle}</p>
        </>
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
    subTitle: 'No hay subtítulo'
}

export default FirstApp