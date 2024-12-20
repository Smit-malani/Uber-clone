const axios = require('axios')
const captainModel = require('../models/captainModel')

module.exports.getAddressCoordinate = async (address)=>{
    const apiKey = process.env.GOOGLE_MAP_API
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`

    try {
        const responce = await axios.get(url) 
               
        if(responce.data.status == 'OK'){
            const location = responce.data.results[0].geometry.location            
            return{
                ltd: location.lat,
                lng: location.lng
            }
        }else{
            throw new Error('unable to fetch coordinate')
        }
    } catch (error) {
        console.error(error)        
        throw error
    }
}

module.exports.getDistanceTime = async(origin, destination)=>{
    if(!origin || !destination){
        throw new Error('Origin and destination are required')
    }

    const apiKey = process.env.GOOGLE_MAP_API
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`

    try {
        const responce = await axios.get(url)
        
        if(responce.data.status == 'OK'){
            if(responce.data.rows[0].elements[0].status == 'ZERO_RESULTS'){
                throw new Error('no routes found')
            }
            return responce.data.rows[0].elements[0]
        }else{
            throw new Error('Unable to fetch distance and time')
        }



    } catch (error) {
        console.error(error)
        throw error
    }

}

module.exports.getAutoCompleteSuggestions = async (input)=>{
    if(!input){
        throw new Error('query is required')
    }

    const apiKey = process.env.GOOGLE_MAP_API
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`

    try {
        const responce = await axios.get(url)
        if(responce.data.status == 'OK'){            
            return responce.data.predictions
        }else{
            throw new Error('unable to fetch suggetions')
        }
    } catch (err) {
        console.error(err)
        throw err
    }
}

module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
    
    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [[lng, ltd], radius / 6371]
            }
        }
    });
    
    return captains;
}