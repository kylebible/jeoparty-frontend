import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { GameContext, Clue } from "../../types/types";

interface GameboardProps {
  gameContext: GameContext;
}

export const Gameboard = ({ gameContext }: GameboardProps) => {
  const categoryNames = gameContext.categories.map((cat) => cat.name);

  // Create 5x6 grid of clues (excluding category row)
  const clueGrid = Array(5)
    .fill(null)
    .map((_, rowIndex) =>
      Array(6)
        .fill(null)
        .map((_, colIndex) => {
          const category = gameContext.categories[colIndex];
          return category?.clues[rowIndex] || null;
        })
    );

  // Helper function to determine font size based on text length
  const getFontSize = (text: string) => {
    if (text.length > 20) return "2xl";
    if (text.length > 15) return "3xl";
    if (text.length > 12) return "4xl";
    return "6xl";
  };

  return (
    <Box w="100%" h="100vh" p={4} bg="darkBlue">
      <Grid
        templateRows="repeat(6, 1fr)"
        gridTemplateColumns="repeat(6, 1fr)"
        gap={4}
        h="100%"
      >
        {/* Category Headers */}
        {categoryNames.map((name, index) => (
          <GridItem
            key={`category-${index}`}
            bg="darkOrange"
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            width="100%"
          >
            <Text
              fontSize={getFontSize(name)}
              fontWeight="bold"
              textAlign="center"
              color="yellow"
              opacity={0.8}
              lineHeight="shorter"
              maxHeight="100%"
              width="100%"
              overflow="hidden"
            >
              {name}
            </Text>
          </GridItem>
        ))}

        {/* Clue Values */}
        {clueGrid.flat().map((clue, index) => (
          <GridItem
            key={`clue-${index}`}
            bg="blue"
            p={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            width="100%"
          >
            <Text fontSize="8xl" fontWeight="bold" color="yellow.200">
              {clue ? `$${clue.value}` : ""}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
