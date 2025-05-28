class usercad extends HTMLElement {
    constructor() {

        let estilos = `<style>
            .card {
              font-family: 'Arial', sans-serif;
              background: #f9f9f9;
              border: 1px solid #ddd;
              border-radius: 8px;
              padding: 16px;
              width: 250px;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .name {
              font-size: 1.2em;
              font-weight: bold;
              margin-bottom: 4px;
            }
            .email {
              color: #555;
            }
          </style>`;


        super(); // va a coger todas las caracteristicas que "HTMLElement" tiene

        //Este modulo de ShadownDom va a ser e tipo "abierto"
        // lo cual significa que va a tener acceso desde afuera.

        this.attachShadow({ mode: 'open' });


        this.shadowRoot.innerHTML = `
        ${estilos}
        <div class="card">
            <div class="name">aurora</div>
            <div class="email">auroraprogamer@gmail.com</div>
        </div>`

    }

    // Es una funcion la cual acciona post-implementacion 
    // ppara volver a ser modficada o alterada despues de haber sido creada.
    connectedCallback() {
        // llene el contenido de manera donamoca desde los atributos
            this.shadowRoot.querySelector('.name').textContent = this.getAttribute('name')|| "Nombre desconocido";
            this.shadowRoot.querySelector('.email').textContent = this.getAttribute('email')|| "Nombre desconocido";    }
}

// Registrsr el componenete

customElements.define('user-card', usercad)