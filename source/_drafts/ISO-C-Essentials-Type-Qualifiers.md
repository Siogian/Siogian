---
title: 'ISO C Essentials: Type Qualifiers'
tags:
categories:
---

6.7.3 Type qualifiers
=====================

**Syntax**

1. *type-qualifier:*

        const
        restrict
        volatile
        _Atomic
    
**Constraints**

2. Types other than pointer types whose referenced type is an object shall not be restrict-qulifiered.
9. An object that is accessed through a restricted-qualified pointer has a special association with that pointer. This association, defined in 6.7.3.1 below, requires that all accesses to that object use, directly or indirectly, the value of that particular pointer.[^1] The intended use of `restrict` qualifier(like the `register` storage class) is to promote optimization, and deleting all instances of the qualifier from all preprocessing translation units composing a conforming program does not change its meaning(i.g., observable behavior).

[^1]: For example, a statement that assigns a value returned by `malloc` to a single pointer establishes this association between the allocated object and pointer.

6.7.3.1 Formal definition of `restrict`
---------------------------------------

1. Let **D** be a declaration of an ordinary identifier that provides a means of designating an object **P** as a restrict-qualified pointer to type **T**.
2. If **D** appears inside a block and does not have storage class `extern`, let **B** denote the block. If **D** appears in the list of parameter declarations of a function definition, let **B** denote the associated block. Otherwise, let **B** denote the block of `main`(or the block of whatever function is called at program startup in a freestanding environment).
3. In what follows, a pointer expression **E** is said to be *based* on object **P** if(at some sequence point in the execution of **B** prior to the evalution of **E**) modifying **P** to point to a copy of the array object into which it formerly pointed would change the value of **E**.[^2] Note that "based" is defined only for expressions with pointer types.
4. During each execution of **B**, let **L** be any lvalue that has **&L** based on **P**. If **L** is used to access the value of the object **X** that designates, and **X** is also modified(by any means), then the following requirements apply: **T** shall not be const-qualified. Every other lvalue used to access the value of **X** shall also have its address based on **P**. Every access that modifies **X** shall be considered also to modify **P**, for the purposes of this subclause. If **P** is assigned the value of a pointer expression **E** that is based on another restricted pointer object **P2**, associated with block **B2**, then either the execution of **B2** shall begin before execution of **B**, or the execution of **B2** shall end prior to assignment. If these requirements are not met, then the behavior is undefined.
5. Here an execution of **B** means that portion of the execution of the program that would correspond to the lifetime of an object with scalar type and automatic stotage duration associated with **B**.
6. A translator is free to ignore any or all aliasing implications of uses of `restrict`.
7. **EXAMPLE 1** The file scope declarations
    ```c
    int * restrict a;
    int * restrict b;
    extern int c[];
    ```
    assert that if an object is associated using one of **a**, **b**, or **c**, and that object is modified anywhere in the program, then it is never accessed using either of the other two.
8. **EXAMPLE 2** The function parameter declarations in the following example
    ```c
    void f(int n, int * restrict p, int * restrict q)
    {
        while (n-- > 0)
            *p++ = *q++;
    }
    ```
    assert that, during each execution of the function, if an object is accessed through one of the pointer parameters, then it is not also accessed through the other.

[^2]: In the words, **E** depends on the value of **P** itself rather than on the value of an object referenced indirectly through **P**. For example, if identifier **p** has type `(int **restrict)`, then the pointer expressions **p** and **p+1** are based on the resticted pointer object designated by **p**, but the pointer expressions ***p** and **p[1]** are not.
