
<template>
    <!--头像组件-->
    <div style="position:relative;" class="avatar-icon">

        <div id="person-info" @mouseleave="leaveAvator">
            <div id="avatar">
                <el-avatar class="head-icon" :size="size" :src="circleUrl" @mouseover="overAvator" />

            </div>
            <!--个人资料-->
            <el-collapse-transition>
                <el-card class="info-card" style="margin: 0;" v-show="cardVisible">
                    <h3 id="name">{{userName}}</h3>

                    <p v-for="item,index in info" :key="index"
                        :class="{'p-info-hover':index==hoverIndex,'p-info':index!=hoverIndex}" @mouseover="hover(index)"
                        @mouseleave="hoverIndex=-1">{{item}}</p>

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

export default {
    data() {
        return {
            circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            userName: "Header",
            size: 40,
            boxShow: false,
            info: ['name', 'pos', "const"],
            cardVisible: false,
            hoverIndex: -1,
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