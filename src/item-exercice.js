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
      noteExercicie: {
        type: String,
        attribute: 'note-exercice'
      },
      _openNote: {
        type: Boolean,
      },
      _showModalInfo: {
        type: Boolean,
      },
      _seriesExercice: {
        type: Array,
        attribute: 'series-exercice'
      },
      _listOptions: {
        type: Object,
        attribute: 'list-options'
      }

    }
  }

  constructor() {
    super();
    this.nameExercice = '';
    this._openNote = true;
    this.noteExercicie = 'Este ejercicio se hace en maquina';
    this._showModalInfo = false;
    this._seriesExercice = [{
        id: 0,
        session: 'P',
        before: {},
        kg: 14,
        series: 10,
        checked: true
      },
      {
        id: 1,
        session: 1,
        before: {},
        kg: 14,
        series: 10,
        checked: false
      },
      {
        id: 2,
        session: 2,
        before: {},
        kg: 14,
        series: 10,
        checked: false
      },
      {
        id: 3,
        session: 3,
        before: {},
        kg: 14,
        series: 10,
        checked: false
      },
    ];
    this._listOptions = {
      totalVolume: {
        description: 'Volumen total',
        attribute: 'total-volume',
        prefix: '',
        sufix: 'Kg',
        optionalText: 'N/D',
        value: '',
      },
      bulkingUp: {
        description: 'Aumento de volumen',
        attribute: 'total-volume',
        prefix: '',
        sufix: '%',
        optionalText: '-100%',
        value: '',
      },
      totalRepetitions: {
        description: 'Repeticiones totales',
        attribute: 'total-volume',
        prefix: '',
        sufix: 'rep',
        optionalText: 'N/D',
        value: '',
      },
      weightPerRepetition: {
        description: 'Peso/rep',
        attribute: 'total-volume',
        prefix: '',
        sufix: 'rep',
        optionalText: 'N/D',
        value: '',
      },
    }
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
        font-size: 0.9rem;
        width: 75%;
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
        padding: 0.3rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center
      }

      .header-note-open {
        border-bottom: 2px solid rgba(75, 75, 75, 1);
      }

      .header-note-close {
        background-color: rgba(82, 255,51, 0.3);
        border-bottom: 2px solid rgba(82, 255,51, 1);
      }
      
      .header-note-description{
        color: rgba(82, 255,51, 0.8);
        font-size: 0.8rem;
        width: 90%;
      }

      .header-note-description-input{
        width: 100%;
        color: rgba(82, 255,51, 0.8);
        background-color: transparent;
        border: none;
      }

      .header-note-description-input:active {
        border: none;
        outline: none;
      }

      .header-note-description-input:focus {
        border: none;
        outline: none;
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
        font-size: 0.8rem;
      }

      .table-item{
        height: 25px;
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

      .item-input{
        width: 60px;
        font-weight: bold;
        text-align: center;
        color: rgba(82, 255,51, 0.8);
        background-color: transparent;
        border: none;
      }

      .item-input:active {
        border: none;
        outline: none;
      }

      .item-input:focus {
        border: none;
        outline: none;
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
            <span>${this._normalizeText(this.nameExercice, 30, '...')}</span>
          </div>
          <div class="menu">
            <modal-info class="modal-info" 
              component-name="modal-info"
              @modal-info-item-selected="${ (e) => this._selectdAndCloseModal(e) }"
              ?modal-visible= ${this._showModalInfo}
              .list-options=${this._listOptions}
              ></modal-info>
            <span class="button-info" @click="${ () => this._openModal() }" >N/D</span>
            <span class="button-info">...</span>
          </div>
        </div>
        <div class="header-note header-note-open ${ this._styleIconnote}">
          <span class="header-note-description">
            <input type="text" class="header-note-description-input" value=${this.noteExercicie} />
          </span>
          <span class="header-note-option" @click=${ () => this._openNote = !this._openNote} > ${ this._tmplIconNote } </span>
        </div>
        <div class="body">
          <table class="table">
            <thead>
              <tr class="thead">
                <th>Session</th>
                <th>Anterior</th>
                <th>Kg</th>
                <th>Series</th>
                <th>✅</th>
              </tr>
            </thead>
            <tbody class="tbody">
              ${ this._seriesExercice.map( serie => {
                return html`
                <tr class="table-item ${serie.checked ? 'table-item-select' : ''}">
                  <td>${serie.session}</td>
                  <td>${serie.before ? '' : ''}</td>
                  <td>
                    <input class="item-input" type="text" value="${serie.kg}" 
                      @focusout=${ (e) => this._updateValueItem(e, serie.id, 'kg')}>
                  </td>
                  <td>
                    <input class="item-input" type="text" value="${serie.series}"
                    @focusout=${ (e) => this._updateValueItem(e, serie.id, 'series')}>
                  </td>
                  <td @click=${ () => this._selectedItem(serie.id) }> ${this._tmplCheckItem(serie.checked)}</td>
                </tr>
                `
              }) }
            </tbody>
          </table>
        </div>
        <div class="footer">
          <span class="button">
            <button class="button-add" @click=${() => this._addNewItemSerie()}>+ Añadir serie</button>
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

  get _tmplIconNote() {
    return this._openNote ? html `<span>🔓</span>` : html `<span>🔐</span>`
  }

  get _styleIconnote() {
    return this._openNote ? 'header-note-open' : 'header-note-close';

  }

  _tmplCheckItem(checked) {
    return checked ? html `<span style="font-size: 1.3rem; color: rgba(82, 255,51, 1);">☑</span>` :
      html `<span style="font-size: 1.3rem; color: red;">☒</span>`
  }

  _selectedItem(id) {
    this._seriesExercice.map(serie => {
      if (serie.id === id) {
        serie.checked = !serie.checked;
      }
      return serie;
    })
    this.requestUpdate();
  }

  _addNewItemSerie() {
    const onlyNumber = this._seriesExercice.filter(serie => !isNaN(serie.session));
    const newItem = {
      id: this._seriesExercice.length,
      session: onlyNumber.length + 1,
      before: {},
      kg: 0,
      series: 0,
      checked: false
    };
    this._seriesExercice.push(newItem);
    this.requestUpdate();
  }

  _updateValueItem(ev, id, type) {
    this._seriesExercice.map(serie => {
      if (serie.id === id) {
        if (type === 'kg') {
          serie.kg = Number(ev.target.value);
        }
        if (type === 'series') {
          serie.series = Number(ev.target.value);
        }
      }
      return serie;
    })
    console.table(this._seriesExercice)
    this.requestUpdate();
  }

}

customElements.define(ItemExercice.is, ItemExercice);