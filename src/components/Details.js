import React,{useState,useEffect} from 'react'
import Loading from './Loading'
import Error from './Error'
import DataElement from './DataElement'
import axios from 'axios'

const Details = ({urlDetails}) => {
    const api_key_comic = process.env.REACT_APP_API_KEY
    const proxy = "https://cors-anywhere.herokuapp.com/"
    const url = `${urlDetails}?api_key=${api_key_comic}&format=json&field_list=image,character_credits,team_credits,location_credits`
    const [data,setData] = useState([])
    const[dataCharImages,setDataCharImages] = useState([])
    const[dataTeamImages,setDataTeamImages] = useState([])
    const[dataLocationImages,setDataLocationImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const[errorMessage,setErrorMessage] = useState("")

    const hook = () => {
        axios.get(proxy+url)
            .then(response => {
                setData(response.data.results)
                setIsLoading(false)
                console.log("sucess data") 

                let promisesChar = []
                response.data.results.character_credits.forEach((character)=>{
                    const urlCharacters = `${character.api_detail_url}?api_key=${api_key_comic}&format=json&field_list=image` 
                    promisesChar.push(axios.get(proxy+urlCharacters))
                })
                Promise.all(promisesChar).then(responses =>{
                    const urlsImages = []
                    responses.forEach(response =>{
                        urlsImages.push(response.data.results.image.original_url)
                    })
                    setDataCharImages(urlsImages)
                    console.log("sucess characters")
                })
                .catch(error => {
                    setError(true)
                    setIsLoading(false)
                    setErrorMessage(error.message)
                    console.log(error.message)
                })

                let promisesTeam = []
                response.data.results.team_credits.forEach((team)=>{
                    const urlTeams = `${team.api_detail_url}?api_key=${api_key_comic}&format=json&field_list=image` 
                    promisesTeam.push(axios.get(proxy+urlTeams))
                })
                Promise.all(promisesTeam).then(responses =>{
                    const urlsTeams = []
                    responses.forEach(response =>{
                        urlsTeams.push(response.data.results.image.original_url)
                    })
                    setDataTeamImages(urlsTeams)
                    console.log("sucess teams")
                })
                .catch(error => {
                    setError(true)
                    setIsLoading(false)
                    setErrorMessage(error.message)
                    console.log(error.message)
                })

                let promisesLocations = []
                response.data.results.location_credits.forEach((location)=>{
                    const urlLocation = `${location.api_detail_url}?api_key=${api_key_comic}&format=json&field_list=image` 
                    promisesLocations.push(axios.get(proxy+urlLocation))
                })
                Promise.all(promisesLocations).then(responses =>{
                    const urlsLocations = []
                    responses.forEach(response =>{
                        urlsLocations.push(response.data.results.image.original_url)
                    })
                    setDataLocationImages(urlsLocations)
                    console.log("sucess locations")
                })
                .catch(error => {
                    setError(true)
                    setIsLoading(false)
                    setErrorMessage(error.message)
                    console.log(error.message)
                })
            })
            .catch(error => {
                setError(true)
                setIsLoading(false)
                setErrorMessage(error.message)
                console.log(error.message)
            })
    }

    useEffect(hook,[])
    
    if(isLoading || data === undefined || data.image === undefined || data.character_credits === undefined ){
        return <Loading/>    
    }

    if(error){
        return <Error errorMessage={errorMessage}/>
    }
    
    const characters = data.character_credits.map((character,index)=>{
        return <DataElement key={index} urlImage={dataCharImages[index]} name={character.name} />
    })

    const teams = data.team_credits.map((team,index)=>{
        return <DataElement key={index} urlImage={dataTeamImages[index]} name={team.name} />
    })

    const locations = data.location_credits.map((location,index)=>{
        return <DataElement key={index} urlImage={dataLocationImages[index]} name={location.name} />
    })
    
    return(
        <div className="row " style={{marginTop:"25px"}} >
            <div className="col-md-7 col-sm-12 col-12">
                <h4 className="border-headers" ><b>Characters</b></h4>
                <div className="row">
                    {characters}
                </div>
                <h4 className="border-headers mt-5" ><b>Teams</b></h4>
                <div className="row">
                    {teams}
                </div>
                <h4 className="border-headers mt-5" ><b>Locations</b></h4>
                <div className="row">
                    {locations}
                </div>
            </div>
            <div className="col-md-5 col-sm-12 col-12 order-sm-first order-first">
                <img className="img-fluid m-1" src={data.image.original_url} alt="Comic"></img>
            </div>
        </div>
    )
}

export default Details