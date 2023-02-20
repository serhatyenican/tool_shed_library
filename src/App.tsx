import "./App.css";

import { AppRoutes } from "./infrastructure/routes/appRoutes";
import { Layout } from "./infrastructure/layout/layout";
import { appStore } from "./services/store/store";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
    return (
        <div className="App">
            <ChakraProvider>
                <Layout>
                    <Provider store={appStore}>
                        <AppRoutes></AppRoutes>
                    </Provider>
                </Layout>
            </ChakraProvider>
        </div>
    );
}

export default App;
