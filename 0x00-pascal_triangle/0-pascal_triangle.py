#!/usr/bin/python3
"""
This module returns a list of lists of integers
representing the pascals triangle of an integer n
"""


def pascal_triangle(n):
    """a function that returns the pascal triangle of n"""
    # returns empty list if n is 0 or negative
    if n <= 0:
        return []

    # forms the pascals triangle
    result = []

    # iterates the rows of the triangle
    for a in range(n):
        row = []

        for b in range(a + 1):
            # places 1 as the first and last element of the triangle
            if b == 0 or b == a:
                row.append(1)

            # adds the two up digits of the triangle
            elif a > 0 and b > 0:
                row.append(result[a - 1][b - 1] + result[a - 1][b])

        # fully constructs the triangle
        result.append(row)

    return result
