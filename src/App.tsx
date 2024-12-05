import ButtonGradient from "./assets/svg/ButtonGradient";

interface AppProps {
  name?: string;
}

const App: React.FC<AppProps> = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <ButtonGradient />
    </div>
  );
};

export default App;
