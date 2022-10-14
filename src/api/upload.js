/**
 * @author YangLing
 * @date 2022/10/13 15:45
 */
import request from '@/utils/uploadRequest'

// export const singleUpload = (data) => {
//   return request({
//     url: '/upload_single',
//     method: 'POST',
//     headers: {
//       'Content-type': 'multipart/form-data'
//     },
//     data
//   })
// }

export const singleUpload = (data) => {
  return request({
    url: '/upload?file_id=0',
    method: 'POST',
    headers: {
      'Content-type': 'multipart/form-data',
      'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjgwLCJ1c2VybmFtZSI6InpoYW5nbWluZyIsIm5pY2tuYW1lIjoiIiwiZW1haWwiOiIiLCJwYXNzd29yZCI6IjhkOTY5ZWVmNmVjYWQzYzI5YTNhNjI5MjgwZTY4NmNmMGMzZjVkNWE4NmFmZjNjYTEyMDIwYzkyM2FkYzZjOTIiLCJhdmF0YXIiOiIiLCJwaG9uZSI6IiIsInNleCI6IueUtyIsImRlc2MiOiIiLCJ0b3RhbF9zaXplIjoxMDQ4NTc2MCwidXNlZF9zaXplIjowLCJjcmVhdGVkX3RpbWUiOiIyMDIyLTEwLTE0VDAxOjU1OjA2LjAwMFoiLCJ1cGRhdGVkX3RpbWUiOiIyMDIyLTEwLTE0VDAxOjU1OjA2LjAwMFoiLCJpYXQiOjE2NjU3MTI1MDl9.MHeWgwGwqN0yR7z88uN9fJyLpFWqFiK-HQLdmXHuUSM'
    },
    data
  })
}
