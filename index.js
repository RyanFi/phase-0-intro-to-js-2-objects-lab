const employee = {name: 'Ryan', address: '1234 Road'}

function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
  const newEmployee = {...employeeObject}
  newEmployee[key] = value
  return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employeeObject, key, value) {
  employee[key] = value
  return employee
}

function deleteFromEmployeeByKey(employeeObject, key) {
  const newEmployee = {...employeeObject}
  delete newEmployee[key]
  return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employeeObject, key) {
    delete employee[key]
    return employee
}