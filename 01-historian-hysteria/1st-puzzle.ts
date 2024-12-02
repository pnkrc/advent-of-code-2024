const input = await Deno.readTextFile("./input.txt");
const first_list: Array<number> = [];
const second_list: Array<number> = [];

const lines = input.split("\n");
for (const line of lines) {
  const pair = line.split("   ");
  const first = parseInt(pair[0]);
  const second = parseInt(pair[1]);
  first_list.push(first);
  second_list.push(second);
}

function sort(a: number, b: number) {
  return a - b;
}

first_list.sort(sort);
second_list.sort(sort);

const distances: Array<number> = [];

for (const index in first_list) {
  const distance = Math.abs(first_list[index] - second_list[index]);
  distances.push(distance);
}

const sum = distances.reduce((acc, current) => acc + current, 0);

console.log(sum);
