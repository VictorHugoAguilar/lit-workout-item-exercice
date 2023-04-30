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

import {
  OPTION_MODAL_METRICS,
  OPTION_MODAL_SESSION_TYPE
} from "./constant.js";

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
      _showModalMetrics: {
        type: Boolean,
      },
      _showModalTypeSerie: {
        type: Boolean,
      },
      _seriesExercice: {
        type: Array,
        attribute: 'series-exercice'
      },
      options: {
        type: Object,
      },
      _metrics: {
        type: String,
      },
      _metricSeleted: {
        type: String,
      },
      _itemSessionSelected: {
        type: String,
      }

    }
  }

  constructor() {
    super();
    this.nameExercice = '';
    this._openNote = true;
    this.noteExercicie = 'Este ejercicio se hace en maquina';
    this._showModalMetrics = false;
    this._showModalTypeSerie = false;
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
    this.options = OPTION_MODAL_METRICS;
    this.optionsTypeSerie = OPTION_MODAL_SESSION_TYPE;
    this._metrics = 'N/D';
    this._metricSeleted = 'totalVolume';
    this._itemSessionSelected = '';

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
        white-space: nowrap;
        width: auto;
        background-color: rgba(82, 255,51, 0.3);
        color: rgba(82, 255,51, 1);
        font-weight:bold;
        border-radius: 5px;
        padding: 0.3rem;
        font-size: 0.7rem;
        margin-left: 0.4rem; 
      }

      .button-option{
        background-color: rgba(82, 255,51, 0.3);
        color: rgba(82, 255,51, 1);
        font-weight:bold;
        border-radius: 5px;
        padding: 0.3rem;
        font-size: 0.7rem;
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

      .modal-metrics{
        z-index: 99;
        display: block;
        left: -250px;
        position: relative;
        border-radius: 10px;
        width: 300px;
        background-color: #5C5E6C;
        color: white;
      }

      .modal-type-serie{
        z-index: 99;
        display: block;
        left: 50px;
        position: relative;
        border-radius: 10px;
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
      ${ this._showModalMetrics || this._showModalTypeSerie ? html`<div class="modal"></div>`: nothing }  
        <div class="header">
          <div class="title">
            <span>${this._normalizeText(this.nameExercice, 30, '...')}</span>
          </div>
          <div class="menu">
            ${this._tmplModalMetrics}
            <span class="button-info" @click="${ () => this._openModal('modal-metrics') }" >${this._metrics}</span>
            <span class="button-option">...</span>
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
            ${this._tmplModalSessionType}
            <tbody class="tbody">
              ${ this._seriesExercice.map( serie => {
                return html`
                <tr class="table-item ${serie.checked ? 'table-item-select' : ''}">
                  <td @click=${ () => {this._openModal('modal-type-serie'); this._selectItemSession(serie.id)} } >${serie.session} </td>
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

  _selectdAndCloseModalMetrics({
    detail
  }) {
    // console.log('desde el main recibimos _selectdAndCloseModalMetrics', detail)
    this._metricSeleted = detail.itemSelected ? detail.itemSelected : 'totalVolume';
    // console.log('desde el main recibimos _selectdAndCloseModalMetrics >>>', this._metricSeleted)
    this._updateMetrics();
    this._showModalMetrics = false;
  }

  _selectdAndCloseModalSerieType({
    detail
  }) {
    // console.log('desde el main recibimos _selectdAndCloseModalSerieType', detail)

    if (detail.itemSelected) {
      const typeSelected = this._sessionType[detail.itemSelected];
      this._updateValueItem(typeSelected, this._itemSessionSelected, 'session');
    }
    this._itemSessionSelected = '';
    this._showModalTypeSerie = false;
  }

  _openModal(modalName) {
    // console.log(modalName)
    if (modalName === 'modal-type-serie') {
      this._showModalTypeSerie = !this._showModalTypeSerie
    }
    if (modalName === 'modal-metrics') {
      this._showModalMetrics = !this._showModalMetrics;
    }
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

  get _tmplModalMetrics() {
    // console.table(this.options)
    // console.log('this._metricSeleted', this._metricSeleted)
    return this._showModalMetrics ? html `
      <modal-info class="modal-metrics" 
        component-name="modal-metrics"
        title-description="Establecer métricas de funcionamiento"
        @modal-info-item-selected="${ (e) => this._selectdAndCloseModalMetrics(e) }"
        ?modal-visible= ${this._showModalMetrics}
        .options=${this.options}
        item-selected=${this._metricSeleted}
      ></modal-info>` : nothing;
  }

  get _tmplModalSessionType() {
    return this._showModalTypeSerie ? html `
      <modal-info class="modal-type-serie" 
          component-name="modal-type-serie"
          title-description="Establecer tipo de serie"
          @modal-info-item-selected="${ (e) => this._selectdAndCloseModalSerieType(e) }"
          ?modal-visible= ${this._showModalTypeSerie}
          .options=${this.optionsTypeSerie}
      ></modal-info>
    ` : nothing;
  }

  _selectedItem(id) {
    this._seriesExercice.map(serie => {
      if (serie.id === id) {
        serie.checked = !serie.checked;
      }
      return serie;
    })
    this._updateMetrics();
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
        if (type === 'session') {
          serie.session = ev;
        }
      }
      return serie;
    })
    let increment = 0;
    this._seriesExercice
      .sort(serie => serie.id)
      .filter(serie => !isNaN(serie.session))
      .map(serie => {
        serie.session = ++increment;
        return serie;
      })
    console.table(this._seriesExercice)
    this._updateMetrics();
    this.requestUpdate();
  }


  _updateMetrics() {
    Object.entries(this.options).map(([key, value]) => {
      // console.log('key', key)
      if (key === 'totalVolume') {
        const totalVolumen = this._seriesExercice
          .filter(s => !isNaN(s.session))
          .filter(s => s.checked)
          .map(s => s.kg)
          .reduce((a, b) => a + b, 0);

        return value.value = totalVolumen;
      }
      if (key === 'bulkingUp') {}
      if (key === 'totalRepetitions') {
        // console.log('change values in totalRepetitions')
        const totalSeries = this._seriesExercice
          .filter(s => !isNaN(s.session))
          .filter(s => s.checked)
          .map(s => s.series)
          .reduce((a, b) => a + b, 0);

        return value.value = totalSeries;
      }
      if (key === 'weightPerRepetition') {
        const numberOfSeries = this._seriesExercice
          .filter(s => !isNaN(s.session))
          .filter(s => s.checked)
          .length

        const totalVolumen = this._seriesExercice
          .filter(s => !isNaN(s.session))
          .filter(s => s.checked)
          .map(s => s.kg)
          .reduce((a, b) => a + b, 0);

        const totalSeries = this._seriesExercice
          .filter(s => !isNaN(s.session))
          .filter(s => s.checked)
          .map(s => s.series)
          .reduce((a, b) => a + b, 0);

        // Peso levantado test / 1,0278-(0,0278x número de repeticiones hasta el fallo) 
        const RM = totalVolumen / 1.0278 - (0.0278 * numberOfSeries)

        return value.value = RM.toFixed(2);
      }
    });
    console.table(this.options)
    this._changeMetricActive();
  }

  _changeMetricActive() {
    Object.entries(this.options).map(([key, value]) => {
      if (key === this._metricSeleted) {
        this._metrics = value.value ? `${value.value} ${value.sufix}` : 'N/D';
        value.selected = true;
        return value;
      }
      value.selected = false;
      return value;
    })
    console.table(this.options)
    this.requestUpdate();
  }

  _selectItemSession(id) {
    this._itemSessionSelected = id;
    console.log('_selectItemSession', this._itemSessionSelected)
  }


  get _sessionType() {
    return {
      'heating': 'P',
      'decreasing': 'S',
      'error': 'E',
      'normal': 0,
    }
  }

}

customElements.define(ItemExercice.is, ItemExercice);