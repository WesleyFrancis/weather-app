import Data from "./DAO/weatherData.js";
import interfaceUI from "./UIO/Interface.js";

const app={
    init()
    {
        interfaceUI.selection.addEventListener("change",(ey)=>{
        //   const tr= Data.fetchWeather();
           const rr= Data.fetchD(interfaceUI.selection.value);
            console.log(`${rr} should work`);
            interfaceUI.updateInformation(interfaceUI.selection.value);
        });
    }
}
app.init();