/**
 * Obtener hash de la url para manipular id de personajes y mandar template correcto.
 */
const getHash = () =>
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';



export default getHash;