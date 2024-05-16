const getPlaces =async()=>{
   const data = await  fetch('https://api.meteo.lt/v1/places')
    // .then(response=>{console.log(response.json())})
    .then(response=>{return response.json()})
    return data
}
const renderPlaces = async ()=>{
    const data = await getPlaces();
//     console.log('is kitos funkcijos',data)
     for(let place of data){
        console.log(`${place.name}(${place.administrativeDivision})`)
        let option = document.createElement('option');
        option.value = `${place.name}(${place.administrativeDivision})`
        document.querySelector('#dataList').appendChild(option);
     }
      

}

export default renderPlaces