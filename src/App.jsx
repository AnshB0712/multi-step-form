import Form from "./components/Form";
import ProgressBar from "./components/ProgressBar";
import FormContextProvider from "./context/FormContext";
function App() {
  return (
    <FormContextProvider>
      <ProgressBar />
      <Form />;
    </FormContextProvider>
  );
}

export default App;
