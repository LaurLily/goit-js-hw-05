const sortByDescendingFriendCount = users => {
    return users.sort((a, b) => b.friends.length - a.friends.length);
};
  
// Перевірка
console.log(
    sortByDescendingFriendCount([
      {
        name: "Moore Hensley",
        friends: ["Sharron Pace"],
        gender: "male"
      },
      {
        name: "Sharlene Bush",
        friends: ["Briana Decker", "Sharron Pace"],
        gender: "female"
      },
      {
        name: "Ross Vazquez",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        gender: "male"
      },
      {
        name: "Elma Head",
        friends: ["Goldie Gentry", "Aisha Tran"],
        gender: "female"
      },
      {
        name: "Carey Barr",
        friends: ["Jordan Sampson", "Eddie Strong"],
        gender: "male"
      },
      {
        name: "Blackburn Dotson",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        gender: "male"
      },
      {
        name: "Sheree Anthony",
        friends: ["Goldie Gentry", "Briana Decker"],
        gender: "female"
      }
    ])
);

// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]


const getTotalBalanceByGender = (users, gender) => {
    return users
      .filter(user => user.gender === gender)
      .reduce((totalBalance, user) => totalBalance + user.balance, 0);
};
  
// Перевірка
const allUsers = [
    {
      name: "Moore Hensley",
      gender: "male",
      balance: 2811
    },
    {
      name: "Sharlene Bush",
      gender: "female",
      balance: 3821
    },
    {
      name: "Ross Vazquez",
      gender: "male",
      balance: 3793
    },
    {
      name: "Elma Head",
      gender: "female",
      balance: 2278
    },
    {
      name: "Carey Barr",
      gender: "male",
      balance: 3951
    },
    {
      name: "Blackburn Dotson",
      gender: "male",
      balance: 1498
    },
    {
      name: "Sheree Anthony",
      gender: "female",
      balance: 2764
    }
];
  
console.log(getTotalBalanceByGender(allUsers, "male")); // 12053

console.log(getTotalBalanceByGender(allUsers, "female")); // 8863
  
  