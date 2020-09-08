function getStatistics(data, ubs) {
  const city = ubs.split(' ')[ubs.split(' ').length - 1];
  const [currentCity] = data.filter(item => Object.keys(item) == city);
  const [currentUBS] = Object.values(currentCity);
  const { casos, comorb, obito } = currentUBS[ubs];
  return { casos, comorb, obito };
}

export default getStatistics;
