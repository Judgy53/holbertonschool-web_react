namespace Subjects {
  export interface Teacher {
    experienceTeacherC?: number
  }

  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp'
    }

    getAvailableTeacher(): string {
      if (this.teacher.experienceTeacherC)
        return `Available Teacher: ${this.teacher.firstName}`
      return 'No available teacher'
    }
  }
}
