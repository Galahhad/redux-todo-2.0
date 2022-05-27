import { Provider } from "react-redux";
import Header from "./components/Header";
import Main from "./components/Main";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
