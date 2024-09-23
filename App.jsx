import "./App.css";
import ScrollIndicator from "./components/scroll-indicator";
function App() {
  return (
    <div className="App">
      {/* {Accordian components} */}
      {/* <Accordian /> */}

      {/* {Random Color Component } */}
      {/* <RandomColor /> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image-Slider Component  */}

      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load-more component  */}

      {/* <LoadMoreData /> */}

      {/* Tree-view component/ menu UI component / recursive navigation menu  */}

      {/* <TreeView menus={menus} /> */}

      {/* qr-code-generator  */}
      {/* <QRCodeGenerator /> */}

      {/* light-dark-theme-container */}

      {/* <LightDarkMode /> */}

      {/* Scroll-indicator component  */}

      <ScrollIndicator url={"https://dummyjson.com/products?limit=1000"} />
    </div>
  );
}

export default App;
