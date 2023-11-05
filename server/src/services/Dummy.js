const { Complete_Data } = require("../../Complete_Backend_Database");

const dummyRecomendation = (body) => {
  const foodCategory = [body.typeOfFood];
  const placeCategory = [body.interestedPlaces];
  const NumDays = parseInt(body.noOfDays);
  const DayOfVisit = body.noOfPeople;
  const location = body.planStay;
  MinAge = parseInt(body.minAge);
  MaxAge = parseInt(body.maxAge);

  All_Food_Items = [];
  for (let i = 0; i < foodCategory.length; i++) {
    All_Food_Items = [
      ...All_Food_Items,
      ...Complete_Data[location].Food_Items[foodCategory[i]],
    ];
  }

  All_Places = [];
  for (let i = 0; i < placeCategory.length; i++) {
    All_Places = [
      ...All_Places,
      ...Complete_Data[location].Places[placeCategory[i]].Age_Place_Recomm[MinAge],
      ...Complete_Data[location].Places[placeCategory[i]].Age_Place_Recomm[MaxAge],
    ];
  }

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  function dayToNumber(dayName) {
    return days.indexOf(dayName);
  }

  const Final_Data_Obj = [];

  let placeIndex = 0;
  let foodIndex = 0;

  console.log(dayToNumber(DayOfVisit), dayToNumber(DayOfVisit) + NumDays);

  for (let i = dayToNumber(DayOfVisit); i < dayToNumber(DayOfVisit) + NumDays; i++) {
    const day = i % 7; // To loop back to Sunday after Saturday

    const Places = All_Places.slice(placeIndex, placeIndex + 3);
    placeIndex = (placeIndex + 3) % All_Places.length;

    const Food_Items = All_Food_Items.slice(foodIndex, foodIndex + 3);
    foodIndex = (foodIndex + 3) % All_Food_Items.length;

    Week_Day = days[day];
    Final_Data_Obj.push({ Week_Day, Places, Food_Items });
  }

  return Final_Data_Obj;
};

module.exports = { dummyRecomendation };
