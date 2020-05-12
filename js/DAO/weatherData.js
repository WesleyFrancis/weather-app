const DATA={
    info:0,
    fetchWeather(location)
    {   
     const myres=   fetch(`http://api.weatherstack.com/current?access_key=77e4573920a82244aff49deeecef794e&query=${location}`)
        .then(function(response){
            response.json()
            .then(function(res){
                return res.current.temperature;
            })
            .catch(function(err){
                console.log("fail");
                return err;
            });
            
        })
        .catch(function(err){
            console.log("fail");
            console.log(err);
            return err;
        });
        return myres;
      //  
    },
    fetchD(location)
    {
      return  fetch(`http://api.weatherstack.com/current?access_key=77e4573920a82244aff49deeecef794e&query=${location}`)
        .then(response =>{
            console.log(response);
            if(!response.ok)
            {
                throw Error('ERROR');
            }
            
           return response.json();
        })
        .then(data =>{
           return data;
        })
        .catch(error =>{
            console.log(error);
        });
    }
}
export default DATA;
