const input = await Deno.readTextFile("./input.txt");
const lines = input.split("\n");
const reports = lines.map((line) =>
  line.split(" ").map((level) => parseInt(level))
);

function hasDuplicates(report: Array<number>) {
  const set = new Set(report);
  return set.size < report.length;
}

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
  return !hasDuplicates(report) && areEqual(report, sorted);
}

function isAllDecreasing(report: Array<number>) {
  const sorted = report.toSorted((a, b) => b - a);
  return !hasDuplicates(report) && areEqual(report, sorted);
}

function passesAdjacencyCheck(report: Array<number>) {
  for (let index = 0; index < report.length - 1; index++) {
    if (Math.abs(report[index] - report[index + 1]) > 3) {
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

function canBeDampened(report: Array<number>) {
  return report.some((_, index, original) =>
    isSafe(original.slice(0, index).concat(original.slice(index + 1)))
  );
}

const safe_reports = reports.filter(
  (report) => isSafe(report) || canBeDampened(report)
);

console.log(safe_reports.length);
