<template>
    
<!-- Child.vue(Child) -->
<div>
  <hr>
  Child counter : {{ childCounter }} <br>
</div>

</template>

<script>
export default {
  // 상위 컴포넌트에서 내려준 counter 속성을 num로 받음
  // props: ["num"]
  computed: {
      childCounter(){
        return this.$store.getters.getCounter;
      }
    },
}
</script>