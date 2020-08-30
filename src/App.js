import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header'
import Bar from './components/Bar'
import Display from './components/Display'

const App = () =>{
  const[data,setData] = useState([])
  const [grid,setGrid] = useState(true)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const[errorMessage,setErrorMessage] = useState("")
  const[details,setDetails]=useState(false)
  const api_key_comic = process.env.REACT_APP_API_KEY
  const proxy = "https://cors-anywhere.herokuapp.com/"
  const url = `https://comicvine.gamespot.com/api/issues/?api_key=${api_key_comic}&format=json&field_list=name,image,issue_number,date_added,id,api_detail_url`


  const hook = () => {
    axios.get(proxy+url)
      .then(response =>{
        if(response.data.sucess !== false){
          setData(response.data.results)
          setIsLoading(false)
          console.log("sucess")
        }
      })
      .catch(error => {
        setError(true)
        setIsLoading(false)
        setErrorMessage(error.message)
        console.log(error.message)
      })
  }

  useEffect(hook,[])

  const toggler = (event) => {
    if(event.target.id === "list"){
      setGrid(false)
    }else{
      setGrid(true)
    }
  }

  const viewDetails = (event) => {
    setDetails(true)
  }

  const viewHome = (event) => {
    setDetails(false)
  }

  return(
    <div className="div-background">
      <div className="container mt-0">
        <Header viewHome={(event)=>viewHome(event)}/>
        <Bar toggler={(event)=>toggler(event)} grid={grid} details={details} />
        <Display isLoading={isLoading} error={error} errorMessage={errorMessage} grid={grid} data={data} viewDetails={(event)=>viewDetails(event)} details={details}/>
      </div>
    </div>
  )
}

export default App;
