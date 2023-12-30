import React, { useEffect } from 'react'
import {fetchDataFromApi}  from './api.js'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration } from './homeSlice'


const App = () => {
  const dispatch = useDispatch()
  const {payloadObject} = useSelector(state => state.home)
 
  console.log("xxx",payloadObject)

  useEffect(() => {
    const getPopular = () => {
      fetchDataFromApi("/movie/popular")
       .then((res) => {
         dispatch(getApiConfiguration(res.results))
       })
   }
    getPopular()
  }, [])

  

  return (
    <div style={{backgroundColor:"white"}}>  
     </div>
  )
}

export default App