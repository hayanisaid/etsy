import Api from '@/services/Api'

export default {
  sendMail (params) {
  	let data={
     params,
     headers: {
				'Content-Type': 'multipart/form-data'
				}
  	}
    return Api().post('maildata',data);
  }
}