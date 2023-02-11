import logo from './logo.svg';
import { useEffect ,useState} from 'react';
import './App.css';
import product from './Product';
import Card from './component/Card';
function App() {
  // console.log(product
  let [product,setProduct] =useState([])
  //array
  //map through an array and render component while the passing the prop


  // state ,prop,map
  // Call APIS in useeffect hook.
  // after getting data from api , set the data as an state of react using usestate hook
  // after you have your state with you , you can map on it if it is an array.
  useEffect(() => {
   async function fetchdata() {
     let response = await fetch("https://dummyjson.com/products")
     let data = await response.json();
     console.log(data.products);
     setProduct(data.products)
   }
    fetchdata()
  },[])

  return (
    <div className="App">
      {
        product.map((ele) => {
          return (
            <Card ele={ele} />
          )
        })
      }
   
    </div>
  );
}

export default App;
