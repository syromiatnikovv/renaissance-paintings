<template>
  <div class="contacts">
    <div class="contacts__item contacts__item_type_phone">
      +7 (495) 555-55-55
    </div>
    <div class="contacts__item contacts__item_type_address">
      г.Москва, ул. Расплетина, 24
    </div>
  </div>
</template>

<style lang="scss">
.contacts {
  display: flex;
  align-items: center;

  &__item {
    margin-left: 50px;
    color: #555;
    padding-left: 20px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 4px;
      left: 0px;
      height: 14px;
      width: 14px;
    }

    &_type_phone::before {
      background: url('../assets/icons/phone.svg') no-repeat;
    }

    &_type_address::before {
      background: url('../assets/icons/address.svg') no-repeat;
    }
  }
}
</style>
