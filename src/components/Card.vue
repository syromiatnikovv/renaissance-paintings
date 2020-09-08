<template>
  <div class="card">
    <img class="card__image" src="../assets/pictures/1.png" />

    <div class="card__body">
      <h2 class="card__title">"Рождение Венеры"<br />Сандро Боттичелли</h2>

      <div class="card__price-block">
        <div class="card__price_style_strikethrough">1 000 000 $</div>
        <div class="card__price">1 000 000 $</div>
      </div>

      <Button class="card__button">Купить</Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  components: {
    Button
  }
}
</script>

<style lang="scss">
.card {
  display: flex;
  flex: 1 0 22%;
  flex-direction: column;
  max-width: 280px;
  border: 1px solid #e1e1e1;
  margin: 0 16px 32px;

  &__image {
    width: 100%;
    flex-shrink: 0;
  }

  &__body {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    padding: 20px 24px 24px;
  }

  &__title {
    margin-bottom: 22px;
    flex: 1 0 auto;
  }

  &__price-block {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex: 1 0 auto;
  }

  &__price {
    font-size: 16px;
    font-weight: 700;

    &_style_strikethrough {
      color: #a0a0a0;
      font-weight: 300;
      font-size: 14px;
      text-decoration: line-through;
    }
  }

  &__button {
    flex: 0 1 auto;
    //background-color: #382e2b;
  }

  &_disabled {
    opacity: 0.5;
  }
}
</style>
