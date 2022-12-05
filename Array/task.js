const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
      js: "20%",
      php: "10%",
    },
    exp: "1 month",
  },
};

function showExperience(obj) {
  const { exp } = obj.skills;
  return exp;
}
console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
  let str = "";
  const { programmingLangs } = plan.skills;
  for (let key in programmingLangs) {
    str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
  }
  return str;
}

function showAgeAndLangs(plan){
    let str="";
    const { programmingLangs } = plan.skills;
    for (let key in programmingLangs) {
        str+= ` ${key.toUpperCase()}`;
    }

    let mainStr='';
    const {age} =plan;
    main=age;
    const result = `Мне ${main} и я владею языками:${str} `;
    return result;
}

console.log(showAgeAndLangs(personalPlanPeter));

