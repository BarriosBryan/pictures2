import axios from 'axios'

const searchImage = async(term) => {
    const url = 'https://api.unsplash.com/search/photos/?client_id=u4Cfa0QQStCBqEKN0T-GMcd_rrml4_PfpNGzHUn3dIQ'
    const response = await axios.get(url,{
    params :{
        query : term
    }
    })
    console.log(response)
    console.log(response.data.results)
    
    return response.data.results
}
export default searchImage