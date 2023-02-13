import "./App.css";


import { AppRoutes } from "./infrastructure/routes/appRoutes";
import { Layout } from "./infrastructure/layout/layout";
import { appStore } from "./services/store/store";
import { Provider } from "react-redux";

function App() {
    return (
        <div className="App">
            <Layout>
                <Provider store={appStore}>
                    <AppRoutes></AppRoutes>
                </Provider>
            </Layout>
        </div>
    );
}

export default App;
