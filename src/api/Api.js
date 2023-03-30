import axios from "axios";
export default async function fetchcoinList(setData, setError) {
  const apiUrl = process.env.REACT_APP_API_URL;
  try {
   
    const response = await axios.get(`${apiUrl}/api/public/getCoinList`);

    const data = await response.data;

    if (response.status === 200 || response.status === 201) {
      console.log("Coin data is get successfully");
      if (data.length === 0) {
        setError("Data is not found");
      } else {
        setData(data.data);
        console.log(data);
        console.log("data is get successfully");
      }

     
    }
  } catch (error) {
    console.log(error.message);
    
  }
}
