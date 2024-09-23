class componenteTeamRed extends HTMLElement {   
    constructor() {
        super();
        this.innerHTML= `<p>Sharknado</p>`;
    }
}

customElements.define('teamGonzalo', componenteTeamRed);
    