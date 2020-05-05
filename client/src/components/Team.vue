<template>
  <div style="height: 100%">
    <div class="pure-g header">
      <div class="pure-u-1-3 header-cancel">
      </div>
      <div class="pure-u-1-3 header-text">Team-Roulette</div>
      <div class="pure-u-1-3 header-logout">
      </div>
    </div>
    <div class="content3">
      <div class="pure-g add-list">
        <div style="width: 100%; height: 100%">
          <div class="pure-g budget-group">
            <div class="pure-u-10-24 budget-header-name">
              Team 1
            </div>
            <div class="pure-u-2-24 budget-header-name">
              vs.
            </div>
            <div class="pure-u-11-24 budget-header-name" style="padding-left: 18%">
              Team 2
            </div>
          </div>
          <team-item
          v-for="item in teams"
          :item = "item"
          :key="item.id"
          >
          </team-item>
        </div>
      </div>
    </div>
    <div class="pure-g footer">
      <button class="pure-u-1-4" @click="goTo('players')">
        <div><i class="fa fa-user footer-icon"></i></div>
        <div class="footer-text">Auswählen</div>
      </button>
      <button class="pure-u-1-4 active" @click="refresh()">
        <div><i class="fa fa-cubes footer-icon"></i></div>
        <div class="footer-text">Würfeln</div>
      </button>
      <button class="pure-u-1-4" @click="addPlayer()">
        <div><i class="fa fa-plus-circle footer-icon"></i></div>
        <div class="footer-text">Hinzufügen</div>
      </button>
      <button class="pure-u-1-4" @click="goTo('delete')">
        <div><i class="fa fa-trash footer-icon"></i></div>
        <div class="footer-text">Löschen</div>
      </button>
    </div>
    <modal-add-player name='add-player'></modal-add-player>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TeamItem from './TeamItem';
import ModalAddPlayer from './ModalAddPlayer';


export default {
  components: {
    TeamItem,
    ModalAddPlayer
  },
  computed: {
    ...mapGetters([
      'members'
    ]),
    teams() {
      const dataFlat = [];
      const data = [];
      let index = 0;
      const females = this.members.filter(e => e.active && e.sex === 'f');
      const males = this.members.filter(e => e.active && e.sex === 'm');

      while (females.length > 0) {
        index = Math.floor(Math.random() * females.length);
        dataFlat.push(females[index]);
        females.splice(index, 1);
      }

      while (males.length > 0) {
        index = Math.floor(Math.random() * males.length);
        dataFlat.push(males[index]);
        males.splice(index, 1);
      }

      for (let i = 0; i < dataFlat.length; i += 2) {
        const arr = [];

        if (dataFlat[i]) {
          arr.push(dataFlat[i].name);
        }

        if (dataFlat[i + 1]) {
          arr.push(dataFlat[i + 1].name);
        }

        data.push(arr);
      }

      return data;
    }
  },
  methods: {
    goTo(routeName) {
      this.$router.push({ name: routeName });
    },
    refresh() {
      this.$router.go();
    },
    addPlayer() {
      this.$modal.show('add-player');
    }
  }
};
</script>

