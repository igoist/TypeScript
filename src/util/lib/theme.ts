export const theme = (type:string) => {
  switch (type) {
    case 'pink':
      return 'f49cec';
    case 'green':
      return '#0f0';
    case 'blue':
      return '#149cec';
    case '':
      return '#149cec';
    default:
      return type;
  }
};
