import sys
import math
import random

# Auto-generated code below aims at helping you parse
# the standard input according to the problem statement.

first_init_input = int(input())
second_init_input = int(input())
third_init_input = int(input())

def debug(s):
    print(s, file=sys.stderr)

debug("%d %d %d" % (first_init_input, second_init_input, third_init_input))

last_choice = "B"
reverse = {
    "E": "A",
    "A": "E",
    "C": "D",
    "D": "C",
    "B": "B"
}

# game loop
while True:
    first_input = input()
    second_input = input()
    third_input = input()
    fourth_input = input()
    debug("%s %s %s %s" % (first_input, second_input, third_input, fourth_input))
    for i in range(third_init_input):
        fifth_input, sixth_input = [int(j) for j in input().split()]
        debug("%d %d" % (fifth_input, sixth_input))

    # Write an action using print
    p = []
    if first_input == "_" and reverse[last_choice] != "C":
        p.append("C")
    if second_input == "_" and reverse[last_choice] != "A":
        p.append("A")
    if third_input == "_" and reverse[last_choice] != "D":
        p.append("D")
    if fourth_input == "_" and reverse[last_choice] != "E":
        p.append("E")

    if len(p) == 0:
        if first_input == "_":
            p.append("C")
        if second_input == "_":
            p.append("A")
        if third_input == "_":
            p.append("D")
        if fourth_input == "_":
            p.append("E")

    last_choice = p[random.randrange(len(p))]

    print(last_choice)
    # print("A")
