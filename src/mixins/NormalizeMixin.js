// import {
//   dedupeMixin
// } from "@open-wc/dedupe-mixin";


const NormalizeMixinImplementation = (superclass) =>

  class NormalizeMixin extends superclass {

    _normalizeText(textToNormalizer, sizeMax, characterForComplete = '...') {
      if (!textToNormalizer) return '';
      const originTextToNormalizer = textToNormalizer.trim();
      return originTextToNormalizer.length > sizeMax ? `${originTextToNormalizer.substring(0, sizeMax)}${characterForComplete}` : originNameExercice;
    }

  }


// export const NormalizeMixin = dedupeMixin(NormalizeMixinImplementation);
export const NormalizeMixin = NormalizeMixinImplementation;