import axios from 'axios'

export default {
  namespaced: true,

  state: {
    pictures: [
      {
        id: 1,
        imgSrc: require('@/assets/pictures/1.jpg'),
        title: 'Рождение венеры',
        autor: 'Сандро Боттичелли',
        price: '1 000 000 $',
        oldPrice: '2 000 000 $',
        isInCart: false,
        isSold: false
      },
      {
        id: 2,
        imgSrc: require('@/assets/pictures/2.jpg'),
        title: 'Тайная вечеря',
        autor: 'Леонардо да Винчи',
        price: '3 000 000 $',
        oldPrice: null,
        isInCart: false,
        isSold: false
      },
      {
        id: 3,
        imgSrc: require('@/assets/pictures/3.jpg'),
        title: 'Сотворение Адама',
        autor: 'Микеланджело',
        price: '5 000 000 $',
        oldPrice: '6 000 000 $',
        isInCart: false,
        isSold: false
      },
      {
        id: 4,
        imgSrc: require('@/assets/pictures/4.jpg'),
        title: 'Урок анатомии',
        autor: 'Рембрандт',
        price: null,
        oldPrice: null,
        isInCart: false,
        isSold: true
      }
    ]
  },

  getters: {
    pictures: state => state.pictures
  },

  mutations: {
    toggleCart(state, id) {
      state.pictures.map(item => {
        if (item.id === id) item.isInCart = !item.isInCart
        return item
      })
    }
  },

  actions: {
    async toggleCart({ commit }, id) {
      try {
        await axios.get('https://jsonplaceholder.typicode.com/posts/1')

        commit('toggleCart', id)
      } catch (e) {
        throw new Error('Ошибка')
      }
    }
  }
}
