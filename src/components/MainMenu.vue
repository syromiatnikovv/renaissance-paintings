<template>
  <nav class="main-menu">
    <ul class="main-menu__list">
      <li v-for="(link, index) of links" class="main-menu__item" :key="index">
        <a :href="link.url" class="main-menu__link">{{ link.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        title: 'Каталог',
        url: '#'
      },
      {
        title: 'Доставка',
        url: '#'
      },
      {
        title: 'Оплата',
        url: '#'
      },
      {
        title: 'Контакты',
        url: '#'
      },
      {
        title: 'О галерее',
        url: '#'
      }
    ]
  })
}
</script>

<style lang="scss">
@import '../scss/variables.scss';

.main-menu {
  display: flex;
  align-items: center;

  &__list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &__link {
    text-decoration: none;
    color: $text-color;
    padding: 10px 24px;
    transition: color 0.15s ease-in-out;

    &:hover {
      color: lighten($text-color, 40%);
    }
  }
}
</style>
