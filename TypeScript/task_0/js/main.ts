interface Student {
  firstName: string
  lastName: string
  age: Number
  location: string
}

const student1: Student = {
  firstName: 'Alexandre',
  lastName: 'Gaubert',
  age: 30,
  location: 'Laval'
}

const student2: Student = {
  firstName: 'Someone',
  lastName: 'Else',
  age: 22,
  location: 'Paris'
}

const studentsList: Student[] = [student1, student2]

const tableElement: HTMLTableElement = document.createElement('table')
for (const student of studentsList) {
  const rowElement: HTMLTableRowElement = document.createElement('tr')

  const firstNameCellElement: HTMLTableCellElement = document.createElement('td')
  firstNameCellElement.innerText = student.firstName
  rowElement.append(firstNameCellElement)

  const locationCellElement: HTMLTableCellElement = document.createElement('td')
  locationCellElement.innerText = student.location
  rowElement.append(locationCellElement)

  tableElement.append(rowElement)
}
document.body.append(tableElement)
