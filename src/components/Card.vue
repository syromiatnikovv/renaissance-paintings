<template>
  <div class="card" :class="picture.isSold ? 'card_disabled' : ''">
    <img class="card__image" :src="picture.imgSrc" />

    <div class="card__body">
      <h2 class="card__title">
        &laquo;{{ picture.title }}&raquo;
        <br />
        {{ picture.autor }}
      </h2>

      <div v-if="picture.isSold" class="card__sold-text">
        Продана на аукционе
      </div>

      <template v-else>
        <div class="card__price-block">
          <div v-if="picture.oldPrice" class="card__price_style_strikethrough">
            {{ picture.oldPrice }}
          </div>
          <div class="card__price">{{ picture.price }}</div>
        </div>

        <Button class="card__button">Купить</Button>
      </template>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  components: {
    Button
  },

  props: {
    picture: Object
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

  &__sold-text {
    font-size: 16px;
    font-weight: 700;
  }

  &_disabled {
    opacity: 0.5;
  }
}
</style>
