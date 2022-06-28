<template>
  <div>
    <MyAPlayer/>
    <Nav/>
    <Header style="background: url(https://ftp.stackoverflow.wiki/bolo/background/butterfly/4.jpg) center center / cover no-repeat rgb(34, 34, 34);height: 100vh" />
    <introduction/>
  </div>
</template>

<script scoped>
import Nav from "@/components/index/Nav";
import Header from "@/components/index/Header";
import MyAPlayer from "@/components/index/MyAPlayer";
import introduction from "@/components/sidebar/introduction";

export default {
  name: 'App',
  components: {
    Header,
    Nav,
    MyAPlayer,
    introduction
  }
}
</script>

<!--此处定义全局的css-->
<style>
  body{
    height: 1800px;
    margin: 0;
    /*背景渐变色*/
    background: -webkit-linear-gradient(30deg, rgba(255,165,150,0.5) 5%, rgba(0,228,255,0.35)) 0 0/cover;
    background: -moz-linear-gradient(30deg, rgba(255,165,150,0.5) 5%, rgba(0,228,255,0.35)) 0 0/cover;
    background: -o-linear-gradient(30deg, rgba(255,165,150,0.5) 5%, rgba(0,228,255,0.35)) 0 0/cover;
    background: -ms-linear-gradient(30deg, rgba(255,165,150,0.5) 5%, rgba(0,228,255,0.35)) 0 0/cover;
    background: linear-gradient(60deg, rgba(255,165,150,0.5) 5%, rgba(0,228,255,0.35)) 0 0/cover;
  }
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>
