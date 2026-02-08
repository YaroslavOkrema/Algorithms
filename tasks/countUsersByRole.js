const arr = [
  { id: 1, name: 'Anna', role: 'admin' },
  { id: 2, name: 'Oleh', role: 'user' },
  { id: 3, name: 'Ira', role: 'user' },
  { id: 4, name: 'Dmytro', role: 'moderator' },
  { id: 5, name: 'Max', role: 'admin' },
]

function countUsersByRole(users) {
  return users.reduce((acc, { role}) => {
    acc[role] = (acc[role] || 0) + 1
    return acc
  }, {})
}

console.log(countUsersByRole(arr))