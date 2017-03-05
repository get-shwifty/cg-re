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
offsetX = {
    "E": -1,
    "A": 1,
    "C": 0,
    "D": 0,
    "B": 0
}
offsetY = {
    "E": 0,
    "A": 0,
    "C": -1,
    "D": 1,
    "B": 0
}

def ennemiAdjacent(pos, ennemis):
    for e in ennemis:
        if abs(e[0] - pos[0]) + abs(e[1] - pos[1]) <= 1:
            return True
    return False

# game loop
while True:
    first_input = input()
    second_input = input()
    third_input = input()
    fourth_input = input()
    debug("%s %s %s %s" % (first_input, second_input, third_input, fourth_input))
    ennemis = []
    for i in range(third_init_input - 1):
        ennemis.append([int(j) for j in input().split()])
        debug("%d %d" % (ennemis[-1][0], ennemis[-1][1]))
    player = [int(j) for j in input().split()]
    debug("%d %d" % (player[0], player[1]))

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

    for c in p:
        if ennemiAdjacent((player[0] + offsetX[c], player[1] + offsetY[c]), ennemis):
            p.remove(c)

    if len(p) == 0:
        p.append("B")

    last_choice = p[random.randrange(len(p))]

    print(last_choice)
    # print("A")
