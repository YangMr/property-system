/**
 * @author YangLing
 * @date 2022/10/13 15:53
 */
import axios from 'axios'

const service = axios.create({
  baseURL: '/uapi',
  timeout: 10000
})

export default service
