/**
 * Importar páginas y templates para definir rutas y renderizar componentes en la página.
 */

import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolverRoutes';

/**
 * definir rutas para establecer la estructura principal de la página.
 */

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact'

};


const router = async() => {
    //obtener elementos HTML hacia donde habrá render
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header(); //renderizar Header.

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();


};


export default router;