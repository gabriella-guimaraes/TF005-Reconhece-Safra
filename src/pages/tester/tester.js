
import { Navbar } from '../../components/navbar/navBar.js';
import { Footer } from '../../components/footer/footer.js';

export const Tester = () => {
    // Coloque sua página
    const rootElement = document.createElement('div');
    rootElement.appendChild(Navbar());
    rootElement.appendChild(Footer());
    return rootElement;
};