export const saludar = ( nombre ) => {

    console.log( 'Creando elemento H1' );

    const newH1 = document.createElement('h1');
    newH1.innerText = `Hola ${ nombre } !!!`;
    document.body.append( newH1 );    
}