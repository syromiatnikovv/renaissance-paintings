<template>
  <main class="main">
    <Wrapper>
      <h1 class="main__title">Картины эпохи Возрождения</h1>

      <CardsList />
    </Wrapper>
  </main>
</template>

<script>
import Wrapper from '@/components/Wrapper'
import CardsList from '@/components/CardsList'

export default {
  components: {
    Wrapper,
    CardsList
  }
}
</script>

<style lang="scss">
.main {
  background: #f6f3f3;
  padding: 45px 0;
  flex-grow: 1;

  &__title {
    margin-bottom: 40px;
  }
}
</style>
