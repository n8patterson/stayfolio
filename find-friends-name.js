const findFriendsName = (users) => {
  return users.filter((user) => user.length === 4);
};

console.log(findFriendsName(['Ryan', 'Kieran', 'Mark'])); //ex) ["Ryan", "Kieran", "Mark"] => ["Ryan", "Mark"]
