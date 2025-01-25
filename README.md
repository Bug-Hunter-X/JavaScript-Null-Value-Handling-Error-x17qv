# JavaScript Null Value Handling Error

This repository demonstrates a common error in JavaScript when dealing with null values and provides a solution.

## Bug

The `foo` function attempts to add two numbers. However, it doesn't handle cases where one or both of the inputs are null. This leads to unexpected behavior.

## Solution

The solution involves explicitly checking for null values using strict equality (`===`) before performing the addition. If either `a` or `b` is null, the function returns 0. Otherwise, it proceeds with the original addition.