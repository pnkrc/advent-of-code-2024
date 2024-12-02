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

const distances: Array<number> = [];

for (const item of first_list) {
  const count = second_list.reduce(
    (acc, current) => (item === current ? acc + 1 : acc),
    0
  );
  distances.push(item * count);
}

const sum = distances.reduce((acc, current) => acc + current, 0);

console.log(sum);
