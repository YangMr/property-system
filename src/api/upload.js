/**
 * @author YangLing
 * @date 2022/10/13 15:45
 */
import request from '@/utils/uploadRequest'

export const singleUpload = (data) => {
  return request({
    url: '/upload_single',
    method: 'POST',
    headers: {
      'Content-type': 'multipart/form-data'
    },
    data
  })
}
