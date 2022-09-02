import "./App.scss";
import Theme from "./components/Theme";
import ProdList from "./components/ProdList";
import ToolBar from "./components/ToolBar";
import { useEffect, useState } from "react";
// import { dataOriginal } from './data';
import axios from "axios";

function App() {
  const [refactorData, setRefactorData] = useState([]);
  const [tabData, setTabData] = useState([]);
  const [dataTheme, setDataTheme] = useState({
    Id: undefined,
    Link: { Text2: undefined },
  }); //嚴謹一點要帶預設值，避免[]或{}空值
  const [dataTag, setDataTag] = useState([]);
  const [dataProd, setDataProd] = useState([]);
  // const refactorData = dataOriginal.window1.Blocks[0].Nodes;

  useEffect(() => {
    getDate();
  }, []);

  const getDate = () => {
    axios
      .get("/index/stage/v1/data&27655702")
      .then((response) => {
        setTabData(response.data.window2.Blocks);
        setRefactorData(response.data.window2.Blocks[0].Nodes);
        // console.log("成功！", response.data.window1.Blocks[0].Nodes);
        console.log("成功！", response.data.window2.Blocks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addData = (prev, item) => {
    prev.push(item);
    return prev;
  };

  useEffect(() => {
    refactorData.forEach((item) => {
      if (item.Id === 1) {
        setDataTheme({ ...item });
      } else if (item.Id >= 2 && item.Id <= 6) {
        setDataTag((prev) => [...prev, item]);
      } else if (item.Id >= 7) {
        setDataProd((prev) => addData(prev, item));
      }
    });
  }, [refactorData]);

  return (
    <div className="recommend">
      <ToolBar dataTheme={dataTheme} setDataTheme={setDataTheme} setDataProd={setDataProd} tabData={tabData} />
      <Theme dataTheme={dataTheme} dataTag={dataTag} />
      <ProdList dataProd={dataProd} />
    </div>
  );
}

export default App;
