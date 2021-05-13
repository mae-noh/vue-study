
<template>
    
  <!-- App.vue(Parent) -->
  <div id="app">
    <!-- Template 표현식은 최대한 간단하게 -->
    Parent counter : {{ parentCounter }} <br>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>
    <!-- Child 컴포넌트를 등록하고 counter 데이터 속성을 props로 전달한다. -->
    <child></child>
  </div>

</template>

<script>
  import Child from "./Child.vue";
  import { mapGetters } from 'vuex'

  export default {
    components: {
      // Child 컴포넌트를 하위 컴포넌트로 등록
      child: Child
    },
    // getters - computed
    computed:
      // 컴포넌트 자체에서 사용할 computed 속성과 함께 사용할 수 없음.
      // 해결방안 : ES6 문법 ... 사용
      mapGetters({
        // vuex의 getters에 선언된 이름 getCounter 연결
        parentCounter : 'getCounter'
      }),
    // mutations - methods
    methods: {
      // 이벤트 추가
      // 직접 접근 방식
      // addCounter(){
      //   this.$store.state.counter++;
      // }
      // subCounter(){
      //   this.$store.state.counter--;
      // }
      addCounter() {
        // commit을 이용하여 mutations 이벤트 호출
        this.$store.commit('addCounter', 10);
        console.log(this.$store);
      },
      subCounter() {
        this.$store.commit('subCounter', 10);
        console.log(this.$store);
      },
    }
  };

</script>