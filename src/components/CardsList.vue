<template>
  <div class="cards-list">
    <Card v-for="picture of pictures" :key="picture.id" :picture="picture" />
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  components: {
    Card
  },

  computed: {
    pictures() {
      return this.$store.getters['pictures/pictures']
    }
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
