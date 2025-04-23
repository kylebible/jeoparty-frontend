import { Box } from "@chakra-ui/react";
import { Gameboard } from "./components/gameboard/Gameboard";
import { mockGameContext } from "./mocks/mockGame";

const App: React.FC = () => {
  return <Gameboard gameContext={mockGameContext} />;
};

export default App;
