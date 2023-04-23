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
        padding: 3px;
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
        <div class="header">
          <div class="title">
            <span>Lat Pull - Underhand (cable)</span>
          </div>
          <div class="menu">
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

}

customElements.define(ItemExercice.is, ItemExercice);