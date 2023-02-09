const tellFortune = function (
  jobTitle,
  location,
  partnerName,
  NumberOfChildren
) {
  console.log(
    `you will be a ${jobTitle} in ${location} married to ${partnerName} with ${NumberOfChildren} children `
  );
};
const spain = tellFortune("programmer", "NewYork", "madrid", 2);
