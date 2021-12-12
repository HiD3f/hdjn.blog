<template>
<div class=" border-2 border-black row justify-between h-24">
  <div class="row flex-1">
    <div class="h-6 px-8 row justify-center border-r-2 border-black h-full">
      <div class=" h-6">  <HdjnLogo/></div>
    </div>
    <div class="flex-1 bg-red-50 bg-opacity-40 h-full row justify-center">
      <a href="" v-for="index in 3" :key="index" class=" px-4 mx-2 text-xs uppercase font-black">lien</a>
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
</style>
