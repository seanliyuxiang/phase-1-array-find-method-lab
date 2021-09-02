const superbowlWin = record => {
  let yrResultObjWithAWin = record.find(yrResultObj => yrResultObj.result === 'W');
  if (yrResultObjWithAWin === undefined) {
    return undefined;
  }
  return yrResultObjWithAWin.year;
};