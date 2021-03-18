import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Header from './components/Header'
import Grid from './components/Grid'
import List from './components/List'
import Details from './components/Details'
import {Switch, Route} from "react-router-dom"

const App = () =>{
  const[data,setData] = useState([])
  const[menuColors,setMenuColors] = useState({grid:"black",list:"green"})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const[errorMessage,setErrorMessage] = useState("")
  const[details,setDetails]=useState(false)
  const[urlDetails,setUrlDetails]=useState("")
  const[searchFor, setSearchFor] = useState("")
  const api_key_comic = process.env.REACT_APP_API_KEY
  const proxy = "https://cors-proxy-casz.herokuapp.com/"
  const url = `https://comicvine.gamespot.com/api/issues/?api_key=${api_key_comic}&format=json&field_list=name,image,issue_number,date_added,id,api_detail_url`


  const hook = () => {
    const colors = localStorage.getItem("colors")
    if(colors){
      setMenuColors(JSON.parse(colors))
    }
    const details = localStorage.getItem("details")
    if(details){
      const isDetails = (details === 'true')
      setDetails(isDetails)
    }
    const urlDetails = localStorage.getItem("urlDetails")
    if(urlDetails){
      setUrlDetails(urlDetails)
    }
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
      })
  }

  useEffect(hook,[url])

  useEffect(()=>{
    localStorage.setItem("colors",JSON.stringify(menuColors))
    localStorage.setItem("details",details)
  })

  const toggleSelected = (event) => {
    if(event.target.id === "list"){
      setMenuColors({grid:"green",list:"black"})
    }else{
      setMenuColors({grid:"black",list:"green"})
    }
  }

  const viewDetails = (event) => {
    setDetails(true)
    setUrlDetails(event.currentTarget.id)
  }

  const viewHome = (event) => {
    setDetails(false)
    setMenuColors({grid:"black",list:"green"})
  }

  const goBack = (event) => {
    setDetails(false)
    setMenuColors(JSON.parse(localStorage.getItem("colors")))
  }

  const setFilter = (event) => {
    setSearchFor(event.target.value.toLowerCase())
  }

  return(
    <div className="div-background">
      <div className="container mt-0">
        <Header details={details} menuColors={menuColors} viewHome={viewHome} toggleSelected={toggleSelected} setFilter={setFilter}/>
        <Switch>
          <Route exact path="/">
            <Grid isLoading={isLoading} data={data} error={error} errorMessage={errorMessage} viewDetails={viewDetails} details={details} goBack={viewHome} searchFor={searchFor}/>
          </Route>
          <Route path="/list">
            <List isLoading={isLoading} data={data} error={error} errorMessage={errorMessage} viewDetails={viewDetails} details={details} goBack={goBack} searchFor={searchFor}/>
          </Route>
          <Route path="/:id">
            <Details urlDetails={urlDetails}/>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App;
