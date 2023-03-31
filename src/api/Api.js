import axios from "axios";
export default async function fetchcoinList(dispatch, tableActions, notify) {
  const apiUrl = process.env.REACT_APP_API_URL;
  try {
    dispatch(tableActions.isLoading());
    const response = await axios.get(`${apiUrl}/api/public/getCoinList`);

    const data = await response.data;

    if (response.status === 200 || response.status === 201) {
      console.log("Coin data is get successfully");
      if (data.length === 0) {
        dispatch(tableActions.setError('Data is not found'));
        dispatch(tableActions.isShow());

      } else {
        console.log(data);
        dispatch(tableActions.notShow());
        dispatch(tableActions.setData(data.data));
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
