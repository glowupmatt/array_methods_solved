import { data } from "../data/data";

// SPACE DATA EXERCISE 14
// Return the sum of orbital periods of all asteroids
// Return example: 234234.234

export function getOrbitalPeriodsSum(data) {
  // Your code goes here...
  const orbitalArr = [];
  let orbitalSum;
  data.asteroids.filter((droid) => {
    orbitalArr.push(droid.orbitalPeriod);
  });
  orbitalSum = orbitalArr.reduce((a, c) => a + c, 0);
  return orbitalSum;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
