<script lang="ts" setup>
import useAccountStore from '../../store/account.store'

const accountStae = useAccountStore()
</script>

<template>
  <div>
    <div class="head">
      <div class="name-box">
        <span>你好：{{ accountStae.user.name }}</span>
        <div class=""></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.head {
  width: 100%;
  height: 50px;
  background-color: #80d0c7;
  background-image: linear-gradient(180deg, #80d0c7 0%, #076ba6 1%, #425872 100%);
  display: flex;
  align-items: center;
  position: relative;
  .name-box {
    position: absolute;
    right: 30px;
    transform: translateX(-100%);
    color: #fff;
  }
}
</style>
