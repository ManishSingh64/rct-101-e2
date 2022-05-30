import React ,{useState,useEffect} from "react";
import Products from './components/Products'
import axios from 'axios'
// import AddProducts from './components/AddProducts'
const App = () => {

  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  // const [page, setPage] = useState(1);
  // const [totalCount, setTotalCount] = useState();

  let handleOnChange = (e) =>{
      // console.log(e)
     let {name,value} = e.target
 
     setForm({...form,[name] : value});
    }

    let handleSubmit = (e) =>{
      e.preventDefault();
      axios.post("http://localhost:8080/products",form).then((res) =>{
        setData([...data,res.data])
        console.log(data)
      })
      
    }
useEffect(() => {
  axios.get("http://localhost:8080/products").then((res) =>{
    setData(res.data);
    // setTotalCount(Number(res.headers["x-total-count"]))
  })
},[])

  return <div>
    <Products data={data} form={form} handleOnChange={handleOnChange} handleSubmit={handleSubmit}/>
    {/* <AddProducts/>  */}
    </div>;
};

export default App;
