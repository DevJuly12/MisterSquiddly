//maps.js

var maps = {
    "map1":     [[1, 1, 1, 1, 1, 1, 1, 1, 7, 6, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, -1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 6, 0, 0, 0, 0, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 0, -1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 4, 3, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    "map2":     [[1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 7, 7, 6, 0, 0, 0, 5, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 7, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 7, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 1, 1, 1, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 1, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 7],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 4, 4],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, -1, 2, 4, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    "map3":     [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 1, 1, 1, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 5, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 5, 6, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 8, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 4, 4, 4, 3, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 7, 7, 6, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 8, 8, 0, 0, 0, -1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 6, 0, 0, 0, 0, 0, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 8, 5, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 3, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]],
    
    "map4":     [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 7, 7, 7, 1, 1, 7, 7, 6, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 6, 0, 0, 0, 5, 6, 8, 8, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, -1, 2, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 4, 3, 8, 8, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 4, 3, 0, 0, 0, 0, 5, 1, 1, 1, 1, 1, 1, 7, 7, 7, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 8, 5, 1, 1, 1, 1, 1, 8, 8, 8, 5, 7],
                [1, 1, 1, 1, 1, 1, 1, 1, 0, -1, 0, 0, 0, 8, 5, 1, 1, 1, 6, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 0, 0, 0, 0, 0, 5, 7, 6, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 4],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, -1, 0, 0, 0, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 3, 8, 8, 8, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    "mapxx2":   [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 6, 0, 0, 0, 1, 1, 1, 1, 1, 1, 7, 7, 1],
                [1, 7, 7, 7, 7, 7, 6, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 1, 1, 7, 7, 7, 6, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 4, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 7, 7, 7, 6, 0, 0, 0, 0, 0, 0, 1],
                [1, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 1],
                [1, 7, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 7],
                [1, 0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 4, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 7, 7, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 5, 7, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 4],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 4, 4, 1, 1, 1, 1],
                [1, 3, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 4, 4, 4, 4, 4, 4, 3, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
    
    "map5":     [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 6, 8, 8, 8, 1, 1, 1, 1, 1, 1, 1],
                [1, 7, 7, 7, 7, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 1, 1, 1, 1],
                [1, 8, 8, 0, 0, 5, 7, 7, 6, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 8, 0, -1, -1, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 3, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 8, 5, 1, 1, 1, 1, 1, 1, 7, 7],
                [1, 1, 1, 1, 4, 3, 8, 8, 8, 0, -1, 0, 0, 0, 0, 8, 5, 7, 7, 7, 7, 6, 0, 0],
                [1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 3, 0, 0, 0, 0, 0, 0, 0, 8, 8, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 3, 0, 0, 0, 0, -1, 0, 2, 4],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    "map6":     [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1,],
                [1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 6, 0, 0, 8, 8, 8, 5, 7, 7, 7, 1, 1, 1, 1,],
                [1, 7, 7, 7, 7, 7, 7, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 5, 7, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 2, 4, 4, 3, 0, 0, 0, 0, 0, -1, 0, 1, 1],
                [1, 0, 0, 0, 0, 8, 2, 4, 4, 4, 4, 1, 1, 1, 1, 8, 0, 0, 0, 0, 2, 4, 1, 1],
                [1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 6, 8, 0, 0, 0, 0, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 6, 0, 0, 0, 0, 0, 8, 2, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 7, 7, 7, 6, 8, 8, 8, 0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 6, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 2, 1, 1, 1, 1, 1],
                [1, 1, 1, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, -1, 2, 4, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 8, 0, 0, 0, 0, 0, 0, -1, 0, 2, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 3, -1, 0, 0, 0, 0, 8, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 8, 8, 0, 0, 0, 0, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 4, 3, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
    
    "map7":     [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 6, 8, 8, 8, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 5, 7, 7],
                [1, 1, 1, 1, 1, 6, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 0],
                [1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 7, 7, 6, 8, 0, 0, 0, 2, 4, 3, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 6, 8, 0, 0, 0, 0, 0, -1, 1, 1, 1, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 7, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
                [1, 0, 0, 0, 0, 0, 0, 0, 5, 7, 7, 6, 8, 8, 0, 0, 0, 0, 0, 0, 0, -1, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 2, 4, 4, 1],
                [1, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 1, 1, 1, 1],
                [1, 1, 1, 3, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 8, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 2, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 4, 4, 3, 8, 8, 0, 0, 0, 0, -1, 0, 2, 4, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
    
    "map8":     [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
                [1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
                [1, 0, 0, 0, 0, 0, 8, 8, 8, 8, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
                [1, 4, 4, 4, 3, 8, 8, 0, 0, 0, 0, 0, 0, 8, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
                [1, 1, 1, 1, 1, 4, 3, 0, 0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, -1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], 
                [1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 5, 1, 1, 1, 1, 1, 1, 1, 1], 
                [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, -1, 0, 0, 0, 0, 5, 7, 7, 7, 7, 1, 1, 1], 
                [1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 3, 8, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1], 
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], 
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, -1, 0, 8, 8, 0, 0, 0, 0, 0, 0, 1], 
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 3, 0, 0, 0, 0, 0, -1, 1], 
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 2, 4, 1], 
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1]],
    
    "map9":     [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 6, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 6, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 7, 6, 8, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 6, 0, 0, 0, 0, 0, 2, 3, 8, 8, 8, 8, 2, 4, 1, 1, 1, 7, 7],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 6, 0, 0],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 5, 7, 7, 7, 1, 1, 1, 1, 1, 6, 0, 0, 0],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 6, 8, 0, 0, 0],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0,-1, -1, -1, 1, 1, 1, 6, 8, 0, 0, 0, 0],
                [1, 1, 1, 1, 1, 4, 3, 0, 0, 0, 0, 0, 2, 4, 4, 1, 1, 6, 0, 0, 0, 0, 0, 2],
                [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 5, 7, 7, 7, 6, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 2, 1],
                [1, 1, 1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 2, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 3, 8, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 2, 4, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 3, 8, 8, 8, 8, 2, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    "map10":    [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 8, 8, 8, 5, 1, 1],
                [1, 1, 1, 1, 1, 6, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0, 1, 1],
                [1, 1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 4, 1, 1],
                [1, 1, 1, 1, 6, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1],
                [1, 7, 7, 6, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 7, 1, 1, 1, 1],
                [1, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 5, 7, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 4, 4, 4, 3, 8, 8, 8, 8, 8, 8, 2, 4, 3, 8, 8, 8, 0, -1, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 1, 1, 1, 4, 4, 4, 4, 3, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 6, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 1, 1, 6, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 1, 6, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 1, 8, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1],
                [1, 1, 1, 1, 6, 0, 0, 0, 8, 2, 4, 4, 3, 8, 8, 8, 8, 8, 8, 8, 2, 1, 1, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 2, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    "map11":    [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1],
                [1, 1, 1, 6, 0, 0, 0, 0, 0, 1, 1, 1, 1, 6, 0, 0, 0, 8, 8, 1, 1, 1, 1, 1],
                [1, 1, 1, 8, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7],
                [1, 1, 1, 8, 0, 0, 2, 4, 4, 1, 1, 1, 1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 1, 8, 0, 0, 8, 1, 1, 1, 1, 1, 1, 4, 4, 3, 8, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 6, 8, 0, 0, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0],
                [1, 1, 8, 0, 0, 0, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 2, 4, 4],
                [1, 1, 8, 0, 0, 0, 8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 6, 0, 0, 0, -1, 1, 1, 1],
                [1, 1, 8, 0, 0, 8, 2, 1, 1, 1, 1, 1, 1, 1, 7, 6, 8, 0, 0, 0, 2, 1, 1, 1],
                [1, 6, 8, 0, 0, 8, 1, 1, 7, 7, 7, 7, 7, 6, 8, 8, 8, 0, 0, 0, 8, 1, 1, 1],
                [1, 8, 0, 0, 0, 8, 5, 6, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1],
                [1, 8, 0, 0, 0, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1],
                [1, 8, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 1],
                [1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 2, 1, 1, 1, 1],
                [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 1, 1, 1, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, -1, 0, 0, 0, 0, 0, 0, -1, -1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 4, 4, 3, 8, 8, 8, 2, 4, 4, 3, 8, 8, 8, 2, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    "map12":    [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 7, 7, 7, 7, 1, 1, 1, 1],
                [1, 1, 1, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 6, 0, 0, 0, 0, 8, 5, 1, 1, 1],
                [1, 7, 6, 0, 0, 0, 0, 0, 0, 5, 7, 1, 1, 1, 0, 0, 0, 0, 0, 0, 8, 5, 1, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1, 1, 1, 0, 0, -1, -1, 0, 0, 0, 8, 5, 7],
                [1, 0, 0, 0, 0, 2, 3, 0, 0, 0, 8, 1, 1, 1, 0, 0, 2, 4, 3, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 2, 1, 1, 0, 0, 0, 8, 1, 1, 1, 0, 0, 5, 7, 1, 3, 0, 0, 0, 0],
                [1, 4, 4, 4, 1, 1, 1, 0, 0, 0, 2, 1, 1, 6, 0, 0, 8, 8, 1, 1, 0, 0, 0, 0],
                [1, 1, 1, 1, 7, 7, 6, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 3, 0, 0, 0],
                [1, 1, 1, 1, 8, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 5, 1, 1, 4, 4, 4],
                [1, 1, 1, 6, 0, 0, 0, -1, 2, 4, 1, 1, 1, 4, 3, 0, 0, 0, 0, 5, 1, 1, 1, 1],
                [1, 1, 6, 8, 0, 0, 2, 4, 1, 7, 7, 7, 7, 1, 1, 3, -1, 0, 0, 0, 1, 1, 1, 1],
                [1, 1, 8, 0, 0, 0, 5, 7, 6, 8, 8, 8, 0, 5, 1, 1, 3, 0, 0, 0, 5, 1, 1, 1],
                [1, 1, 8, 0, 0, 8, 8, 0, 0, 0, 0, 0, 0, 0, 5, 7, 6, 0, 0, 0, 8, 5, 1, 1],
                [1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 8, 8, 0, 0, 0, 8, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 0, 0, 0, 0, 0, 0, 0, -1, 0, 1, 1],
                [1, 1, 1, 3, -1, 0, 0, 8, 8, 2, 4, 3, 8, 8, 8, 8, 0, 0, 0, -1, 2, 4, 1, 1],
                [1, 1, 1, 1, 4, 3, 8, 8, 2, 1, 1, 1, 4, 3, 8, 8, 8, 0, 0, 2, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1]],
    
    "map13":    [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 7, 7, 7, 1, 1, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 7, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, -1, -1, -1, 0, 0, 0, 0, 0, 0, -1, -1, -1, 0, 0, 1, 1],
                [1, 1, 4, 3, 0, 0, 0, 0, 2, 4, 3, 0, 2, 0, 0, 3, 0, 2, 4, 3, 0, 0, 1, 1],
                [1, 1, 1, 1, 3, 0, 0, 0, 0, 1, 0, 0, 1, -1, -1, 1, 0, 1, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 4, 4, 1, 0, 1, 4, 3, 0, 0, 1, 1],
                [1, 1, 1, 1, 6, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 5, 0, 0, 5, 0, 0, 6, 0, 7, 7, 6, 0, 0, 1, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 2, 4, 3, 0, 2, 0, 0, 3, 0, 2, 3, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 3, 0, 0, 1, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 1, 4, 3, 0, 1, 3, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
                [1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 2, 1, 0, 1, 0, 6, 0, 0, 1, 1],
                [1, 1, 1, 1, 4, 3, 0, 0, 1, 4, 3, 0, 1, 0, 0, 1, 0, 1, 4, 0, 0, 0, 1, 1],
                [1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 4, 1, 4, 4, 1, 4, 1, 1, 4, 4, 4, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    "mapxx":    [[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,1,3,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,4,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,1,3,3,3,3,2,0,0,0,1,3,0,0,0,0,0,0,0,0,0,0,0,0]]
    ,

};


var FISH = 1;
var SPIKE = 2;
var enemies = {
    "map1":     [],
    "map2":     [],
    "map3":     [],
    "map4":     [],
    "map5":     [],
    "map6":     [],
    "map7":     [[FISH, 400, 440, 0, 1]],
    "map8":     [[FISH, 270, 270, 0, 1], [FISH, 560, 450, 2, 1]],
    "map9":     [[FISH, 240, 280, 0, 1], [FISH, 240, 340, 1, 1]],
    "map10":    [[FISH, 270, 175, 0, 1], [FISH, 400, 300, 1, 1], [FISH, 480, 140, 2, 1]],
    "map11":    [[FISH, 210, 495, 0, 1], [FISH, 300, 530, 1, 1], [FISH, 360, 400, 2, 1], [FISH, 520, 460, 3, 1]],
    "map12":    [[FISH, 480, 290, 0, 1]],
    "map13":    []
};

var WIFE = 3;
var KID = 4;
var npcs = {
    "map13":    [[WIFE, 400, 120, 1], [KID, 450, 130, 2], [KID, 475, 130, 2]]
};


var playerstart = {
    "map1start":    [320,400],
    "map2start":    [80,205],
    "map3start":    [80,140],
    "map4start":    [490,120],
    "map5start":    [60,280],
    "map6start":    [80,190],
    "map7start":    [60,350],
    "map8start":    [80,190],
    "map9start":    [650,100],
    "map10start":   [60,320],
    "map11start":   [250,105],
    "map12start":   [80,190],
    "map13start":   [80,160]
};


var texttrigger = {
    "map1": [320.1, 400.1, 100,
            "  Use ↑ to swim. Use ← and → to turn. \n \n It's been a rough workday at Squid Inc. \n Swim home to your family and grab them some star food \n along the way."],
    
    "map2": [80.1, 205.1, 100,
            "  Swimming uses energy and gets slower as energy runs out. \n Collect stars to fill your energy!"],
    
    "map3": [80.1, 205.1, 100,
            "  Watch out for spikes!"],
    
    "map7": [20.1, 350.1, 100,
        "  That fish is not a friend."],
    
    "map10": [40.1, 320.1, 100,
        "  Keep going! You're almost home!"],
    
    "map13": [60.1, 60.1, 200,
        "  Welcome home, sugah muffin - \n but you didn't bring enough food. \n \n We might not survive the winter :("],

};


var mapnum = 1;
var cmap = maps["map" + mapnum];

var maptilesize = 32;