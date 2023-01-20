import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import {
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Input,
  InputAdornment,
  InputLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";

function Form() {
  const [unit, setUnit] = useState("US Units");
  console.log("unit :", unit);

  const [data, setData] = useState({
    age: "",
    height: "",
    foot: "",
    inch: "",
  });
  console.log("data--- :", data.foot + data.inch);

  return (
    <div>
      <div className="flex justify-center mb-2">
        <FormControl>
          <RadioGroup row defaultValue="US Units">
            <FormControlLabel
              value="US Units"
              control={<Radio />}
              label="US Units"
              labelPlacement="top"
              onChange={(e) => setUnit(e.target.value)}
            />
            <FormControlLabel
              value="Metric Units"
              control={<Radio />}
              label="Metric Units"
              labelPlacement="top"
              onChange={(e) => setUnit(e.target.value)}
            />
          </RadioGroup>
        </FormControl>
      </div>
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
            required
            // error={data.age.length === 0 && true}
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
          {unit === "Metric Units" && (
            <TextField
              label="height"
              type="number"
              variant="outlined"
              value={data.height}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
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
                  : data.height >= 188
                  ? "How's the weather up there?😳"
                  : data.height >= 157
                  ? "Pssh... I can take you 🤺"
                  : null
              }
            />
          )}
          {unit === "US Units" && (
            <div className="flex flex-col ">
              <p className="text-sm mb-1">Height</p>
              <div className="flex gap-3">
                <TextField
                  sx={{
                    width: 100,
                  }}
                  type="number"
                  variant="outlined"
                  value={data.foot}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">ft</InputAdornment>
                    ),
                  }}
                  onChange={(e) =>
                    setData((prev) => {
                      return { ...prev, foot: e.target.value };
                    })
                  }
                />
                <TextField
                  sx={{
                    width: 100,
                  }}
                  type="number"
                  variant="outlined"
                  value={data.inch}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">in</InputAdornment>
                    ),
                  }}
                  onChange={(e) =>
                    setData((prev) => {
                      return { ...prev, inch: e.target.value };
                    })
                  }
                />
              </div>
              <FormHelperText>
                {data.foot + data.inch === ""
                  ? "Tall or short, you still a king/queen"
                  : data.foot + data.inch < 52
                  ? "Good luck finding love..."
                  : data.height + data.inch >= 62
                  ? "How's the weather up there?😳"
                  : data.height + data.inch >= 52
                  ? "Pssh... I can take you 🤺"
                  : null}
              </FormHelperText>
            </div>
          )}
        </FormControl>
      </div>
    </div>
  );
}

export default Form;
