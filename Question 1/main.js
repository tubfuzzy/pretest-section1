const thisIsSyncFunction = async () => {
  const response = await fetch('https://codequiz.azurewebsites.net/data');
  const json = await response.json();
  return json.data;
}

( async function () {
  const number1 = await thisIsSyncFunction();
  const calculation = number1 * 10;
  console.log(calculation);
})()


