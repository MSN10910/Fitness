// Import necessary modules and components
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

interface Exercise {
  name: string;
  muscle: string;
  instructions: string;
  difficulty: string;
  equipment: string;
  type: string;
}

interface Props {
  exercises: Exercise[];
}

// Define the Exercises component
const Exercises: React.FC<Props> = ({ exercises }) => {
  return (
    <Box id="exercises" sx={{ mt: { lg: "px", xs: "" }, p: "20px", backgroundColor: "black", color: "white" }}>
      <Typography variant="h7" mb="46px" sx={{ color: "white" }}>
      Your Exercises Await
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

// Export the Exercises component
export default Exercises;
