<template>
  <div>
    <!-- ヘッダー -->
    <default-header/>

    <!-- メイン -->
    <main>
      <NuxtPage/>
    </main>

    <!-- フッター -->
    <default-footer/>
  </div>
</template>

<script>
import DefaultHeader from "./components/header/DefaultHeader.vue";
import DefaultFooter from "./components/footer/DefaultFooter.vue";

export default {
  components: {
    DefaultHeader,
    DefaultFooter,
  }
}
</script>

<style lang="scss" scoped>

</style>
