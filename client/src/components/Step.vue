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
      let no = 0;

      this.ingredients.forEach(e => {
        no = Ratio.parse(e.quantity * this.pfactor).toQuantityOf(2, 3, 4, 8);

        replacements[`%${e.identifier}%`] = `(${no.toLocaleString()} ${e.measurement})`;
      });

      return this.item.step.replace(/%\w+%/g, function (all) {
        return replacements[all] || all;
      });
    }
  },
  methods: {

  },
  created() {

  }
};
</script>
