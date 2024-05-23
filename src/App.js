import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";

function App() {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {path: "/",
        element: <Main />
        }
      ]
    }
  ]) 

  return (
    <Provider store={store}>
      <div >
        <Head />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
