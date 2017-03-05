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
    if first_input == "_":
        p.append("C")
    if second_input == "_":
        p.append("A")
    if third_input == "_":
        p.append("D")
    if fourth_input == "_":
        p.append("E")
    print(p[random.randrange(len(p))])
    # print("A")
