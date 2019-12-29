const testVar = {};

function testFunc() {
  return "hi";
}

superbowlWin = record => {
  let findWin = record.find(r => r.result === "W");
  return findWin ? findWin.year : undefined;
};
