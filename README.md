# Aerolinea con React App

El flujo de la aplicacion es al ingresar al sitio tendremos un formulario inicial donde solicitara un lugar de origen, destino, cantidad de pasajeros y una fecha, al ingresar los campos se nos desplegara los viajes disponibles para esa fecha, podremos pre-reservarlos y estos estaran en el apartado "Mis reservaciones", una vez que hayamos elegido todos los viajes deseados procederemos a "pagar" donde este nos pedira informacion adicional y una vez completado los datos el boleto sera nuestro, podremos visualizarlo en el la vista "Mis boletos".

## Disponibles Scripts

Abrir la carpeta del directorio y ejecutar los siguientes comandos

### `npm install`

Instalara las dependencias necesarias, estas son:
"dependencies": {
    "@amir04lm26/react-modern-calendar-date-picker",
    "@testing-library/jest-dom",
    "@testing-library/react",
    "@testing-library/user-event",
    "react",
    "react-calendar",
    "react-dom",
    "react-redux",
    "react-router-dom",
    "react-scripts",
    "redux",
    "redux-devtools-extension",
    "redux-thunk",
    "sweetalert2",
    "sweetalert2-react-content",
    "web-vitals"
},


### `npm start`

Abrira en el navegador el siguiente enlace [http://localhost:3000](http://localhost:3000).


## Descripcion de la datos del API

{
    results: [
        {
            id: 1,
            city: "Acapulco",
            state: "Guerrero",
            country: "México"
        },
        {
            id: 2,
            city: "Barcelona",
            state: "Cataluña",
            country: "España"
        },
        {
            id: 3,
            city: "Berlín",
            state: "Berlín",
            country: "Alemania"
        },
        {
            id: 4,
            city: "Cali",
            state: "Valle del Cauca",
            country: "Colombia"
        },
        {
            id: 5,
            city: "Ciudad de México",
            state: "México D.F",
            country: "México"
        },
        {
            id: 6,
            city: "Los Ángeles",
            state: "California",
            country: "Estados Unidos"
        },
        {
            id: 7,
            city: "Morelia",
            state: "Michoacán de Ocampo",
            country: "México"
        },
        {
            id: 8,
            city: "París",
            state: "Ile de France",
            country: "Francia"
        },
        {
            id: 9,
            city: "Seúl",
            state: "Seoul-teukbyeolsi",
            country: "Corea del Sur"
        },
        {
            id: 10,
            city: "Tijuana",
            state: "Baja California",
            country: "México"
        }
    ]
}
