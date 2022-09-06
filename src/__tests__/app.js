import healthStatus from '../app';

const dataList = [
  [70, 'healthy'],
  [51, 'healthy'],
  [48, 'wounded'],
  [15, 'wounded'],
  [12, 'critical'],
];

const handler = test.each(dataList);

handler('testing health status function', (health, expected) => {
  const result = healthStatus({ name: 'Маг', health });
  expect(result).toBe(expected);
});
