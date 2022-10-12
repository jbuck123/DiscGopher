import axios from 'axios'


 const Logout = () => {
  try {
       axios.get('/api/auth/logout')
      localStorage.removeItem('userInfo')
  
  } catch (error) {
      console.log(error)
  }
}
export default Logout;