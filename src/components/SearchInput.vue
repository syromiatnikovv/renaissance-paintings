<template>
  <div class="search-input">
    <Input
      type="text"
      placeholder="Поиск по названию картины"
      class="search-input__input"
    />
    <Button class="search-input__button">Найти</Button>
  </div>
</template>

<script>
import Input from '@/components/Input'
import Button from '@/components/Button'

export default {
  components: {
    Input,
    Button
  }
}
</script>

<style lang="scss">
.search-input {
  display: flex;
  align-items: stretch;
}

.search-input__input {
  min-width: 295px;
}

.search-input__button {
  margin-left: -1px;
  padding: 14px 36px;
  color: #fff;
}
</style>
