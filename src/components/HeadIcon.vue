<template>
  <!--头像组件-->
  <div class="avatar-icon" style="position:relative;">

    <div id="person-info" @mouseleave="leaveAvator">
      <div id="avatar">
        <el-avatar :size="size" :src="circleUrl" class="head-icon" @mouseover="overAvator"/>

      </div>
      <!--个人资料-->
      <el-collapse-transition>
        <el-card v-show="cardVisible" class="info-card" style="margin: 0;">
          <h3 id="name">{{ userName }}</h3>

          <p v-for="item,index in info" :key="index"
             :class="{'p-info-hover':index==hoverIndex,'p-info':index!=hoverIndex}" @mouseleave="hoverIndex=-1"
             @mouseover="hover(index)">{{ item }}</p>

          <el-button style="width:100%" type="danger">
            退出登录
            <slot>

            </slot>
          </el-button>
        </el-card>
      </el-collapse-transition>

    </div>

  </div>


</template>

<script>

import $ from "jquery";

export default {
  mounted() {
    this.$nextTick(() => {
      this.getUser()
    })
  },
  data() {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      userName: "Header",
      size: 40,
      boxShow: false,
      info: ['name', 'pos', "const"],
      cardVisible: false,
      hoverIndex: -1,
      url:"http://localhost:8080",
      token: localStorage.getItem('token'),
    }
  }, methods: {
    //控制用户卡片出现
    handleCard: function () {
      this.cardVisible = !this.cardVisible;
    },
    //鼠标放在头像上出现的效果
    overAvator: function () {
      this.size = 80;
      this.cardVisible = true;
    },
    //鼠标离开头像上出现的效果
    leaveAvator: function () {
      this.size = 40;
      this.cardVisible = false;
    },
    hover(index) {
      this.hoverIndex = index;
    }, getUser: function () {
      const that = this;

      $.ajax({
        url: this.url + "/user/queryUser",
        type: "post",
        headers: {
          'Authorization': this.token
        },
        success: function (res) {
          if (res.data == null){
            console.log(res)
            console.log("用户未登录")
          }else {
            console.log(res)
            that.circleUrl = res.data.icon;
            that.userName = res.data.uname;
          }

        },
        error: function (error) {
          console.log(error)
        }
      })
    }
  }
}
</script>

<style>
.avatar-icon {
  height: 10vh;
}

#avatar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

#person-info {
  z-index: 100;
  text-align: center;
  position: absolute;
  width: 100%;
}

.info-card {
  text-align: center;
  position: relative;
  top: -30px;
}

.p-info {
  height: 30px;
  width: 100%;
  text-decoration: 30px;
}

.p-info-hover {
  background-color: rgb(182, 182, 181);
  height: 30px;
  width: 100%;
  text-decoration: 30px;
}

.head-icon {
  z-index: 100;
  transition: all 400ms linear;
}
</style>
