<template>
  <div>

    <h4>单一文件上传「FORM-DATA」</h4>
    <div class="box">
      <div class="button-group">
        <el-button type="primary" size="mini" @click="handleClickButton">选择文件</el-button>
        <el-button type="danger" size="mini" @click="handleUpload">上传服务器</el-button>
        <input ref="file" accept="image/*" class="file" type="file" @change="handleGetFile">
      </div>
      <div class="show">
        <span>{{ tips }} <i v-if="file" class="remove" @click="handleResetFile">移除</i></span>
      </div>
    </div>

    <img v-if="src" :src="src" alt="">
  </div>
</template>

<script>
/**
 * 文件上传实现思路：
 *  1. 点击选择文件按钮， 实现拉起文件弹窗
 *  2. 点击文件，获取到选择的文件信息
 *  3. 点击上传服务器， 将选择的文件上传到服务器
 *
 *  问题：
 *    1. 如何点击选择文件按钮,拉起选择文件弹窗
 *    2. 如何获取到所选择的文件信息
 */
import { singleUpload } from '@/api/upload'
export default {
  name: 'Index',
  data() {
    return {
      file: null,
      tips: '只能上传 PNG/JPG/JPEG 格式图片，且大小不能超过2MB',
      src: ''
    }
  },
  methods: {
    // 拉起选择文件的弹窗
    handleClickButton() {
      this.$refs.file.click()
    },
    // 获取选择文件的信息
    handleGetFile(e) {
      this.file = e.target.files[0]
      this.tips = this.file.name
    },
    // 上传文件到服务器的方法
    handleUpload() {
      // 限制上传文件的大小 (2MB) 2MB - B
      const sizes = 2 * 1024 * 1024
      console.log(sizes)
      if (this.file.size > sizes) {
        this.$message.warning('您上传的文件不能超过2MB哦！')
        return
      }

      // 限制上传的文件格式
      const format = /(png|jpg|jpeg|ico)/i
      if (!format.test(this.file.type)) {
        this.$message.warning('您上传的文件格式不正确！')
        return
      }

      // 调用接口进行上传
      this.handleUploadFile()
    },
    // 上传文件方法
    async handleUploadFile() {
      //  1. 将图片添加到formData中
      //  2. 进行上传
      try {
        const formData = new FormData()
        formData.append('file', this.file)
        formData.append('filename', this.file.name)

        const response = await singleUpload(formData)
        console.log(response)
        if (response.data.code === 0) {
          this.src = response.data.servicePath
        }
      } catch (e) {
        console.log(e.message)
      }
    },
    // 点击移除会触发的方法
    handleResetFile() {
      this.file = null
      this.tips = '只能上传 PNG/JPG/JPEG 格式图片，且大小不能超过2MB'
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  border:1px dashed #ccc;
  padding : 20px;
  width: 450px;
  height : 200px;
  margin : 20px;

  .file{
    display: none;
  }

  .remove{
    font-style : normal;
    color : green;
    cursor: pointer;
  }

  .show {
    margin-top: 10px;

    span{
      font-size: 12px;
      color : #ccc;
      margin-left: 10px;
    }
  }

}
</style>
