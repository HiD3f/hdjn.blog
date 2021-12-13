<template>

<div class="page">
  <Header/>

  <div class="page-body">
    <div> index</div>
    <div>
        <nuxt-content :document="doc" />
    </div>
  </div>


</div>

</template>

<style scoped>
  .page{
    @apply bg-yellow-200
  }

  .page-body{
    @apply bg-red-300
  }

</style>

<script>
export default {
  async asyncData({$content}){
    const doc = await $content("index").fetch();
    return {doc};
  }
}
</script>
