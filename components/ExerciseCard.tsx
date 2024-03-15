"use client";

import { Link } from "react-scroll";
import { Button, Stack, Typography } from "@mui/material";

interface Exercise {
 
  name: string;
  muscle: string;
  instructions: string;
  difficulty:string;
  equipment: string;
  type: string;
}


const ExerciseCard = ({ exercise }: { exercise: Exercise }) => {
  return (
    <Link className="exercise-card" to={"/exercise/${exercise.id}"}>
         <Typography variant="h6" sx={{ color: "red" }}>
        {exercise.muscle}
      </Typography>
      <h2>{exercise.name}</h2>
      <p>{exercise.instructions}</p>
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.muscle}
        </Button>
      </Stack>
    </Link>
  );
};

export default ExerciseCard;
