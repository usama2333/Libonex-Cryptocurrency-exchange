import axios from "axios";
import btc from '../assests/images/btc.png';
import eth from '../assests/images/eth.png';
import firstlogo from '../assests/images/firstlogo.png';
import second from '../assests/images/second.png';
import third from '../assests/images/third.png';
export default async function fetchcoinList(dispatch, tableActions, notify) {
  const apiUrl = process.env.REACT_APP_API_URL;
  try {
    dispatch(tableActions.isLoading());
    // const response = await axios.get(`${apiUrl}/api/public/getCoinList`);
    const response = await axios.get('https://fakestoreapi.com/products');

    const data = await response.data;

    if (response.status === 200 || response.status === 201) {
      console.log("Coin data is get successfully");
      if (data.length === 0) {
        dispatch(tableActions.setError('Data is not found'));
        dispatch(tableActions.isShow());

      } else {
        console.log(data);
        const dataa = [
          {
            rank : '1',
            imageURL : btc,
            coinV2FValue : '0.33333$',
            name : 'BTC',
            price : '460000$',
            totalSupply : '223399988',
            remainingSupply : '122333444.444',
            startDate : '01-2023',
            FinalDate : '07-2023'
            
          },
          {
            rank : '3',
            imageURL : eth,
            coinV2FValue : '0.33333$',
            name : 'ETH',
            price : '2000$',
            totalSupply : '12323887687',
            remainingSupply : '8988798798878',
            startDate : '04-2023',
            FinalDate : '08-2023'
            
          },
          
        ]
        dispatch(tableActions.notShow());
        dispatch(tableActions.setData(dataa));
        dispatch(tableActions.setError(null));
        console.log("data is get successfully");
      }
      setTimeout(() => {
      dispatch(tableActions.notLoading());
    }, 1000);

    }
  } catch (error) {
    console.log(error.message);
    setTimeout(() => {
    dispatch(tableActions.setError(error.message));
    dispatch(tableActions.notLoading());
    dispatch(tableActions.isShow());
    notify(error.message);
  }, 1000);
  
  }
}
