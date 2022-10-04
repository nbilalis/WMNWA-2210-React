import { useCallback, useEffect, useMemo, useState } from "react";

import List from "./List";

import useLogRender from "./hooks/useLogRender";

import "./styles.css";

// Code outside Components run "once".
const fruits = [
  "apple",
  "banana",
  "cherry",
  "durian",
  "eggplant",
  "fig",
  "grape"
];

export default function App({ color = "red" }) {
  useLogRender("App");

  const [counter, setCounter] = useState(0);

  const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
  ];

  const memoizedPlanets = useMemo(() => planets, [planets]);

  const toTitleCase = (str: string) =>
    str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );

  const memoizeToTitleCase = useCallback(toTitleCase, []);

  useEffect(() => {
    console.log(toTitleCase("this is a test."));
  }, [toTitleCase]);

  useEffect(() => {
    console.log(memoizeToTitleCase("this is a memoized test."));
  }, [memoizeToTitleCase]);

  return (
    <>
      <List things={fruits} formatCb={memoizeToTitleCase} />
      <List things={planets} formatCb={memoizeToTitleCase} />
      <List things={memoizedPlanets} formatCb={toTitleCase} />
      <button
        onClick={() => {
          setCounter((c) => c + 1);
        }}
      >
        Click me {counter}
      </button>
    </>
  );
}
