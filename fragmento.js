class componenteTeamRed extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowRoot.innerHTML = `
            <style>
                h1 {
                    color: white;
                    background-color: red;
                    padding: 10px;
                    text-align: center;
                }
                /* Puedes agregar más estilos si necesitas */
                :host {
                    display: block;
                    width: 100%;
                    background-color: white;
                }
            </style>
            <h1>Hola Mundo</h1>
        `;
    }
}

customElements.define('9-12-18', componenteTeamRed);
