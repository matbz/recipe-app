<template>
  <div class="pure-g ig">
    <div class="pure-u-1-2 igr igm">{{quantity}} {{item.measurement}}</div>
    <div class="pure-u-1-2 igr">{{item.name}}</div>
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

    ]),
    quantity() {
      if (this.item.quantity > 0) {
        return Ratio.parse(this.item.quantity * this.pfactor).toQuantityOf(2, 3, 4, 8).toLocaleString();
      }

      return '';
    }
  },
  methods: {

  }
};
</script>
