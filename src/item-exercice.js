import {
  LitElement,
  html,
  css
} from "lit";


/**
 * `ItemExercice` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ItemExercice extends LitElement {

  static get is() {
    return 'item-exercice';
  }

  static get properties() {
    return {

    }
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  static get styles() {
    return [
      css `
      :host{
        display: block;
        font-family: Verdana, Geneva, Tahoma, sans-serif ;
      }
      
      .container{
        background-color: #5D5C5C;
        width: 100%;
        height: 220px;
        display: flex;
        flex-direction:column;
      }

      .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0.3rem;
      }

      .title {
        width: 70%;
        color: #52FF33;
        font-weight:600;
      }

      .menu {
        width: 20%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
      }

      .button-info{
        background-color: rgba(82, 255,51, 0.3);
        color: rgba(82, 255,51, 1);
        font-weight:bold;
        border-radius: 10px;
        padding: 0.3rem;
        font-size: 0.8rem;
        margin-left: 0.4rem; 
      }

      .header-note {
        background-color: rgba(82, 255,51, 0.3);
        border-bottom: 2px solid rgba(82, 255,51, 1);
        padding: 0.3rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center
      }

      .header-note-description{
        color: rgba(82, 255,51, 0.8);
      }

      .header-note-option {
        font-size: 0.7 rem;
        background-color: rgba(82, 255,51, 0.8);
        border-radius: 10px;
        padding: 5px 10px;
        font-size: 0.8rem;
      }

      .body{
      }

      .table{
        width: 100%;
        border-collapse: collapse;
      }

      .thead {
        color: white;
        font-weight: 600;
        font-size: 0.8rem;
      }

      .tbody {
        color: white;
        font-weight: 400;
        text-align:center;
      }

      .table-item-select{
        background-color: rgba(82, 255,51, 0.4);
      } 

      .footer{
        width: 100%;
      }
      
      .button {
        padding: 10px 10px;
        display: flex;
      }

      .button-add {
        width: 100%;
        height: 25px;
        background-color: rgba(82, 255,51, 0.3);
        color: rgba(82, 255,51, 0.9);
        font-size: 1rem;
        border: none;
        border-radius: 5px;
      }

      .button-add:hover{
        background-color: rgba(82, 255,51, 0.5);
      }

      .modal{
        position: absolute; 
        z-index: 5;
        width: 400px;
        height: 220px;
        background-color: rgba(1, 1, 1, 0.6);
      }

      .modal-info{
        z-index: 99;
        display: inline-block;
        top: 10px;
        position: absolute;
        border-radius: 10px;
        width: 300px;
        background-color: #5C5E6C;
        color: white;

      }

      .modal-info-header{
        display: flex;
        justify-content:space-between;
        padding: 10px;
      }

      
      .modal-title-description{
        font-size: 0.8rem;
      }

      .modal-info-table{
        width: 100%;
        border-collapse: collapse;
      }
      
      .modal-info-table tr {
        margin-bottom: 30px;
      }

      .modal-body {
        font-size: 0.8rem;
      }

      .modal-info-table-item td{
        padding: 5px;
      }

      .modal-info-table-item-description{
        text-align: left;ƒ
      }

      .modal-info-table-item-option{
        text-align: right;
      }

      .modal-info-table-select{
        background-color: rgba(82, 255,51, 0.3);
      }
      `,
    ];
  }

  /**
   * Implement to describe the element's DOM using lit-html.
   * Use the element current props to return a lit-html template result
   * to render into the element.
   */
  render() {
    return html `
      <div class="container">
        <!-- <div class="modal"></div> -->
        <div class="header">
          <div class="title">
            <span>Lat Pull - Underhand (cable)</span>
          </div>
          <div class="menu">
            <!-- <div class="modal-info">
              <div class="modal-info-header">
                  <span class="modal-title-description">
                    Establecer métricas de funcionamiento
                  </span>
                  <span class="modal-title-option">
                    ?
                  </span>
              </div>
              <div class="modal-body">
                <table class="modal-info-table">
                  <tr class="modal-info-table-item modal-info-table-select">
                    <td class="modal-info-table-item-description">Volumen total</td>
                    <td class="modal-info-table-item-option"> 1014 Kg <span class="modal-info-table-item-option-checked">✅</span></td>
                  </tr>
                  <tr class="modal-info-table-item">
                    <td class="modal-info-table-item-description">Aumento de volumen</td>
                    <td class="modal-info-table-item-option">-54%</td>
                  </tr>
                  <tr class="modal-info-table-item">
                    <td class="modal-info-table-item-description">Repeticiones totales</td>
                    <td class="modal-info-table-item-option">27 rep</td>
                  </tr>
                  <tr class="modal-info-table-item">
                    <td class="modal-info-table-item-description">Peso/rep</td>
                    <td class="modal-info-table-item-option">37,56 kg</td>
                  </tr>
                </table>
              </div>
            </div> -->
            <modal-info class="modal-info" @modal-info-item-selected="${ (e) => this.selectdAndCloseModal(e) }"></modal-info>
            <span class="button-info">N/D</span>
            <span class="button-info">...</span>
          </div>
        </div>
        <div class="header-note">
          <span class="header-note-description">Este ejercicio se hace en maquina</span>
          <span class="header-note-option">🔐</span>
        </div>
        <div class="body">
          <table class="table">
            <thead>
              <tr class="thead">
                <th>Session</th>
                <th>Anterior</th>
                <th>Kg</th>
                <th>Tiempo</th>
                <th>✅</th>
              </tr>
            </thead>
            <tbody class="tbody">
              <tr class="table-item table-item-select">
                <td>1</td>
                <td>35Kg x 15(P)</td>
                <td>35</td>
                <td>15</td>
                <td>✅</td>
              </tr>
              <tr class="table-item">
                <td>2</td>
                <td>35Kg x 15(P)</td>
                <td>35</td>
                <td>15</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="footer">
          <span class="button">
            <button class="button-add">+ Añadir serie</button>
          </span>
        </div>
      </div>
    `;
  }

  selectdAndCloseModal({detail}) {
    console.log('desde el main recibimos ', detail)
  }

}

customElements.define(ItemExercice.is, ItemExercice);