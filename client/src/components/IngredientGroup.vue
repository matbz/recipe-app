<template>
  <div class="pure-g iggroup">
    <div class="pure-u-1 igheader">{{item.name}}</div>
    <ingredient
    v-for="item in iList"
    :item = "item"
    :key="item.id"
    :pfactor = pfactor
    >
    </ingredient>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Ingredient from './Ingredient';

export default {
  components: {
    Ingredient
  },
  props: [
    'item',
    'pfactor'
  ],
  data() {
    return {
      test: null
    };
  },
  computed: {
    ...mapGetters([
      'ingredients'
    ]),
    iList() {
      const xx = [
        ...this.ingredients
      ].map(i => ({ ...i }));

      let filtered = xx.filter(e => e.ingredientgroup_id === this.item.id);

      filtered.forEach(fe => {
        const arr = filtered.filter(ff => ff.name === fe.name && ff.measurement === fe.measurement);

        let sum = 0;

        arr.forEach(a => {
          sum += Number(a.quantity);
        });

        fe.quantity = sum;

        arr.forEach((item, index) => {
          if (index > 0) {
            filtered = filtered.filter(f2 => {
              return f2.position !== item.position;
            });
          }
        });
      });

      return filtered;
    }
  },
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
    }
  },
  created() {

  }
};
</script>
