const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dayindex = (day) => {
  return days.indexOf(day);
};

function solution(testDict) {
  let resultDict = {};
  let check = [];
  for (let i = 0; i < days.length; i++) {
    resultDict[days[i]] = 0;
    // initially marked all days a unchecked
    check.push(-1);
  }
  for (var key in testDict) {
    //putting day value in dictionary
    resultDict[days[new Date(key).getDay()]] += testDict[key];
    // marking check as day visited
    check[new Date(key).getDay()] = 0;
  }

  for (let key in resultDict) {
    let index = dayindex(key);
    // Here check will help in knowing which day not occur in testDict
    if (check[index] == -1) {
      // 2 corner case
      if (index == 0) {
        resultDict[key] = resultDict[days[index + 1]];
      } else if (index == days.length - 1) {
        resultDict[key] = resultDict[days[index - 1]];
      } else {
        //putting value of means & handling floating point exception
        if (resultDict[days[index+1]]!= 0||resultDict[days[index-1]]!=0) {
          resultDict[key]=(resultDict[days[index+1]]+resultDict[days[index-1]])/2;
        } else {
          //if both prev & next day value = zero then => current day value will also be zero 
          resultDict[key] = 0;
        }
      }
    }
  }
  return resultDict;
}

//test cases 
let testDict_1 = {
  "2021-08-01": 4,
  "2021-08-25": 232,
  "2021-08-24": -123,
  "2021-08-23": 23,
  "2021-08-05": 2322,
  "2021-08-06": -6,
  "2021-08-29": 743,
  "2021-08-08": -2,
};

let testDict_2 = {
  "2021-09-05": -1434,
  "2021-09-01": 0,
  "2021-09-16": 6434,
  "2021-09-02": 843,
  "2021-09-12": 422,
  "2021-09-22": 676,
  "2021-09-08": -256,
  "2021-09-03": -2,
};

let testDict_3 = {
  "2022-05-03": 112,
  "2022-05-04": 232,
  "2022-05-05": 34,
  "2022-05-06": 45,
  "2022-05-14": 577878,
  "2022-05-06": -6565,
  "2022-05-20": -2565,
  "2022-05-12": -256,
};

let testDict_4 = {
  "2022-10-12": -143,
  "2022-10-18": -2565,
  "2022-10-03": 4898,
  "2022-10-09": 254,
  "2022-11-11": 7787,
  "2022-11-16": 9676,
  "2022-11-22": 54,
  "2022-11-14": -234,
};

let testDict_5 = {
  "2020-09-13": -1121,
  "2020-10-22": -232,
  "2020-09-21": 34343,
  "2020-10-09": 4565,
  "2022-11-11": 278788,
  "2022-11-12": -635,
  "2022-11-18": 8323,
  "2022-11-19": -2233,
};

let testDict_6 = {
  "2021-08-01": 1,
  "2021-08-02": 2,
  "2021-08-04": 1,
  "2021-08-06": 10,
  "2021-08-11": 11,
};

const sol = solution(testDict_1)
console.log(sol);