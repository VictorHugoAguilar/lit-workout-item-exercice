import {
  LitElement,
  html,
  css,
  nothing
} from "lit";

import {
  EventMixin,
} from './mixins/EventMixin.js';
import {
  NormalizeMixin,
} from './mixins/NormalizeMixin.js';
/**
 * `ItemExercice` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ItemExercice extends EventMixin(NormalizeMixin(LitElement)) {

  static get is() {
    return 'item-exercice';
  }

  static get properties() {
    return {
      nameExercice: {
        type: String,
        attribute: 'name-exercice'
      },
      _showModalInfo: {
        type: Boolean,
      }
    }
  }

  constructor() {
    super();
    this.nameExercice = 'Lat Pull - Underhand (cable)'
    this._showModalInfo = false;
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
        font-size: 0.8rem;
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
        height: 25px;
        color: white;
        font-weight: 600;
        font-size: 0.8rem;
      }

      .tbody {
        color: white;
        font-weight: 400;
        text-align:center;
      }

      .table-item{
        height: 25px !important;
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
        height: 100%;
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
      `,
    ];
  }

  render() {
    return html `
      <div class="container">
      ${ this._showModalInfo ? html`<div class="modal"></div>`: nothing }  
        <div class="header">
          <div class="title">
            <span>${this._normalizeText(this.nameExercice, 27, '...')}</span>
          </div>
          <div class="menu">
            <modal-info class="modal-info" 
              component-name="modal-info"
              @modal-info-item-selected="${ (e) => this._selectdAndCloseModal(e) }"
              ?modal-visible= ${this._showModalInfo}
              ></modal-info>
            <span class="button-info" @click="${ () => this._openModal() }" >N/D</span>
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

  _selectdAndCloseModal({
    detail
  }) {
    console.log('desde el main recibimos ', detail)
    this._showModalInfo = false;
  }

  _openModal(modalName) {
    this._showModalInfo = true;
  }


}

customElements.define(ItemExercice.is, ItemExercice);