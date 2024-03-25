"use client";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import CustomButton from "./CustomButton";
import { useState } from "react";

import { exerciseOptions, fetchData } from "@/utils/fetchData";
import Exercises from "./Exercises";

const Brands = () => {
  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://api.api-ninjas.com/v1/exercises",
        exerciseOptions
      );
      setExercises(exercisesData);
    }
  };

  return (
    <>
      <Stack
        alignItems="center"
        mt=""
        justifyContent="center"
        p=""
        id="exercises"
        sx={{ backgroundColor: "black", color: "white" }} // Set background and text color
      >
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: "44px", xs: "30px" } }}
          mb="49px"
          textAlign="center"
          variant="h5"
        >
          Must-Try Exercises You <br /> Should Know
        </Typography>
        <Box position="relative" mb="72px">
          <TextField
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "1170px", xs: "350px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            className=""
            sx={{
              bgcolor: "red",
              color: "black",
              textTransform: "none",
              width: { lg: "173px", xs: "80px" },
              height: "56px",
              position: "absolute",
              right: "0px",
              fontSize: { lg: "20px", xs: "14px" },
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
      </Stack>
      <Exercises exercises={exercises} />
    </>
  );
};

export default Brands;
