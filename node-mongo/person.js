var id=-1

class Person {
  constructor(id, name) {
    this.id = id
    this.name = name;
  }
}


class PersonFactory {
  createPerson(name) {
    return new Person(this.getId(), name)
  }

  getId() {
    return ++id
  }
}

const newPerson = new PersonFactory()
console.log(newPerson.createPerson('nishant')) 
console.log(newPerson.createPerson('nishant1'))
console.log(newPerson.createPerson('nishant2'))

// 9850691424