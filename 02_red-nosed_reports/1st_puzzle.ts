const input = await Deno.readTextFile("./input.txt");
const lines = input.split("\n");
const reports = lines.map((line) =>
  line.split(" ").map((level) => parseInt(level))
);

function areEqual(a: Array<number>, b: Array<number>) {
  for (const index in a) {
    if (a[index] !== b[index]) {
      return false;
    }
  }
  return true;
}

function isAllIncreasing(report: Array<number>) {
  const sorted = report.toSorted((a, b) => a - b);
  return areEqual(report, sorted);
}

function isAllDecreasing(report: Array<number>) {
  const sorted = report.toSorted((a, b) => b - a);
  return areEqual(report, sorted);
}

function passesAdjacencyCheck(report: Array<number>) {
  for (let index = 0; index < report.length - 1; index++) {
    const distance = Math.abs(report[index] - report[index + 1]);
    if (distance === 0 || distance > 3) {
      return false;
    }
  }
  return true;
}

function isSafe(report: Array<number>) {
  return (
    (isAllIncreasing(report) || isAllDecreasing(report)) &&
    passesAdjacencyCheck(report)
  );
}

const safe_reports = reports.filter((report) => isSafe(report));

console.log(safe_reports.length);
