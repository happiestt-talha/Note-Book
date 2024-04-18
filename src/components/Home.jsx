import React ,{useContext,useEffect}from 'react'
import NoteContext from '../contexts/notes/noteContext'

const Home = () => {
  const data=useContext(NoteContext)
  useEffect(() => {
    data.updtState()
    // eslint-disable-next-line
  }, [])
  
  return (
    <>
      <h1>Home belongs to {data.state.name} and he is {data.state.Status}</h1>
    </>
  )
}

export default Home