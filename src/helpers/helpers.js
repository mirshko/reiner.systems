export const randomPastelHsl = () => {
  return {
    h: 360 * Math.random(),
    s: 25 + 70 * Math.random(),
    l: 85 + 10 * Math.random()
  };
};

export const hsl = ({ h, s, l }) => `hsl(${h}, ${s}%, ${l}%)`;
