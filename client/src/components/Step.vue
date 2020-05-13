<template>
  <div class="pure-g step">
    <div class="pure-u-1 stepheader">Schritt {{item.position}}</div>
    <div class="pure-u-1-1 steptext">{{text}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

const Ratio = require('lb-ratio');

export default {
  props: [
    'item',
    'pfactor'
  ],
  computed: {
    ...mapGetters([
      'ingredients'
    ]),
    text() {
      const replacements = {};
      const replacementsFull = {};

      let no = 0;

      this.ingredients.forEach(e => {
        no = Ratio.parse(e.quantity * this.pfactor).toQuantityOf(2, 3, 4, 8);

        if (e.measurement && e.measurement.length > 0) {
          replacements[`%${e.identifier}%`] = `(${no.toLocaleString()} ${e.measurement})`;
          replacementsFull[`§${e.identifier}§`] = `${e.name} (${no.toLocaleString()} ${e.measurement})`;
        } else {
          replacements[`%${e.identifier}%`] = `(${no.toLocaleString()})`;
          replacementsFull[`§${e.identifier}§`] = `${e.name} (${no.toLocaleString()})`;
        }
      });

      const rep = this.item.step.replace(/%\w+%/g, function (all) {
        return replacements[all] || all;
      });

      return rep.replace(/§\w+§/g, function (all2) {
        return replacementsFull[all2] || all2;
      });
    }
  },
  methods: {

  },
  created() {

  }
};
</script>
