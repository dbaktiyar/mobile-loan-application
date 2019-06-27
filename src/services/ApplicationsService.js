import axios from 'axios'
import user from '../store/modules/user'

export default {
  getApplications () {
    return new Promise((resolve, reject) => {
      axios.get(`http://localhost:8080/appraisals/all`,
        { headers: { 'Authorization': 'Bearer ' + user.state.token } })
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}
