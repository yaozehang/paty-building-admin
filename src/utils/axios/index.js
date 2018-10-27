import axios from 'axios'

const baseURL = process.env.BASE_API

export default class Axios {
  static instance = axios.create({
    baseURL,
    timeout: 15000
  })

  static get(url, data, config) {
    return new Promise((resolve, reject) => {
      this.instance.get(url,{params:data},config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  static post (url, data, config) {
    return new Promise((resolve, reject) => {
      this.instance.post(url, data, config).then(res => {
        resolve(res.data)
      }).catch(err => {
      reject(err)
      })
    })
  }

  static patch (url, data, config) {
    return new Promise((resolve, reject) => {
      this.instance.patch(url, data, config).then(res => {
        resolve(res.data)
      }).catch(err => {
      reject(err)
      })
    })
  }

  static delete (url, data, config) {
    return new Promise((resolve, reject) => {
      this.instance.delete(url, config).then(res => {
        resolve(res.data)
      }).catch(err => {
      reject(err)
      })
    })
  }
}