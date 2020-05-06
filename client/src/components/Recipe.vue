d<template>
  <div style="height: 100%">
    <div class="pure-g header">
      <div class="pure-u-1-1 header-text">{{this.recipe.name}}</div>
    </div>
    <div class="content2">
      <div class="pure-g">
        <div class="recipe" style="width: 100%; height: 100%">
          <div class="pure-u-1 recipe_text">Zutaten</div>
          <div class="pure-g portions">
            <div class="pure-u-1-3"><i class="fa fa-minus-circle pbutton" @click="adjustPortions(-1)"></i></div>
            <div class="pure-u-1-3"><span class="portionnumber">{{this.portions}}</span>Portionen</div>
            <div class="pure-u-1-3"><i class="fa fa-plus-circle pbutton" @click="adjustPortions(1)"></i></div>
          </div>
          <div class="pure-g iggroup">
            <div class="pure-u-1 igheader">Marinade</div>
            <div class="pure-g ig">
              <div class="pure-u-1-2 igr igm">60 g</div>
              <div class="pure-u-1-2 igr">Jogurt</div>
            </div>
            <hr>
            <div class="pure-g ig">
              <div class="pure-u-1-2 igr igm">1000 Stück</div>
              <div class="pure-u-1-2 igr">Hähnchenfleisch</div>
            </div>
            <hr>
            <div class="pure-g ig">
              <div class="pure-u-1-2 igr igm">1000 Stück</div>
              <div class="pure-u-1-2 igr">Hähnchenfleisch</div>
            </div>
            <hr>
            <div class="pure-g ig">
              <div class="pure-u-1-2 igr igm">1000 Stück</div>
              <div class="pure-u-1-2 igr">Hähnchenfleisch</div>
            </div>
            <hr>
          </div>
          <div class="pure-g iggroup">
            <div class="pure-u-1 igheader">Marinade</div>
            <div class="pure-g ig">
              <div class="pure-u-1-2 igr igm">60 g</div>
              <div class="pure-u-1-2 igr">Jogurt</div>
            </div>
            <hr>
            <div class="pure-g ig">
              <div class="pure-u-1-2 igr igm">1000 Stück</div>
              <div class="pure-u-1-2 igr">Hähnchenfleisch</div>
            </div>
            <hr>
            <div class="pure-g ig">
              <div class="pure-u-1-2 igr igm">1000 Stück</div>
              <div class="pure-u-1-2 igr">Hähnchenfleisch</div>
            </div>
            <hr>
            <div class="pure-g ig">
              <div class="pure-u-1-2 igr igm">1000 Stück</div>
              <div class="pure-u-1-2 igr">Hähnchenfleisch</div>
            </div>
            <hr>
          </div>
          <div class="pure-u-1 recipe_text2">Zubereitung</div>
          <div class="pure-g step">
            <div class="pure-u-1 stepheader">Schritt 1</div>
            <div class="pure-u-1-1 steptext">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
          </div>
          <div class="pure-g step">
            <div class="pure-u-1 stepheader">Schritt 2</div>
            <div class="pure-u-1-1 steptext">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
          </div>
          <div class="pure-g step">
            <div class="pure-u-1 stepheader">Schritt 3</div>
            <div class="pure-u-1-1 steptext">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
          </div>
       </div>
      </div>
    </div>
    <div class="pure-g footer">
      <button class="pure-u-1-3" @click="$router.go(-1)">
        <div><i class="fa fa-arrow-left footer-icon"></i></div>
        <div class="footer-text">Zurück</div>
      </button>
      <button class="pure-u-1-3 active" @click="goTo('categories')">
        <div><i class="fa fa-clone footer-icon"></i></div>
        <div class="footer-text">Kategorien</div>
      </button>
      <button class="pure-u-1-3">
        <div><i class="fa fa-search footer-icon"></i></div>
        <div class="footer-text">Suchen</div>
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import IngredientGroup from './IngredientGroup';

export default {
  components: {
    IngredientGroup
  },
  props: [
    'id'
  ],
  data() {
    return {
      recipe: null,
      portions: null
    };
  },
  computed: {
    ...mapGetters([
      'recipes'
    ])
  },
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
    },
    adjustPortions(no) {
      if (this.portions + no >= 1) this.portions += no;
    },
    async getRecipe() {
      await this.$store.dispatch('getRecipe', this.id);
    }
  },
  async created() {
    if (this.recipes.length === 0) await this.getRecipe();

    if (this.recipes.length === 1) {
      this.recipe = this.recipes[0];
    } else {
      this.recipe = this.recipes[this.id - 1];
    }

    this.portions = this.recipe.portions;
  }
};
</script>

