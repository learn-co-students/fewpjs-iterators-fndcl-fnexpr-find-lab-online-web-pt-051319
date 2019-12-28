

function winYear(record) {
  return record.result === "W";
}

function superbowlWin(testVar) {
  if (testVar.find(winYear)) {
    const win = testVar.find(winYear);
    return win.year;
  }

}


