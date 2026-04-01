function generateSquareMaze(dimension, extraPassageRatio) {

    function iterate(field, x, y) {
        field[x][y] = false;
        while (true) {
            var directions = [];
            if (x > 1 && field[x - 2][y] === true) {
                directions.push([-1, 0]);
            }
            if (x < field.dimension - 2 && field[x + 2][y] === true) {
                directions.push([1, 0]);
            }
            if (y > 1 && field[x][y - 2] === true) {
                directions.push([0, -1]);
            }
            if (y < field.dimension - 2 && field[x][y + 2] === true) {
                directions.push([0, 1]);
            }
            if (directions.length === 0) {
                return field;
            }
            var dir = directions[Math.floor(Math.random() * directions.length)];
            field[x + dir[0]][y + dir[1]] = false;
            field = iterate(field, x + dir[0] * 2, y + dir[1] * 2);
        }
    }

    // Initialize the field.
    var field = new Array(dimension);
    field.dimension = dimension;
    for (var i = 0; i < dimension; i++) {
        field[i] = new Array(dimension);
        for (var j = 0; j < dimension; j++) {
            field[i][j] = true;
        }
    }

    // Generate the maze recursively.
    field = iterate(field, 1, 1);

    // Add extra passages to create loops and multiple paths
    extraPassageRatio = extraPassageRatio || 0;
    if (extraPassageRatio > 0) {
        var candidates = [];
        for (var i = 1; i < dimension - 1; i++) {
            for (var j = 1; j < dimension - 1; j++) {
                if (field[i][j] !== true) { continue; }
                // Horizontal wall between two open cells
                if (i % 2 === 0 && j % 2 === 1) {
                    if (!field[i - 1][j] && !field[i + 1][j]) {
                        candidates.push([i, j]);
                    }
                }
                // Vertical wall between two open cells
                if (i % 2 === 1 && j % 2 === 0) {
                    if (!field[i][j - 1] && !field[i][j + 1]) {
                        candidates.push([i, j]);
                    }
                }
            }
        }

        // Fisher-Yates shuffle
        for (var k = candidates.length - 1; k > 0; k--) {
            var r = Math.floor(Math.random() * (k + 1));
            var tmp = candidates[k];
            candidates[k] = candidates[r];
            candidates[r] = tmp;
        }

        var toRemove = Math.floor(candidates.length * extraPassageRatio);
        for (var k = 0; k < toRemove; k++) {
            field[candidates[k][0]][candidates[k][1]] = false;
        }
    }

    return field;
}
