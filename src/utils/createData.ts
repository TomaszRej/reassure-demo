export const createData = () => {
  const arr = [];

  for (let i = 1; i <= 100_000; i++) {
    arr.push({
      id: i,
      title: `title-${i}`,
    });
  }

  return arr;
};
