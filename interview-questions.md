# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer:The first thing I think of when I hear object-oriented programming is Ruby. Unlike a functional programming language like Javascript where the language is based around logic and functions, object-oreinted programming is mostly concerned with objects and less on logic. Object-oriented programming fouses on instances of classes. Object-oriented programming is also similar to fucnctional programming in the aspect of using methods synonymous with how JavaScript would use functions. Methods and blocks hold logic inside objects in object-oriented programming, whereas functional programming holds all of its logic in functions. Functional programming can also carry objects, in a framework like React, where one would use components to bring objects from child components to the parent component to display how objects, logic, and functionality work in harmony. Syntactically, object-oriented programs look bare in comparison to all the syntax required to run a successful function in a functional focused program. 

Researched answer: Object-oriented programming is one approach to dealing with large and complex software systems. Object-oritented programming is intended to reduce complex software systems into simpler and dynamic classes and objects. Object-oriented programming has four pillars to write clean code: abstraction, encapsulation, inheritance, and polymorphism. Object-oriented programming is reusable, and protects information via encapsulation. Functional programs fixate on logic. The main focus of functional programming is solving a problem. Functions are the star of functional programming as they can serve as arguments to other functions, attach to names, or even just complete a task. A MASSIVE difference between object-oriented and function focused programming that I should have pointed out in my answer above, is the difference between error messages. Personally, I think error messages in object-oriented programs, like Ruby, are much more user-friendly and more explicit regarding the error, how to fix it, and where to find it. However, in a functional focused program, like JavaScript, error messages can be a bit ambiguous. 

2. What is the difference between a Float and an Integer in Ruby?

Your answer: The difference between a Float and an Integer in Ruby is that a Float is a number displayed as a decimal, whereas an integer is displayed as a whole number without a decimal. 

Researched answer: A Float in Ruby is called a floating point number becuase it has a decimal point. Floats are commonly used when a developer needs to allow for more precision in their output. A Float is not a whole number. An Integer, however, is a whole number. An Integer cannot have a fraction or a decimal point attached to the whole number. You cannot pass a Float in a Ruby equation and receive an Integer.Ruby cam output NaN and Infinity for Floats. For example if you passed, 5.0 (a Float) divided by 0 (an Integer) Ruby would return infinity.

3. Ruby has an implicit return. What does that mean?

Your answer: In JavaScript, the word 'return' is required to be the first word on a line that a developer wants to be logged when a function is called. However, in Ruby, the word 'return' is not required in all cases. Therefore, if no 'return' is indicated, the method will log whatever the reuslt of the previous line was. For example, def roll_call
                                                                "Tabi is present"
                                                                end
                                                                p roll_call 
                                                                #Output: "Tabi is present" 

Researched answer: Ruby does not require a 'return' like JavaScript does in every circumstance. Therefore, when 'return' is not written, Ruby returns an implicit return which means the value of the last line will be returned. 

4. What is a block in Ruby?

Your answer: A block in Ruby is the portion that holds the logic in a method. A block in Ruby is defined by 'do' at the beginning of the logic and 'end' to indicate the logic has concluded. A block is traditionally followed by pipes || that pass the parameter(s) of the method, and can allow for dynamic code to be ran properly.

Researched answer: Ruby blocks are defined by 'do' and 'end' and are anonymous functions passed to a Ruby method. While pipes can be necessary to hold certain perameters in a method, not all blocks require them. Certain Ruby methods require blocks to perform certain logic. For example, the built in 'times' method requires a block to determine the outcome (my_sister = 1
                                                                                    my_sister.times do
                                                                                       p 'Niki' 
                                                                                        end). 
However, the built-in method .each uses a block that takes in a parameter of values, so pipes will be necessary in this instance.

1. How do you extract a value in a Ruby hash?

Your answer: You extract a value in a Ruby hash by using square brackets. You call the hash, then use square brackets and inside the square brackets call the key that belongs to the value. 

Researched answer:Accessing a value in a Ruby hash is considered the Read portion of CRUD. You can access a value in a Ruby hash by printing the hash's name and its respective key. 

## Looking Ahead: Terms for Next Week

1. Class Inheritance: Class inheritance in Ruby occurs when one class inherits behavior from another class. Inheritance is defined by '<'. When multiple class have a requirement for similar attributes, a superclass is created, where the common behaviors and attributes are combined into a shareable or inheritatble class. 

2. RSpec: RSpec, short for request specification, tests behavior of objects in Ruby. RSpec is used to explain the desired output of a method. RSpec has a similar approach to Jest, especially with their test syntax.

3. CRUD: CRUD stands for Create, Read, Update, and Delete. CRUD is a list for developers to ensure they have completed all tasks required for data manipulation. 

4. Test-driven development: Test-driven Development is the process of testing, seeing the test fail becuase a variable is not defined, then writing the code to make the test pass. This is a vital step in software development to ensure the code works, the code communicates the inputs and outputs to any developer picking up where another developer left off, and the code is clear and concise. 

5. HTTP: HTTP is short for Hyper-Text Transfer Protocol, runs on port 80, and is not secure; HTTPS is allegedly more secure, hence the addition of 'S'. HTTP, as indicated in its name, transfers information from client to server. It is the primary mode of transportation on the internet. 
