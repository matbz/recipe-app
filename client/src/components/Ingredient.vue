<template>
  <div class="pure-g ig">
    <div class="pure-u-1-2 igr igm">{{Number(quantity).toLocaleString()}} {{item.measurement}}</div>
    <div class="pure-u-1-2 igr">{{item.name}}</div>
  </div>  
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: [
    'item',
    'pfactor'
  ],
  computed: {
    ...mapGetters([

    ]),
    quantity() {
      return this.item.quantity * this.pfactor;
    }
  },
  methods: {

  }
};
</script>
