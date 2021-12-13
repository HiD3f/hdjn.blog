<template>
<div class=" border-2 border-black row justify-between h-24">
  <div class="row flex-1">
    <nuxt-link to="/" class="h-6 px-8 row justify-center border-r-2 border-black h-full">
      <div class=" h-6">  <HdjnLogo/></div>
    </nuxt-link>

    <div class="flex-1 bg-red-50 bg-opacity-40 h-full row justify-center">
      <nuxt-link to="/posts">
        <span class="link">All Posts</span>
      </nuxt-link>

      <nuxt-link to="/about">
        <span class="link">About Me</span>
      </nuxt-link>

      <nuxt-link to="/contact">
        <span class="link">Contact</span>
      </nuxt-link>
    </div>
  </div>
  <div class="border-l-2 border-black w-28  row justify-center ">
    <div v-for="index in 3" :key="index" class="">o</div>
  </div>
</div>
</template>

<style scoped>
.row {
  @apply flex flex-row items-center h-full
}

.link {
  @apply px-4 mx-2 text-xs uppercase font-black
}
</style>

<script>
export default {
  head() {
    return {
      title: "HDJN÷blog",
      // link: [
      //   {
      //     "rel":"stylesheet",
      //     "href": "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
      //   }
      // ]
    }
  }
}
</script>
