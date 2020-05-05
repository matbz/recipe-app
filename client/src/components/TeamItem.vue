<template>
  <div class="pure-g budget-group2">
    <div class="pure-u-10-24 team">
      {{ item[0]}}
    </div>
    <div class="pure-u-2-24 team">
    </div>
    <div class="pure-u-11-24 team" style="padding-left: 18%">
      {{ item[1] }}
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'item'
  ]
};
</script>
