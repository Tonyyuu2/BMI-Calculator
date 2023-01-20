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
    cm: "",
    foot: "",
    inch: "",
  });

  console.log("data :", data);

  const inchNumberChecker = (value) => {
    const regex = /[-+.,]/gm;
    if (value.search(regex) >= 0) {
      return "0";
    }
    const valueNumber = Number(value);
    if (valueNumber > 11) {
      return (11).toString();
    } else {
      return value;
    }
  };

  const feetNumberChecker = (value) => {
    const regex = /[-+.,]/gm;
    if (value.search(regex) >= 0) {
      return "4";
    }
    const valueNumber = Number(value);
    if (valueNumber > 7) {
      return (7).toString();
    } else {
      return value;
    }
  };

  const cmNumberChecker = (value) => {
    const regex = /[-+.,]/gm;
    if (value.search(regex) >= 0) {
      return "122";
    }
    const valueNumber = Number(value);
    if (valueNumber > 242) {
      return (242).toString();
    } else {
      return value;
    }
  };

  const ageNumberChecker = (value) => {
    const regex = /[-+.,]/gm;
    if (value.search(regex) >= 0) {
      return "2";
    }
    const valueNumber = Number(value);
    if (valueNumber > 80) {
      return (80).toString();
    } else {
      return value;
    }
  };

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
            InputProps={{
              inputProps: {
                min: 2,
                max: 80,
              },
            }}
            onChange={(e) =>
              setData((prev) => {
                return { ...prev, age: ageNumberChecker(e.target.value) };
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
              value={data.cm}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
                inputProps: {
                  min: 122,
                  max: 242,
                },
              }}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, cm: cmNumberChecker(e.target.value) };
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
                    width: 110,
                  }}
                  type="number"
                  variant="outlined"
                  value={data.foot}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">ft</InputAdornment>
                    ),
                    inputProps: {
                      min: 4,
                      max: 7,
                    },
                  }}
                  onChange={(e) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        foot: feetNumberChecker(e.target.value),
                      };
                    })
                  }
                />
                <TextField
                  sx={{
                    width: 110,
                  }}
                  type="number"
                  variant="outlined"
                  value={data.inch}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">in</InputAdornment>
                    ),
                    inputProps: {
                      min: 0,
                      max: 11,
                    },
                  }}
                  onChange={(e) =>
                    setData((prev) => {
                      return {
                        ...prev,
                        inch: inchNumberChecker(e.target.value),
                      };
                    })
                  }
                />
              </div>
              <FormHelperText>
                {data.foot + data.inch === ""
                  ? "Tall or short, you still a king/queen"
                  : data.foot + data.inch < 52
                  ? "Good luck finding love..."
                  : data.foot + data.inch >= 62
                  ? "How's the weather up there?😳"
                  : data.foot + data.inch >= 52
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
