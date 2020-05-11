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
      return this.ingredients.filter(e => e.ingredientgroup_id === this.item.id);
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
