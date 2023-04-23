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
      componentName: {
        type: String,
        attribute: 'component-name'
      },
      // Start By independient properties
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
      // End By independient properties
      options: {
        type: Object,
        attribute: 'list-options'
      },
      itemSelected: {
        type: String,
        attribute: 'selected-item'
      },
      stylesPrexis: {
        type: Object,
        attribute: 'style-prefix'
      }
    }
  }

  constructor() {
    super();
    // Start By independient properties
    this.totalVolume = '';
    this.bulkingUp = '';
    this.totalRepetitions = '';
    this.weightPerRepetition = '';
    // End By independient properties
    this.itemSelected = 'totalVolume';
    this.options = {
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
    };
    this.stylesPrexis = {
      weightPerRepetition: {
        color: 'red',
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

      .modal-info-table-item-prefix{

      }

      .modal-info-table-item-description{
        text-align: left;
      }

      .modal-info-table-item-option{
        text-align: right;
      }

      .modal-info-table-select{
        background-color: rgba(82, 255,51, 0.3);
      }

      .modal-info-table-item-option-checked{
        color: rgba(82, 255,51, 1);
        font-size: 1rem;
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
            ${Object.entries(this.options).map(([key, value]) => { 
              console.log(value)
              return html`
                <tr class="modal-info-table-item ${this.styleSelected(key)}" @click=${ () => {this.selected(key)}}>
                  ${value.prefix ? html`<td style="color: ${this.stylesPrefix(key)};"> ${value.prefix} </td>` : nothing}
                  <td class="modal-info-table-item-description">${value.description}</td>
                  <td class="modal-info-table-item-option"> 
                    ${value.value ? `${value.value} ${value.sufix}` : value.optionalText } 
                    ${this.itemSelect(key)}
                  </td>
                </tr>`
            })}
              <!-- By independient properties -->
              <!-- <tr class="modal-info-table-item ${this.styleSelected('totalVolume')}" @click=${ () => {this.selected('totalVolume')}}>
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
              </tr> -->
            </table>
          </div>
        </div>
      </div>
    `;
  }

  itemSelect(selected) {
    if (selected === this.itemSelected) {
      return html `<span class="modal-info-table-item-option-checked">✓</span>`;
    }
    return nothing;
  }

  styleSelected(selected) {
    if (selected === this.itemSelected) {
      return css `modal-info-table-select`;
    }
  }

  stylesPrefix(selected) {
    if (!selected) {
      return 'white';
    }
    if (!this.stylesPrexis || !this.stylesPrexis[selected] || !this.stylesPrexis[selected].color) {
      return 'white';
    }
    return this.stylesPrexis[selected].color;
  }

  selected(itemSelected) {
    if (!itemSelected) {
      return;
    }
    this.itemSelected = itemSelected;
    this.fire('modal-info-item-selected', this.itemSelected);
  }

}

customElements.define(ModalInfo.is, ModalInfo);