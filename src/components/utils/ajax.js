import axios from 'axios'

const RETURN_CODES = {
  SUCCESS: 0,
  NOT_VALID: 1,
  ERROR: -1
}

axios.defaults.headers.common['token'] = localStorage.getItem('token')
axios.defaults.baseURL = 'api/v1'

const Ajax = {
  /**
   * Atualiza o token com o valor mais recente do localStorage
   */
  updateToken: function() {
    axios.defaults.headers.common['token'] = localStorage.getItem('token')
  },

  /**
   * Realiza uma chamada 'get' simples
   * @param url url do serviço
   * @param data parametros para concatenacao na url.
   * @param success função callback chamada em caso de sucesso na chamada.
   *        Recebe como parâmetro o objeto retornado pela chamada.
   */
  get: function(url, success, resolve, reject) {
    loading(true)

    return axios.get(url).then((response) => {
      this.__sucesso(response, success, resolve, reject)
      return response
    }).catch((err) => {
      this.__erro(err)
    })
  },
  /**
   * Realiza uma chamada 'post' simples
   * @param url url do serviço
   * @param data o payload a ser enviado no corpo do request
   * @param success função callback chamada em caso de sucesso na chamada.
   *        Recebe como parâmetro o objeto retornado pela chamada.
   * @param resolve
   * @param reject
   */
  post: function(url, data, success, resolve, reject, ignoreLoading = false) {
    if(!ignoreLoading) {
      loading(true)
    }

    return axios.post(url, data).then((response) => {
      this.__sucesso(response, success, resolve, reject)
    }).catch((err) => {
      this.__erro(err)
    })
  },

  /**
   * Realiza uma chamada 'put' simples
   * @param url url do serviço
   * @param data o payload a ser enviado no corpo do request
   * @param success função callback chamada em caso de sucesso na chamada.
   *        Recebe como parâmetro o objeto retornado pela chamada.
   * @param resolve
   * @param reject
   */
  put: function(url, data, success, resolve, reject) {
    loading(true)

    return axios.put(url, data).then((response) => {
      this.__sucesso(response, success, resolve, reject)
    }).catch((err) => {
      this.__erro(err)
    })
  },

  delete: function(url, data, success) {
    loading(true)
    return axios.delete(url, data).then((response) => {
      this.__sucesso(response, success)
    }).catch((err) => {
      this.__erro(err)
    })
  },

  __sucesso: function(response, success, resolve, reject) {
    loading(false)
    let _data = response.data
    if (_data.status.code == RETURN_CODES.SUCCESS) {
      if(typeof success === 'function') {
        success(_data)
      }

      if(typeof resolve == 'function') {
        resolve()
      }
    } else if (_data.status.code == RETURN_CODES.NOT_VALID) {
      swal(_data.status.text, '', 'warning')

      if(typeof reject === 'function') {
        reject(_data.data)
      }
    } else if (_data.status.code == RETURN_CODES.ERROR) {
      setTimeout(()=>swal(_data.status.text, '', 'warning'), 500)
    }
  },
  __erro: function(err) {
    loading(false)
    if (err.message === 'Network Error') {
      swal('Verifique sua conexão.', '', 'warning')
      return
    }

    if (err.status === 403) {
      swal('Permissão negada.', '', 'warning')
      return
    }

    console.error('Erro ao executar operação', err.stack || err)

    swal('Falha na operação.', '', 'warning')
  },

  /**
   * Realiza uma chamada 'post' que retorne os bytes de um arquivo
   * e realiza o donwload do arquivo
   *
   * @param url url do serviço
   * @param data o payload a ser enviado no corpo do request
   * @param success função callback chamada em caso de sucesso na chamada.
   */
  postDownload: function(url, data, success) {
    loading(true)
    return axios.post(url, data).then((response) => {
      loading(false)
      var pdf = 'data:application/octet-stream;base64,' + response.data.entity
      const link = document.createElement('a');
      link.href = pdf
      link.download = 'relatorio-1.pdf';
      link.click();

    }).catch((err) => {
      this.__erro(err)
    })
  }
}

export default Ajax
