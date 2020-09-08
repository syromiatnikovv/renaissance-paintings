<template>
  <div class="cards-list">
    <Card />
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  components: {
    Card
  }
}
</script>

<style lang="scss">
.cards-list {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin-left: -16px;
  margin-right: -16px;
}
</style>
