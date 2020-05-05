<template>
  <modal class="modal-popup" name="add-player" :width="300" height="auto" :pivot-y="0.3" @opened="opened">
    <div class="modal-content">
      <div class="fieldset">
        <label>Name:</label>
        <div>
          <div>
            <input ref="playerinput" type="text" v-model="playername"/>
          </div>
        </div>
      </div>
      <div class="fieldset">
        <label>Geschlecht:</label>
        <div>
          <div>
            <input name="rsex" type="radio" v-model="sex" value="m">Männlich
            <span class="div">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <input name="rsex" type="radio" v-model="sex" value="f">Weiblich
          </div>
        </div>
      </div>
    </div>
    <div class="modal-actions">
      <button class="button button-primary" @click="save()">
          Speichern
          <i class="fa fa-check-circle-o"></i>
      </button>
      <button class="button btn-cancel" @click="close()">
          Abbrechen
          <i class="fa fa-times-circle-o"></i>
      </button>
    </div>
  </modal>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: [
    'name',
    'item'
  ],
  data() {
    return {
      playername: '',
      sex: ''
    };
  },
  computed: {
    ...mapGetters([
      'budgetDate'
    ]),
    member() {
      return {
        name: this.playername,
        sex: this.sex,
      };
    },
  },
  methods: {
    opened() {
      this.playername = '';
      this.sex = '';
      this.$refs.playerinput.focus();
    },
    close() {
      this.$modal.hide('add-player');
    },
    async save() {
      if (this.sex === '' || this.name === '') {
        this.$toasted.show('Bitte Name und Geschlecht ausfüllen.');
        return;
      }

      try {
        await this.$store.dispatch('createMember', this.member);
        await this.refresh();
        this.$toasted.success('Spieler hinzufügt.');
        this.close();
        this.$router.push('players');
      } catch (error) {
        this.$toasted.error('Error updating data.');
      }
    },
    async refresh() {
      try {
        await this.$store.dispatch('getMembers');
      } catch (error) {
        this.$toasted.error('Error updating data.');
      }
    }
  }
};
</script>

