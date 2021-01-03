<template>
  <div class="red-b">
    <div class="border__blue">
      SCSSのテストです。
    </div>
    <div class="background__primary">
      ScSSのグローバルのテスト
    </div>
    テストです。
    {{ testData }}
  </div>
</template>

<script>
export default {
  name:'TestComponent',
  data() {
    return {
      testData:'テストdataです'
    }
  }
}
</script>

<style scpoed lang='sass'>



</style>