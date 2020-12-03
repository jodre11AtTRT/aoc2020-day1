import lines from "lines-async-iterator";

const TARGET = 2020;

const main = async () => {
  const before = [];
  for await (const line of lines(`./input.txt`)) {
    const value = parseInt(line, 10);
    if (!value) {
      throw new Error(`Invalid input "${value}"`);
    }

    let found = false;
    for (let i = 0; i < before.length; i++) {
      const b = before[i];
      if (b + value === TARGET) {
        return b * value;
      }

      if (b === value) {
        found = true;
        break;
      }
    }

    if (!found) {
      before.push(value);
    }
  }

  return null;
};

export default main;
