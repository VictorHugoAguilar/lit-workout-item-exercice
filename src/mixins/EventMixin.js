// import {
//   dedupeMixin
// } from "@open-wc/dedupe-mixin";


const EventMixinImplementation = (superclass) =>

  class EventMixin extends superclass {

    fire(eventName, detail) {
      this.dispatchEvent(new CustomEvent(eventName, {
        detail,
        bubbles: true,
        composed: true,
      }));
    }

  }


// export const EventMixin = dedupeMixin(EventMixinImplementation);
export const EventMixin = EventMixinImplementation;