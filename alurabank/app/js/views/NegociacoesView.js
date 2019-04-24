class NegociacoesView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update() {
        this._elemento.innerHTML = this.template();
    }
    template() {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Data</TH>
                        <th>Quantidade</th>
                        <th>Valor</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>

                <tfoot>
                </tfoot>
            </table>
        `;
    }
}
