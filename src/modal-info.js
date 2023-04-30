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
      titleDescription: {
        type: String,
        attribute: 'title-description'
      },
      modalVisible: {
        type: Boolean,
        attribute: 'modal-visible',
      },
      options: {
        type: Object,
        attribute: 'options'
      },
      itemSelected: {
        type: String,
        attribute: 'item-selected'
      },
      stylesPrexis: {
        type: Object,
        attribute: 'style-prefix'
      }
    }
  }

  constructor() {
    super();
    this.itemSelected = '';
    this.options = {};
    this.stylesPrexis = {
      weightPerRepetition: {
        color: 'red',
      },
    };
    this.modalVisible = false;
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

      .modal-info-table-item:hover{
        background-color: rgba(82, 255,51, 0.3);
        border-bottom: 1px solid rgba(82, 255, 51, 1);
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
    return this.modalVisible ? this._tplModal : nothing;
  }

  get _tplModal() {
    return html `
      <div class="container">
        <div class="modal-info">
          <div class="modal-info-header">
            <span class="modal-title-description"> ${this.titleDescription}
              
            </span>
            <span class="modal-title-option"> ? </span>
          </div>
          <div class="modal-body">
            <table class="modal-info-table">
            ${Object.entries(this.options).map(([key, value]) => {
              if(value.active) {
                return html`
                  <tr class="modal-info-table-item ${this.styleSelected(key)}" @click=${ () => {this.selected(key)}}>
                    ${value.prefix ? html`<td style="color: ${this.stylesPrefix(key)};"> ${value.prefix} </td>` : nothing}
                    <td class="modal-info-table-item-description">${value.description}</td>
                    <td class="modal-info-table-item-option"> 
                      ${value.value ? `${value.value} ${value.sufix}` : value.optionalText } 
                      ${this.itemSelect(key)}
                    </td>
                  </tr>`
              }
            })}
            </table>
          </div>
        </div>
      </div>
  `
  }

  itemSelect(selected) {
    // console.log('selected => ', selected)
    // console.log('itemSelected => ', this.itemSelected)
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
    /* console.log('itemSelected', itemSelected) */
    if (!itemSelected) {
      return;
    }
    this.itemSelected = itemSelected;
    /* console.log('itemSelected >>>', this.itemSelected) */
    this.fire('modal-info-item-selected', {
      componentName: this.componentName,
      itemSelected: this.itemSelected
    });
  }

}

customElements.define(ModalInfo.is, ModalInfo);