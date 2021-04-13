
import { Navbar } from '../../components/navbar/navBar.js';

export const Tester = () => {
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.appendChild(Navbar());
    return rootElement;
};