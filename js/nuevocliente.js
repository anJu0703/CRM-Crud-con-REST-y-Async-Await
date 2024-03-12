(function() {
    
    const formulario = document.querySelector('#formulario');
    formulario.addEventListener('submit', agregarCliente);

    function agregarCliente(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        };

        if (validar(cliente)) {
            //Mostrar mensaje
            console.log('Todos los campos son obligatorios');
            return;
        }

        console.log('Paso validacion');
    };

    //Funcion para validar inputs
    function validar(cliente) {
        return !Object.values(cliente).every(input => input !== '');
    }
})();