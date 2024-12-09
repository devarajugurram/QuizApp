document.addEventListener('DOMContentLoaded',function() {
    const items =
    { 
    "java" : [
    {
        "question": "What is the main purpose of a constructor in Java?",
        "1": "To allocate memory for an object",
        "2": "To initialize an object",
        "3": "To define an object's methods",
        "4": "To delete an object",
        "answer": "2"
    },
    {
        "question": "Which of these is not a Java keyword?",
        "1": "class",
        "2": "int",
        "3": "static",
        "4": "value",
        "answer": "4"
    },
    {
        "question": "Which company developed the Java programming language?",
        "1": "Microsoft",
        "2": "Apple",
        "3": "Oracle",
        "4": "Sun Microsystems",
        "answer": "4"
    },
    {
        "question": "Which of the following is a loop structure in Java?",
        "1": "if-else",
        "2": "for",
        "3": "switch",
        "4": "class",
        "answer": "2"
    },
    {
        "question": "Which of the following is the correct syntax to create an ArrayList in Java?",
        "1": "ArrayList list = new ArrayList<>();",
        "2": "ArrayList<> list = new ArrayList();",
        "3": "ArrayList list = new ArrayList[];",
        "4": "ArrayList list = new ArrayList<>[];",
        "answer": "1"
    },
    {
        "question": "What is the output of the expression 10 + 20 + \"30\" in Java?",
        "1": "3030",
        "2": "50",
        "3": "102030",
        "4": "3050",
        "answer": "4"
    },
    {
        "question": "What is the default value of a boolean variable in Java?",
        "1": "1",
        "2": "true",
        "3": "false",
        "4": "null",
        "answer": "3"
    },
    {
        "question": "In which package is the Scanner class found?",
        "1": "java.io",
        "2": "java.util",
        "3": "java.lang",
        "4": "java.text",
        "answer": "2"
    },
    {
        "question": "Which of these data types is used to store text in Java?",
        "1": "int",
        "2": "float",
        "3": "String",
        "4": "char",
        "answer": "3"
    },
    {
        "question": "What is the correct way to handle exceptions in Java?",
        "1": "if-else",
        "2": "try-catch",
        "3": "switch-case",
        "4": "for loop",
        "answer": "2"
    }
],
"python" : [
    {
        "question": "What is the output of print(2 ** 3)?",
        "1": "6",
        "2": "8",
        "3": "9",
        "4": "16",
        "answer": "2"
    },
    {
        "question": "Which of the following is used to define a function in Python?",
        "1": "def",
        "2": "function",
        "3": "define",
        "4": "func",
        "answer": "1"
    },
    {
        "question": "What data type is the object below? \n x = [1, 2, 3]",
        "1": "List",
        "2": "Tuple",
        "3": "Dictionary",
        "4": "Set",
        "answer": "1"
    },
    {
        "question": "What will be the output of print(type({})) in Python?",
        "1": "<class 'list'>",
        "2": "<class 'set'>",
        "3": "<class 'dict'>",
        "4": "<class 'tuple'>",
        "answer": "3"
    },
    {
        "question": "Which of these is the correct syntax for a conditional statement in Python?",
        "1": "if x = 5:",
        "2": "if x == 5 then:",
        "3": "if (x == 5):",
        "4": "if x === 5:",
        "answer": "3"
    },
    {
        "question": "What is the purpose of the 'pass' statement in Python?",
        "1": "To exit a loop",
        "2": "To define an empty block of code",
        "3": "To raise an exception",
        "4": "To terminate a program",
        "answer": "2"
    },
    {
        "question": "Which of the following will create a dictionary in Python?",
        "1": "{1, 2, 3}",
        "2": "{'name': 'John', 'age': 25}",
        "3": "[1, 2, 3]",
        "4": "('name', 'John')",
        "answer": "2"
    },
    {
        "question": "How do you start a comment in Python?",
        "1": "//",
        "2": "<!--",
        "3": "#",
        "4": "/*",
        "answer": "3"
    },
    {
        "question": "What is the output of print(3 * '5')?",
        "1": "15",
        "2": "555",
        "3": "5",
        "4": "Error",
        "answer": "2"
    },
    {
        "question": "Which of these is not a valid keyword in Python?",
        "1": "lambda",
        "2": "eval",
        "3": "assert",
        "4": "then",
        "answer": "4"
    }
],
"cpp" : [
    {
        "question": "Which of the following is used to declare a constant in C++?",
        "1": "constant",
        "2": "const",
        "3": "define",
        "4": "fixed",
        "answer": "2"
    },
    {
        "question": "What is the output of the following code? \n\nint x = 10; \ncout << ++x;",
        "1": "9",
        "2": "10",
        "3": "11",
        "4": "Error",
        "answer": "3"
    },
    {
        "question": "Which operator is used to access the value at the address stored in a pointer?",
        "1": "&",
        "2": "*",
        "3": "->",
        "4": "::",
        "answer": "2"
    },
    {
        "question": "Which of the following is not a C++ keyword?",
        "1": "public",
        "2": "friend",
        "3": "array",
        "4": "virtual",
        "answer": "3"
    },
    {
        "question": "Which C++ feature is used to allocate memory dynamically?",
        "1": "new",
        "2": "malloc",
        "3": "calloc",
        "4": "free",
        "answer": "1"
    },
    {
        "question": "Which of the following correctly declares an array of 10 integers?",
        "1": "int arr[10];",
        "2": "int arr;",
        "3": "int arr[10]();",
        "4": "array<int> arr;",
        "answer": "1"
    },
    {
        "question": "What is the purpose of a destructor in C++?",
        "1": "To initialize an object",
        "2": "To free resources when an object goes out of scope",
        "3": "To allocate memory",
        "4": "To define an object",
        "answer": "2"
    },
    {
        "question": "Which access modifier makes members accessible only within the same class?",
        "1": "public",
        "2": "private",
        "3": "protected",
        "4": "static",
        "answer": "2"
    },
    {
        "question": "How is polymorphism achieved in C++?",
        "1": "Function Overloading",
        "2": "Operator Overloading",
        "3": "Inheritance",
        "4": "All of the above",
        "answer": "4"
    },
    {
        "question": "What is the output of the following code? \n\nint x = 5, y = 10; \ncout << (x < y ? x : y);",
        "1": "5",
        "2": "10",
        "3": "0",
        "4": "Error",
        "answer": "1"
    }
],
"c" : [
    {
        "question": "What is the correct syntax to declare a variable in C?",
        "1": "int x;",
        "2": "integer x;",
        "3": "var x;",
        "4": "define x;",
        "answer": "1"
    },
    {
        "question": "Which of the following operators is used to access the address of a variable?",
        "1": "*",
        "2": "&",
        "3": "%",
        "4": "#",
        "answer": "2"
    },
    {
        "question": "What is the output of the following code? \n\nint x = 5; \nprintf(\"%d\", x++);",
        "1": "4",
        "2": "5",
        "3": "6",
        "4": "Error",
        "answer": "2"
    },
    {
        "question": "Which of the following functions is used to allocate memory dynamically?",
        "1": "malloc",
        "2": "memalloc",
        "3": "alloc",
        "4": "mem",
        "answer": "1"
    },
    {
        "question": "What is the size of an integer variable in C (typically, on most systems)?",
        "1": "2 bytes",
        "2": "4 bytes",
        "3": "8 bytes",
        "4": "16 bytes",
        "answer": "2"
    },
    {
        "question": "Which header file is required for using the printf() function in C?",
        "1": "<conio.h>",
        "2": "<stdlib.h>",
        "3": "<stdio.h>",
        "4": "<math.h>",
        "answer": "3"
    },
    {
        "question": "Which keyword is used to prevent any changes to a variable in C?",
        "1": "static",
        "2": "volatile",
        "3": "const",
        "4": "immutable",
        "answer": "3"
    },
    {
        "question": "What will be the output of the following code? \n\nint x = 10, y = 20; \nint z = x > y ? x : y; \nprintf(\"%d\", z);",
        "1": "10",
        "2": "20",
        "3": "30",
        "4": "0",
        "answer": "2"
    },
    {
        "question": "Which of the following data types is not standard in C?",
        "1": "int",
        "2": "float",
        "3": "double",
        "4": "string",
        "answer": "4"
    },
    {
        "question": "Which loop is guaranteed to execute at least once?",
        "1": "for",
        "2": "while",
        "3": "do-while",
        "4": "none of the above",
        "answer": "3"
    }
]
}
sessionStorage.setItem("dataStore",JSON.stringify(items));
});