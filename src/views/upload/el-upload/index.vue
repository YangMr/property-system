<template>
  <div>
    <h5>el-upload文件上传</h5>
    <div class="box">
      <el-upload
        class="upload-demo"
        action="/uapi/upload_single"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :show-file="false"
        :on-exceed="handleExceed"
        :file-list="fileList"
        :on-success="handleSuccess"
        :on-error="handleError"
        :auto-upload="false"
        :on-progress="handleProgress"
        :before-upload="handleBeforeUpload"
        :on-change="handleChange"
        :http-request="handleHttpRequest"
        list-type="picture"
      >
        <el-button size="small" type="primary">选择文件</el-button>

      </el-upload>
    </div>
    <el-button size="small" type="danger" @click="handleHttpRequest">开始上传</el-button>

  </div>
</template>

<script>

/**
 * 1. 点击上传文件按钮， 拉起选择文件的弹窗
 * 2. 点击选择要上传的文件， 并且获取到所选择的文件信息
 * 3. 进行上传之前， 对上传的文件进行限制 （size , type）
 * 4. 开始上传,
 *  4.1 先创建创建formData对象
 *  4.2 将需要上传的文件信息添加到formData对象中
 *  4.3 调用上传文件接口， 将formData中的文件信息提交到后台
 *  4.4 上传成功
 */

import { singleUpload } from '@/api/upload'
export default {
  name: 'Index',
  data() {
    return {
      file: null,
      fileList: []
    }
  },
  methods: {
    handlePreview() {
      console.log('点击上传的文件列表时触发')
      console.log(this.fileList)
    },
    handleRemove() {
      console.log('删除选择的文件列表时触发')
    },
    beforeRemove() {
      console.log('删除文件之前会触发')
    },
    handleExceed() {
      console.log('选择文件的个数超出了会触发')
    },
    handleSuccess(data) {
      console.log('success', data)
    },
    handleError() {
      console.log('error')
      this.$message.warning('上传文件失败')
    },
    handleProgress(e) {
      console.log('文件正在上传时e', e)
    },
    handleChange(file, fileList) {
      this.file = file
      console.log('选择文件时会触发的方法', file)
      console.log('fileList', fileList)
    },
    handleBeforeUpload(file) {
      console.log('文件上传之前会触发的钩子函数', file)
      const { size, type } = file
      if (size > 2 * 1024 * 1024) {
        this.$message.warning('上传的文件不能超过2MB')
        return false
      }

      const formatType = /(png|jpg|gif|jpeg|ico)/i
      if (!formatType.test(type)) {
        this.$message.warning('上传的文件类型不正确')
        return false
      }
    },
    // 自定义上传
    async handleHttpRequest() {
      console.log('自定上传文件的方式')
      const formData = new FormData()
      formData.append('file', this.file.raw)

      const response = await singleUpload(formData)
      console.log('Response', response)
    }
  }
}
</script>

<style scoped>
.box{
  padding: 30px;
}
</style>
