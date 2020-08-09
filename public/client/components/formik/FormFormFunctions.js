export const validationFunction = (validationArr, arrOfObjs) => {
  arrOfObjs.map((obj) => {
    return validationArr.push({
      name: obj.name,
      rules: obj.rules,
      yupType: obj.yupType,
    });
    // [{name: 'firstname' rules: ... }, {name: 'lastname', rules: ...} ]
  });
};
