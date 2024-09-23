class MiComponente123 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <p>Sharknado💩</p>
        `;
    }
}

customElements.define("teamGonzalo", MiComponente123);