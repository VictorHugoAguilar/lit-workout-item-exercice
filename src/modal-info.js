import {
  LitElement,
  html,
  css,
  nothing
} from "lit";

import {
  EventMixin
} from './mixins/EventMixin.js';

/**
 * 
 * @event modal-info-item-selected
 */
class ModalInfo extends EventMixin(LitElement) {

  static get is() {
    return 'modal-info';
  }

  static get properties() {
    return {
      totalVolume: {
        type: String,
        attribute: 'total-volume'
      },
      bulkingUp: {
        type: String,
        attribute: 'bulkin-up'
      },
      totalRepetitions: {
        type: String,
        attribute: 'total-repetitions'
      },
      weightPerRepetition: {
        type: String,
        attribute: 'weight-repetitions'
      },
      itemSelected: {
        type: String,
        attribute: 'selected-item'
      }
    }
  }

  constructor() {
    super();
    this.totalVolume = '';
    this.bulkingUp = '';
    this.totalRepetitions = '';
    this.weightPerRepetition = '';
    this.itemSelected = 'totalVolume';
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
        display: flex;
        flex-direction:column;
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
        <div class="modal-info">
          <div class="modal-info-header">
            <span class="modal-title-description">
              Establecer métricas de funcionamiento
            </span>
            <span class="modal-title-option"> ? </span>
          </div>
          <div class="modal-body">
            <table class="modal-info-table">
              <tr class="modal-info-table-item ${this.styleSelected('totalVolume')}" @click=${ () => {this.selected('totalVolume')}}>
                <td class="modal-info-table-item-description">Volumen total</td>
                <td class="modal-info-table-item-option"> ${this.totalVolume ? `${this.totalVolume} Kg` : 'N/D'} ${this.itemSelect('totalVolume')}</td>
              </tr>
              <tr class="modal-info-table-item  ${this.styleSelected('bulkingUp')}" @click=${ () => {this.selected('bulkingUp')}}>
                <td class="modal-info-table-item-description">Aumento de volumen</td>
                <td class="modal-info-table-item-option"> ${this.bulkingUp ? `${this.bulkingUp} %` : '-100%'} ${this.itemSelect('bulkingUp')}</td>
              </tr>
              <tr class="modal-info-table-item  ${this.styleSelected('totalRepetitions')}" @click=${ () => this.selected('totalRepetitions')}>
                <td class="modal-info-table-item-description"> Repeticiones totales </td>
                <td class="modal-info-table-item-option"> ${this.totalRepetitions ? `${this.totalRepetitions} rep` : 'N/D'} ${this.itemSelect('totalRepetitions')}</td>
              </tr>
              <tr class="modal-info-table-item  ${this.styleSelected('weightPerRepetition')}" @click=${ () => this.selected('weightPerRepetition')}>
                <td class="modal-info-table-item-description">Peso/rep</td>
                <td class="modal-info-table-item-option">  ${this.weightPerRepetition ? `${this.weightPerRepetition} rep` : 'N/D'} ${this.itemSelect('weightPerRepetition')}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    `;
  }

  itemSelect(selected) {
    if (selected === this.itemSelected) {
      return html `<span class="modal-info-table-item-option-checked">✅</span>`
    }
    return nothing;
  }

  styleSelected(selected) {
    if (selected === this.itemSelected) {
      return css `modal-info-table-select`
    }
  }

  selected(itemSelected) {
    if (!itemSelected) return;
    this.itemSelected = itemSelected;
    this.fire('modal-info-item-selected', this.itemSelected);
    console.log('se ha modificado la opcion por ', this.itemSelected);
  }

}

customElements.define(ModalInfo.is, ModalInfo);