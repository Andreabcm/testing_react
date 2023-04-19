import userEvent from '@testing-library/user-event';
import App from '../App';
import { render, screen } from '@testing-library/react';


describe('radio-streaming in tdd', () => {
    beforeEach(() => render(<App />))
    test('renders main page correctly', () => {
        //screen.debug();
        expect(true).toBeTruthy()
    })

    describe('El nombre de la aplicación debe mostrarse en algún lugar => "RADIO FACTORIA', () => {
        test('El nombre de la aplicación debe mostrarse en algún lugar => "RADIO FACTORIA', () => {
            // const titulo = screen.getByText(/RADIO FACTORIA/i);
            const titulo = screen.getByRole('heading', {name:/radio factoria/i})
            expect(titulo).toBeInTheDocument();
        })
    })

    describe('Debemos poder buscar radios por nombre', () => {
        test('La aplicación debe tener un campo input con el placeholder => "Escribe el nombre de la radio', () => {
            const search = screen.getByPlaceholderText('Escribe el nombre de la radio')
            expect(search).toBeInTheDocument();
        })

        test('La aplicación debe tener un botón de búsqueda => Texto "Buscar"', () => {
            // const button = screen.getByText('Buscar');
            const button = screen.getByRole('button', {name: 'buscar'})
            expect(button).toBeInTheDocument();
        })

        test('Cuando hacemos click en el botón buscar, se debe ejecutar la función de búsqueda una sola vez', async () => {
            const buscarMockFn = jest.fn();
            const button = screen.getByRole('button', {name: 'buscar'})
            button.addEventListener('click',buscarMockFn)

            await userEvent.click(button)

            expect(buscarMockFn).toHaveBeenCalledTimes(1);
        })
    })

        
})    