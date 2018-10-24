<template>
  <div>
    <Header></Header>
    <SideBar></SideBar>
    <AppMain></AppMain>
  </div>
</template>

<script>
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'
import AppMain from '@/components/AppMain'

  export default {
    components: {
      Header,
      SideBar,
      AppMain
    }
  }
</script>

<style scoped>

</style>