import Api from '@/services/Api'

export default {
  sendMail (params) {
    return Api().post('maildata',params);
  }
}