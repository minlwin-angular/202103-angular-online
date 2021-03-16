export interface Student {
    name: string
    gender: string
    contact: { phone: string, email: string }
    course: string
    interests: { [name: string]: boolean }
    newStudent: boolean
}

export class StudentModel {
    private innerList: Student[] = []

    add(student: Student) {
        this.innerList.push(student)
    }

    get list(): Student[] {
        return this.innerList.slice()
    }

    newStudent(): Student {
        const student: Student = {
            name: "",
            gender: "Male",
            contact: { phone: "", email: "" },
            course: "",
            interests: {},
            newStudent: true
        }

        INTERESTS.forEach(value => student.interests[value] = false)

        return student
    }

}

const INTERESTS = ["Web", "Desktop", "Cloud", "Mobile", "Security"]
