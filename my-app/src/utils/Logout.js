import axios from 'axios'


export const logout = () => async (dispatch) => {
  try {
      await axios.get('/logout')
      localStorage.removeItem('access-token')

  } catch (error) {
      console.log(error)
  }
}