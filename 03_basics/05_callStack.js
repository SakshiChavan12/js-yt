
//JavaScript Execution Context

/*Global Execution Context -> allocated in 'this': 'this' value for brower is :Window object

Execution Context : 
1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context

Phases:
1. Memory creation phase(creation phase) : 
+ a variables are kept only with undefined value
+ functions are kept as defination

2. Execution phase :
+ variable -> value
+ functions -> new box that contains -> new variable environment + Execution thread -> after creation this box will delete automatically
+ return -> value return to the Global Execution Context*/

// Note : - Call Stack is of LIFO type