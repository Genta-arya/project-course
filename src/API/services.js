import api from './index'


const Endpoint = {
    ACCOUNT: '/accounts'
}


const getDatas = async () => {
    try {
      const response = await api.get(Endpoint.ACCOUNT)
    //   console.log(response)
      return response;
      
    } catch (error) {
      console.error("Error fetching data:", error);
      throw Error(error);
    }
  };


  const getSelectData = async (slug) =>{
    try {
        const responses = await api.get(`${Endpoint.ACCOUNT}?filters[slug][$eqi]=${slug}&populate=*`)
        console.log(responses)
        return responses
    }catch (error) {
        throw Error(error)
    }
  }
  export {getDatas , getSelectData}