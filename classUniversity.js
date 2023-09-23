class University {
    constructor() {
        this.teachers = [];
        this.students = [];
    }

    addMember(member) {
        if (member instanceof UniversityMember) {
            if (member.role === "teacher") {
                this.teachers.push(member);
            } else if (member.role === "student") {
                this.students.push(member);
            }
        }
    }

    removeMember(member) {
        if (member instanceof UniversityMember) {
            if (member.role === "teacher") {
                this.teachers = this.teachers.filter(teacher => teacher !== member);
            } else if (member.role === "student") {
                this.students = this.students.filter(student => student !== member);
            }
        }
    }

    startLesson() {
        this.teachers.forEach(teacher => teacher.decreaseEnergy(5));
        this.students.forEach(student => student.decreaseEnergy(2));
    }
}

class UniversityMember {
    constructor(name, age, role) {
        this.name = name;
        this.age = age;
        this.role =  role;
        this.energy = 24;
    }

    info() {
        return {
            name: this.name,
            age: this.age,
            role: this.role,
            energy: this.energy,
        };
    }

    decreaseEnergy(amount) {
        if (this.energy >= amount) {
            this.energy -= amount;
        } else {
            return console.log(`${this.name} has no energy`);
        }
    }
}

class Teacher extends UniversityMember {
    constructor(name, age) {
        super(name, age, "teacher");
    }
}

class Student extends UniversityMember {
    constructor(name, age) {
        super(name, age, "student");
    }
}

const university = new University();
const teacher1 = new Teacher("Joe", 37);
const student1 = new Student("Doe", 19);
const student2 = new Student("Jim", 20);

university.addMember(teacher1);
university.addMember(student1);
university.addMember(student2);

university.startLesson();

university.removeMember(student1);
