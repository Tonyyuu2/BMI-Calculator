import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import {
  Button,
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
import ErrorHandling from "../ErrorHandling/ErrorHandling";

function Form() {
  const [unit, setUnit] = useState("US Units");
  const [data, setData] = useState({
    age: "",
    cm: "",
    foot: "",
    inch: "",
    lbs: "",
    kg: "",
    male: false,
    female: false,
    usBmi: 0,
    metricBmi: 0,
    calculate: false,
    maleChecked: false,
    femaleChecked: false,
  });
  console.log("data :", data);
  const [error, setError] = useState({
    ageError: false,
    cmError: false,
    footError: false,
    inchError: false,
    kgError: false,
    lbsError: false,
    genderError: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (data.male === false && data.female === false) {
      setError((prev) => {
        return { ...prev, genderError: true };
      });
      // return;
    } else {
      setError((prev) => {
        return { ...prev, genderError: false };
      });
    }

    if (data.age === "") {
      setError((prev) => {
        return { ...prev, ageError: true };
      });
      // return;
    } else {
      setError((prev) => {
        return { ...prev, ageError: false };
      });
    }

    if (unit === "US Units" && data.foot === "") {
      setError((prev) => {
        return { ...prev, footError: true };
      });
      // return;
    } else {
      setError((prev) => {
        return { ...prev, footError: false };
      });
    }

    if (unit === "US Units" && data.inch === "") {
      setError((prev) => {
        return { ...prev, inchError: true };
      });
      // return;
    } else {
      setError((prev) => {
        return { ...prev, inchError: false };
      });
    }

    if (unit === "US Units" && data.lbs === "") {
      setError((prev) => {
        return { ...prev, lbsError: true };
      });
      // return;
    } else {
      setError((prev) => {
        return { ...prev, lbsError: false };
      });
    }

    if (unit === "Metric Units" && data.cm === "") {
      setError((prev) => {
        return { ...prev, cmError: true };
      });
      // return;
    } else {
      setError((prev) => {
        return { ...prev, cmError: false };
      });
    }

    if (unit === "Metric Units" && data.kg === "") {
      setError((prev) => {
        return { ...prev, kgError: true };
      });
      // return;
    } else {
      setError((prev) => {
        return { ...prev, kgError: false };
      });
    }

    if (unit === "US Units") {
      const feetToInches = Number(data.foot) * 12;
      const newInch = feetToInches + Number(data.inch);
      const bmi = (Number(data.lbs) / newInch / newInch) * 703;
      setData((prev) => {
        return { ...prev, usBmi: bmi };
      });
    }

    if (unit === "Metric Units") {
      const convertedKg = Number(data.kg);
      const convertedCm = Number(data.cm);
      const bmi = (convertedKg / convertedCm / convertedCm) * 10000;
      setData((prev) => {
        return { ...prev, metricBmi: bmi };
      });
    }
  };

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
      return "87";
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

  const lbsNumberChecker = (value) => {
    const regex = /[-+.,]/gm;
    if (value.search(regex) >= 0) {
      return "26";
    }
    const valueNumber = Number(value);
    if (valueNumber > 600) {
      return (600).toString();
    } else {
      return value;
    }
  };

  const kgNumberChecker = (value) => {
    const regex = /[-+.,]/gm;
    if (value.search(regex) >= 0) {
      return "12";
    }
    const valueNumber = Number(value);
    if (valueNumber > 272) {
      return (272).toString();
    } else {
      return value;
    }
  };

  return (
    <div>
      <div className="flex justify-center mb-2 items-center mt-5">
        <FormControl>
          <RadioGroup row defaultValue="US Units">
            <FormControlLabel
              value="US Units"
              control={<Radio />}
              label="US Units"
              labelPlacement="top"
              onChange={(e) => setUnit(e.target.value)}
              onClick={() => {
                setError({
                  ageError: false,
                  cmError: false,
                  footError: false,
                  inchError: false,
                  kgError: false,
                  lbsError: false,
                  genderError: false,
                });
                setData({
                  age: "",
                  cm: "",
                  foot: "",
                  inch: "",
                  lbs: "",
                  kg: "",
                  male: false,
                  female: false,
                  usBmi: 0,
                  metricBmi: 0,
                  maleChecked: false,
                  femaleChecked: false,
                });
              }}
            />
            <FormControlLabel
              value="Metric Units"
              control={<Radio />}
              label="Metric Units"
              labelPlacement="top"
              onChange={(e) => setUnit(e.target.value)}
              onClick={() => {
                setError({
                  ageError: false,
                  cmError: false,
                  footError: false,
                  inchError: false,
                  kgError: false,
                  lbsError: false,
                  genderError: false,
                });
                setData({
                  age: "",
                  cm: "",
                  foot: "",
                  inch: "",
                  lbs: "",
                  kg: "",
                  male: false,
                  female: false,
                  usBmi: 0,
                  metricBmi: 0,
                  calculate: false,
                  maleChecked: false,
                  femaleChecked: false,
                });
              }}
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div className="bg-white w-auto h-auto p-6 flex rounded-xl flex-col ">
        <h1 className="mb-3 flex justify-center">Add values below 😊</h1>
        <FormControl className="gap-2 flex justify-center items-center">
          <RadioGroup row>
            <FormControlLabel
              value="Male"
              control={<Radio />}
              label="Male"
              labelPlacement="top"
              checked={data.maleChecked}
              onChange={() =>
                setData((prev) => {
                  return { ...prev, male: true, female: false };
                })
              }
              onClick={() =>
                setData((prev) => {
                  return { ...prev, maleChecked: true, femaleChecked: false };
                })
              }
            />
            <FormControlLabel
              value="Female"
              control={<Radio />}
              label="Female"
              labelPlacement="top"
              checked={data.femaleChecked}
              onChange={() =>
                setData((prev) => {
                  return { ...prev, male: false, female: true };
                })
              }
              onClick={() =>
                setData((prev) => {
                  return { ...prev, femaleChecked: true, maleChecked: false };
                })
              }
            />
          </RadioGroup>
          {error.genderError && <ErrorHandling gender={true} />}
          <TextField
            sx={{
              width: 230,
            }}
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
          {error.ageError && <ErrorHandling age={true} />}
          {unit === "Metric Units" && (
            <TextField
              sx={{
                width: 230,
              }}
              label="height"
              type="number"
              variant="outlined"
              value={data.cm}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">cm</InputAdornment>
                ),
                inputProps: {
                  min: 87,
                  max: 242,
                },
              }}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, cm: cmNumberChecker(e.target.value) };
                })
              }
              helperText={
                data.cm === ""
                  ? "Tall or short, you still a king/queen"
                  : data.cm < 157
                  ? "Good luck finding love..."
                  : data.cm >= 188
                  ? "How's the weather up there?😳"
                  : data.cm >= 157
                  ? "Pssh... I can take you 🤺"
                  : null
              }
            />
          )}
          {error.cmError && <ErrorHandling cm={true} />}
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
                      min: 2,
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
          {error.footError && <ErrorHandling foot={true} />}
          {error.inchError && <ErrorHandling inch={true} />}
          {unit === "US Units" && (
            <TextField
              sx={{
                width: 230,
              }}
              label="Weight"
              type="number"
              variant="outlined"
              value={data.lbs}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">lbs</InputAdornment>
                ),
                inputProps: {
                  min: 26,
                  max: 600,
                },
              }}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, lbs: lbsNumberChecker(e.target.value) };
                })
              }
              helperText={
                data.lbs === ""
                  ? "Don't be shy"
                  : data.lbs <= 26
                  ? "You can't possibly weigh less than a 2 year old.."
                  : data.lbs <= 157
                  ? "Congrats, you weigh as much as the average highschooler."
                  : data.lbs >= 300
                  ? "Okay okay CHIIIILL"
                  : data.lbs >= 157
                  ? "I can squat you. For reps..."
                  : null
              }
            />
          )}
          {error.lbsError && <ErrorHandling lbs={true} />}
          {unit === "Metric Units" && (
            <TextField
              sx={{
                width: 230,
              }}
              label="Weight"
              type="number"
              variant="outlined"
              value={data.kg}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">kg</InputAdornment>
                ),
                inputProps: {
                  min: 12,
                  max: 272,
                },
              }}
              onChange={(e) =>
                setData((prev) => {
                  return { ...prev, kg: kgNumberChecker(e.target.value) };
                })
              }
              helperText={
                data.kg === ""
                  ? "Don't be shy"
                  : data.kg <= 12
                  ? "You can't possibly weigh less than a 2 year old.."
                  : data.kg <= 72
                  ? `Congrats, you weigh as much as the average highschooler.`
                  : data.kg >= 272
                  ? "Okay okay CHIIIILL"
                  : data.kg >= 72
                  ? "I can squat you. For reps..."
                  : null
              }
            />
          )}
          {error.kgError && <ErrorHandling kg={true} />}
          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={(e) => {
              handleSubmit(e);
              if (
                unit === "US Units" &&
                data.age &&
                data.foot &&
                data.inch &&
                data.lbs &&
                (data.female || data.male)
              ) {
                setData((prev) => {
                  return { ...prev, calculate: true };
                });
              }
              if (
                unit === "Metric Units" &&
                data.age &&
                data.cm &&
                data.kg &&
                (data.female || data.male)
              ) {
                setData((prev) => {
                  return { ...prev, calculate: true };
                });
              }
            }}
          >
            Calculate
          </Button>
        </FormControl>
      </div>
      {/* results */}
      <div className="flex flex-col w-[20rem] justify-center items-center mt-4">
        {data.calculate && (
          <>
            <i className="text-lg ">
              {`As a ${
                data.male
                  ? "biological man..."
                  : data.female
                  ? "biological woman..."
                  : ""
              }`}
            </i>
            <div className="flex items-center">
              <i className="">You have a BMI of:&nbsp;</i>
              <p className="text-2xl font-bold underline">{`${
                unit === "US Units"
                  ? `${Math.ceil(data.usBmi)}`
                  : unit === "Metric Units"
                  ? `${Math.ceil(data.metricBmi)}`
                  : ""
              }`}</p>
            </div>
            <br />

            <p className="text-center">
              {data.usBmi < 18.5
                ? "Good news! You are underweight! You have a lot of room to grow so get eatin'!"
                : data.usBmi < 25
                ? "Awesome! You're within healthy weight. Keep it up!"
                : data.usBmi < 29
                ? "Unfortunately, you are considered overweight. Time to hit the gym!"
                : data.usBmi > 30
                ? "This isn't easy, but you're considered obese. Time to rethink the lifestyle."
                : ""}
            </p>
          </>
        )}
      </div>
    </div>
  );
}


export default Form;
