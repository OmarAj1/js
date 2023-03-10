  const data = [{
      name: "John",
      birthday: "1-1-1995",
      favoriteFoods: {
          meats: ["hamburgers", "sausages"],
          fish: ["salmon", "pike"],
      },
  }, {
      name: "Mark",
      birthday: "10-5-1980",
      favoriteFoods: {
          meats: ["hamburgers", "steak", "lamb"],
          fish: ["tuna", "salmon", "barracuda"],
      },
  }, {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
          meats: ["ham", "chicken"],
          fish: ["pike"],
      },
  }, {
      name: "Thomas",
      birthday: "1-10-1990",
      favoriteFoods: {
          meats: ["bird", "rooster"],
          fish: ["salmon"],
      },
  }, {
      name: "Mary",
      birthday: "1-10-1977",
      favoriteFoods: {
          meats: ["hamburgers", "lamb"],
          fish: ["anchovies", "tuna"],
      },
  }, ];
  //q1
  for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);
  }
  // or 
  const returnNames = (arr) => arr.map((obj) => obj.name);
  console.log(returnNames(data));

  //q2 
  for (let i = 0; i < data.length; i++) {
      if (data[i].birthday.slice(-4) <= 1990) {
          console.log(data[i]);
      }
  }
  //or
  const getOldPeople = (arrOfObjects) => arrOfObjects.filter((obj) => Number(obj.birthday.split('-')[2]) < 1990);
  console.log(getOldPeople(data));​

  //q3 
  const func3 = arr => {
      const arr3 = {}
      const arr2 = arr.map(el => {
              return [el.favoriteFoods.meats, el.favoriteFoods.fish]

          })
          .flat(2)
      arr2.forEach(element => {
          arr3[element] ? arr3[element] += 1 : arr3[element] = 1
      });
      return arr3
  }