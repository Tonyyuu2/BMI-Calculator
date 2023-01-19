import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import {
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";

function Form() {
  const [unit, setUnit] = useState({
    usUnits: true,
    metricUnits: false,
  });

  const [data, setData] = useState({
    age: "",
    height: "",
  });

  return (
    <div>
      <div className="bg-white w-auto h-auto p-6 flex rounded-xl flex-col ">
        <h1 className="mb-3 flex justify-center">Add values below 😊</h1>
        <FormControl className="gap-5">
          <TextField
            label="Age"
            type="number"
            variant="outlined"
            value={data.age}
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, age: e.target.value };
              })
            }
            helperText={
              data.age === ""
                ? "I won't judge"
                : data.age < 21
                ? "YOU'RE TOO YOUNG"
                : data.age > 21
                ? "WOAH WOAH WOAH OLD TIMER"
                : "let's go"
            }
          />
          <TextField
            label="height"
            type="number"
            variant="outlined"
            value={data.height}
            InputProps={{
              endAdornment: <InputAdornment position="end">cm</InputAdornment>,
            }}
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, height: e.target.value };
              })
            }
            helperText={
              data.height === ""
                ? "Tall or short, you still a king/queen"
                : data.height < 157
                ? "Good luck finding love..."
                : data.height > 21
                ? "WOAH WOAH WOAH OLD TIMER"
                : "let's go"
            }
          />
        </FormControl>
      </div>
    </div>
  );
}

export default Form;
