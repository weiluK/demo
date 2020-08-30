<template>
  <div>
    <p>姓名：{{user}}</p>
    <p>{{count}}</p>
    <p>{{$store.getters.double}}</p>
    <button @click="changeData">改变数据++</button>
    <button @click="changeData2">改变数据--</button>
    <button @click="updataModel">改变模块的数据</button>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  provide() {
    return {
      obj: this.msg,
    };
  },
  data() {
    return {
      msg: {
        name: "这是数据",
        // count:1
      },
    };
  },

  methods: {
    changeData() {
      console.log("触发事件");
      this.$store.commit("updatedcount");
    },
    changeData2() {
      this.$store.dispatch("add");
    },
    updataModel() {
      console.log("获取this.$store.state.count", this.$store);
      // this.$store.commit("/login/updatedUser", { name: 22222 });
      console.log(this.user.name);
      if(this.user.name!=undefined){
        this.user.name++
      }

      this.updatedUser({ name:   this.user.name?this.user.name:'1' });
    },
    ...mapMutations("login", ["updatedUser"]),
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    ...mapState("login", {
      user: (state) => state.user,
    }),
  },
};
</script>
<style scoped>
</style>