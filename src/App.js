import LandingPage from "./Pages/LandingPage/LandingPage";
import { BrowserRouter, Routes ,Route} from "react-router-dom";
import Summary from "./Pages/Summary/Summary";
import axios from "axios";
import { useEffect,useState } from "react";
import FormPage from "./Pages/FormPage/FormPage";
function App() {
  const [fetchdData, setFetchedData] = useState("");
  useEffect(()=>{
    const fetchingData = async () => {
      const fetchedData = await axios.get(
        "https://api.tvmaze.com/search/shows?q=all"
      );
      setFetchedData(fetchedData);
    };
    fetchingData();
  },[])
  return (
    <BrowserRouter>
    <Routes>
    {fetchdData?<Route path="/" element={ <LandingPage fetchdData={fetchdData} />}/>:""}
    {fetchdData?<Route path="/summary" element={ <Summary fetchdData={fetchdData} />}/>:""}
    {fetchdData?<Route path="/formPage" element={ <FormPage fetchdData={fetchdData} />}/>:""}
    </Routes>
     
    </BrowserRouter>
  );
}

export default App;
