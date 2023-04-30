// import {
//   dedupeMixin
// } from "@open-wc/dedupe-mixin";


const NormalizeMixinImplementation = (superclass) =>

  class NormalizeMixin extends superclass {

    _normalizeText(textToNormalizer, sizeMax, characterForComplete = '...') {
      if (!textToNormalizer) return '';
      const originTextToNormalizer = textToNormalizer.trim();
      return originTextToNormalizer.length > sizeMax ? `${originTextToNormalizer.substring(0, sizeMax)}${characterForComplete}` : originTextToNormalizer;
    }

    _generateUUID() {
      var d = new Date().getTime();
      var uuid = 'xxxxx4xxxyxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      return uuid;
    }

  }


// export const NormalizeMixin = dedupeMixin(NormalizeMixinImplementation);
export const NormalizeMixin = NormalizeMixinImplementation;