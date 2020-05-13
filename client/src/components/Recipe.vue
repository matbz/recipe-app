d<template>
  <div>
    <div class="contents3">
    <div class="rimg" :style="{ backgroundImage: 'url(' + recipe.imgpath + ')' }"></div>
      <div class="pure-g">
        <div class="recipe" style="width: 100%; height: 100%">
          <div class="pure-u-1 recipeh_text">{{recipe.name}}</div>
          <div v-if="iList.length > 0" class="pure-u-1 recipe_text">Zutaten</div>
          <div v-else class="pure-u-1 recipe_text">Keine Zutaten angegeben</div>
          <div v-if="iList.length > 0" class="pure-g portions">
            <div class="pure-u-1-3"><i class="fa fa-minus-circle pbutton" @click="adjustPortions(-1)"></i></div>
            <div class="pure-u-1-3"><span class="portionnumber">{{this.portions}}</span>{{portionString}}</div>
            <div class="pure-u-1-3"><i class="fa fa-plus-circle pbutton" @click="adjustPortions(1)"></i></div>
          </div>
          <div v-if="iList.length > 0">
          <ingredient-group
          v-for="item in igList"
          :item = "item"
          :pfactor = pFactor
          :key="item.id"
          >
          </ingredient-group>
          </div>
          <div v-if="stepList.length > 0" class="pure-u-1 recipe_text2">Zubereitung</div>
          <div v-else class="pure-u-1 recipe_text2">Keine Zubereitungsschritte angegeben</div>
          <step
          v-for="item in stepList"
          :item = "item"
          :pfactor = pFactor
          :key="item.name"
          >
          </step>
       </div>
      </div>
    </div>
    <div class="pure-g footer">
      <button class="pure-u-1-3" @click="$router.back()">
        <div><i class="fa fa-arrow-left footer-icon thin"></i></div>
        <div class="footer-text">Zurück</div>
      </button>
      <button :class="{ active: isRecipeActive }" class="pure-u-1-3" @click="goTo('categories')">
        <div><i class="fa fa-clone footer-icon"></i></div>
        <div class="footer-text">Kategorien</div>
      </button>
      <button :class="{ active: isSearchActive }" class="pure-u-1-3" @click="goTo('search')">
        <div><i class="fa fa-search footer-icon thin"></i></div>
        <div class="footer-text">Suchen</div>
      </button>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import { mapGetters } from 'vuex';
import IngredientGroup from './IngredientGroup';
import Step from './Step';

export default {
  components: {
    IngredientGroup,
    Step
  },
  props: [
    'id'
  ],
  beforeRouteEnter(to, from, next) {
    if (store.getters.recipes.length === 0) {
      store.dispatch('load').then(res => next(vm => {
        vm.from = from;
      }));
    } else {
      next(vm => {
        vm.from = from;
      });
    }
  },
  data() {
    return {
      recipe: null,
      portions: null,
      from: null
    };
  },
  computed: {
    ...mapGetters([
      'recipes',
      'steps',
      'ingredientGroups',
      'ingredients'
    ]),
    portionString() {
     if (this.portions > 1) {
       return 'Portionen';
     }

     return 'Portion';
    },
    stepList() {
      const sortedList = [];
      const data = this.steps.filter(e => e.recipe_id === Number(this.id));

      data.forEach((e, index) => {
        sortedList.push({
          id: e.id,
          step: e.step,
          position: index + 1,
          recipe_id: e.recipe_id
        });
      });

      return sortedList;
    },
    igList() {
      return this.ingredientGroups.filter(e => e.recipe_id === Number(this.id));
    },
    iList() {
      if (this.igList.length > 0) {
        return this.ingredients.filter(e => e.ingredientgroup_id === this.igList[0].id);
      }
      return [];
    },
    pFactor() {
      return this.portions / this.recipe.portions;
    },
    isRecipeActive() {
      if (this.from != null) {
        return this.from.name === 'recipes';
      }
      return false;
    },
    isSearchActive() {
      if (this.from != null) {
        return this.from.name === 'search';
      }
      return false;
    },
  },
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
    },
    adjustPortions(no) {
      if (this.portions + no >= 1) this.portions += no;
    }
  },
  created() {
    this.recipe = this.recipes.filter(e => e.id === Number(this.id))[0];

    this.portions = this.recipe.portions;
  }
};
</script>

