javascriptlet student = {
    name: "John Doe",     // String
    age: 21,              // Number
    isGraduated: false,   // Boolean
    futureGoals: null,    // Null
    college: undefined,   // Undefined
    secretKey: Symbol(),   // Symbol
    courseSubjects: ["Math", "Science", "History"], // Array
    greet: function() {  // Function (Method)
        console.log(Hello, my name is ${this.name} and I am ${this.age} years old.);
    }
};
