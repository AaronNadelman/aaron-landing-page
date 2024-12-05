import Button from "./components/Button";
import ButtonGradient from "./assets/svg/ButtonGradient.svg";

interface AppProps {
  name: string;
}

const App: React.FC<AppProps> = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <Button></Button>
      <ButtonGradient />
    </div>
  );
};

export default App;
