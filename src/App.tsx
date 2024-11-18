import { BarChartView } from "./components/BarChartView";
import { useFetchNEOData } from "./hooks/useFetchNEOData";

function App() {
  const { data } = useFetchNEOData();
  console.log("data", data);

  return (
    <>
      <div>
        <BarChartView data={data} />
      </div>
    </>
  );
}

export default App;
