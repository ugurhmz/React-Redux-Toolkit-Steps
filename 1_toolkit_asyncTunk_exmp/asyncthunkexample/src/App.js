import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAllPosts } from './postSlice.js'

const App = () => {
  const dispatch = useDispatch()
  const postArrayDatas = useSelector((state) => state.ugurPosts.postsArray)

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  useEffect(() => {
    if (postArrayDatas && postArrayDatas.length >0) {
        console.log('POSTDATA: ', postArrayDatas)
    }
   
  }, [postArrayDatas])

  return (
    <>
      {
        postArrayDatas &&
        postArrayDatas.map( (item, i) => (
          <div key={i}>{item.title}</div>
        ))
      }
    </>
  )
}

export default App