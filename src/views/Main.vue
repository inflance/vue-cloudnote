<template>
  <el-container>
    <el-aside class="header" width="15vw">
      <HeadIcon>
      </HeadIcon>
      <AsideNav :classifiData="classifiData" @handle-click="handleNavClick">

      </AsideNav>
    </el-aside>
    <el-aside class="header" width="20vw">
      <ScroBar :currentIndex="currentIndex" :noteData="noteData" @handle-click="handleClick" @handle-btn-click="addNote" ></ScroBar>
    </el-aside>
    <el-container>
      <el-header>

        <div class="title">
          <el-input v-model="noteData[currentIndex].noteTitle" :placeholder="placeholder" class="title-input"
                    maxlength="30" style="font-size:x-large;height: 75px;
    border: 0;" @input="onInput">
          </el-input>
        </div>
        <div class="logo">

        </div>
      </el-header>
      <el-main>
        <MdEditor>

        </MdEditor>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
//import TitleInput from '../components/TitleInput.vue';
import MdEditor from '../components/MdEditor.vue';
import HeadIcon from '../components/HeadIcon.vue';
import ScroBar from '../components/ScroBar.vue';
import AsideNav from '../components/AsideNav.vue';
import $ from "jquery"

export default {
  components: { /*TitleInput,*/ MdEditor, HeadIcon, ScroBar, AsideNav,},
  mounted() {
    this.$nextTick(() => {
      this.getClassifiData();
      this.getNoteData()
    })
  },
  data() {
    return {
      url: "https://32y1255s71.zicp.fun",
      text: "",
      classifiData: [{}],
      noteData: [
        {
          classificID: '1',
          noteID: '1',
          noteTitle: "线性代数",
          noteContent: "121212121",
          descTime: '2022',
          createTime: '2022'
        }
      ],
      token: localStorage.getItem('token'),
      currentIndex: 0,
      currentCIndex: 0,
      placeholder: '请输入标题'
    }
  }, methods: {
    handleNavClick: function (id) {
      this.currentCIndex = id;
    }, onInput() {
      console.log(this.noteData[this.currentIndex].noteTitle)
    }, getClassifiData: function () {
      const that = this;
      // $.post(this.url+"/noteclassific/queryNoteclassific",function (data){
      //   console.log(data)
      //   that.classifiData=data.data
      // })
      $.ajax({
        url: this.url + "/noteclassific/queryNoteclassific",
        type: "post",
        headers: {
          // 'Authorization': this.token
        },
        success: function (data) {
          if (data.data.length === 0){
            console.log(data)
          }else {
            console.log(data)
            that.classifiData = data.data
            that.currentCIndex = data.data[0].classificID;
          }


        },
        error: function (error) {
          console.log(error)
        }
      })
    }, getNoteData: function () {
      const that = this;
      // $.post(this.url+"/note/queryNoteList",{classId:classId},function (data){
      //   console.log(data)
      //   that.noteData=data.data
      // })
      console.log(this.token)
      $.ajax({
        headers: {
          'Authorization': this.token
        },
        type: "post",
        data: {'classId': this.currentCIndex},
        url: this.url + "/note/queryNoteList",
        success: function (res) {
          if (res.data.length === 0) {
            console.log(res)
          } else {
            that.noteData = res.data
            console.log(that.noteData)
          }

        }
      })
    }, addNote: function (title) {
      const that = this;
      console.log("addNote")
      $.ajax({
        headers: {
          'Authorization': this.token
        },
        type: "post",
        data: {
          'classificID': this.currentCIndex,
          'noteTitle': title
        },
        url: this.url + "/note/addNote",
        success: function (res) {
          if (res.data == null) {

          } else {
            console.log(res.data)
          }

        },

      })
    },
    handleClick(index) {
      this.currentIndex = index;
      alert(this.currentIndex);
    }

  }
}

</script>

<style scoped>
.title {
  width: 50%;
}

.title >>> .el-input__wrapper {
  border: 0;
  box-shadow: none;
}
</style>
