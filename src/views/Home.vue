<template>
  <div class="home">
    <Homepage></Homepage>
  </div>
</template>

<script>

import Homepage from '@/components/Homepage.vue';

export default {
  name: 'Home',
  data(){
    return {
      name: '',
      email: '',
      opinion: '',
    }
  },
  components: {
    Homepage,
  },
  
}
</script>
<style scoped>


</style>
