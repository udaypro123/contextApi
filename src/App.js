
import { useState } from 'react';
import './App.css';
import Home from './componenst/contextApi/Home';
import contextdata from './componenst/contextApi/context';


function App() {


  const [value, setvalue] = useState("");
  const [data, setdata] = useState("")

  const [src, setsrc] = useState("https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg")





  return (
    <>
      <contextdata.Provider value={ { value, setvalue, data, setdata, src} }>
        <Home />
      </contextdata.Provider>
    </>
  );
}

export default App;
