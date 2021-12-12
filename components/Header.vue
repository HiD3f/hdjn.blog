<template>
<div class=" border-2 border-black row justify-between h-24">
  <div class="row justify-between flex-1 px-8">
    <div class="h-6">
      <HdjnLogo/>
    </div>
    <div>
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
