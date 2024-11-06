import image from "./assets/0-floor.png";
import Filter from "./Components/Filter/Filter";
import PolygonDataOverlay from "./Components/Polygon-Tooltip/PolygonTooltip";
import SVGPolygons from "./Components/SVGPolygons";

function App() {
  return (
    <>
      <div className="container">
        <img className="floor" src={image} />
        <SVGPolygons />
      </div>
      <Filter />
      <PolygonDataOverlay />
    </>
  );
}

export default App;
