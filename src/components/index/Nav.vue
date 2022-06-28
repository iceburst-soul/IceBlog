<template>
  <nav id="nav" :class="{fixed:isFixed, visible:isVisible}"
       style="opacity: 1; animation: 1s ease 0s 1 normal none running headerNoOpacity;">
    <span id="blog_name" class="pull-left">
        <a id="site-name" class="blog_title" href="https://demo.stackoverflow.wiki">Iceburst's Blog ✨</a>
    </span>
    <span class="pull-right menus">
        <div class="menus_items">
            <div class="menus_item">
                <a class="site-page" href="https://demo.stackoverflow.wiki">
                    <i class="fa-fw fas fa-home"></i>
                    <span>
                        首页
                    </span>
                </a>
            </div>
            <div class="menus_item">
                <a class="site-page" href="https://demo.stackoverflow.wiki/timeaxis">
                    <i class="fa-fw fas fa-archive"></i>
                    <span> 时间轴</span>
                </a>
            </div>
            <div class="menus_item">
                <a class="site-page" href="https://demo.stackoverflow.wiki/tags.html">
                    <i class="fa-fw fas fa-tags"></i>
                    <span> 标签</span>
                </a>
            </div>
            <div class="menus_item">
                <a class="site-page" href="https://demo.stackoverflow.wiki/categories.html">
                    <i class="fa-fw fas fa-folder-open"></i>
                    <span> 分类</span></a>
            </div>
            <div class="menus_item">
                <a class="site-page" href="https://demo.stackoverflow.wiki/links.html">
                    <i class="fa-fw fas fa-link"></i>
                    <span> 友情链接</span>
                </a>
            </div>
            <div class="menus_item">
                <a class="site-page">
                    <span class="footer__heart">❤️更多</span>
                    <i class="fas fa-chevron-down menus-expand"></i>
                </a>
                <ul class="menus_item_child">
                    <li>
                        <a class="site-page" href="/github" target="_self">
                            <i class="fa-fw fas">
                                <img class="page-icon" src="">
                            </i>
                            <span> 我的开源</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <span class="toggle-menu close">
            <a class="site-page">
                <i class="fas fa-bars fa-fw"></i>
            </a>
        </span>
    </span>
  </nav>
</template>
<script>
/*导航栏样式*/
import "@/assets/css/nav.css";

export default {
  name: 'Nav',
  props: {
    msg: String
  },
  data() {
    return {
      isFixed: true,
      isVisible: false,
      topDif: null,
    }
  },
  mounted() {
    document.onscroll = () => {
      this.topDif = document.documentElement.scrollTop
    }
  },
  watch: {
    topDif: {
      handler(newVal, oldVal) {
        //下滑且滑出导航栏范围时：隐藏
        if (newVal > oldVal && newVal > 42 && oldVal != null) {
          this.isVisible = false
          this.isFixed = true
        } else if (newVal < oldVal && newVal != 0) {
          //上滑且未到顶部时：透明板辅助显示
          this.isVisible = true
          this.isFixed = true
        } else if (oldVal == null && document.documentElement.scrollTop > 42) {
          //刷新且页面位置在导航栏下方时：透明板辅助显示
          setTimeout(()=>{
            // this.isFixed = true
            this.isVisible = true
          },10)
        } else if (oldVal == null && document.documentElement.scrollTop < 42) {
          //刷新且页面位置在导航栏范围内时：正常显示
          this.isFixed = false
          this.isVisible = false
        } else if (newVal == 0 && oldVal != null) {
          //上滑且回到顶部时：正常显示
          this.isVisible = false
          this.isFixed = false
        }
      },
      immediate: true
    }
  }

}
</script>

<style scoped>


body {
  position: relative;
  min-height: 100%;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Lato, Roboto, 'PingFang SC', 'Microsoft YaHei', sans-serif;
}

a:-webkit-any-link {
  /*去除用户代理表的默认设置*/
  text-decoration: none;
}
</style>