/**
 * @author YangLing
 * @date 2022/10/13 08:51
 */
import { MessageBox, Message } from 'element-ui'
const util = {
  confirm(text = '此操作将永久删除该文件, 是否继续?', title = '提示') {
    return new Promise((resolve, reject) => {
      MessageBox.confirm(text, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        resolve(true)
      }).catch(() => {
        reject(false)
        Message({
          type: 'info',
          message: '已取消'
        })
      })
    })
  }
}

export default util
