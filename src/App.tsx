import "./App.css";
import { Provider } from "react-redux";
import { appStore } from "./infrastructure/services/store/store";
import { AppRoutes } from "./infrastructure/routes/appRoutes";
import { Layout } from "./infrastructure/layout/layout";

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
