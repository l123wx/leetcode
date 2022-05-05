/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let num = 0
    for (var y = 0; y < grid.length; y++) {
        for (var x = 0; x < grid[y].length; x++) {
            if (grid[y][x] !== '0') {
                num++
                removeLand(x, y)
            }
        }
    }
    function removeLand(x, y) {
        grid[y][x] = '0'
        if (grid[y + 1] && grid[y + 1][x] && grid[y + 1][x] !== '0') {
            removeLand(x, y + 1)
        }
        if (grid[y - 1] && grid[y - 1][x] && grid[y - 1][x] !== '0') {
            removeLand(x, y - 1)
        }
        if (grid[y] && grid[y][x + 1] && grid[y][x + 1] !== '0') {
            removeLand(x + 1, y)
        }
        if (grid[y] && grid[y][x - 1] && grid[y][x - 1] !== '0') {
            removeLand(x - 1, y)
        }
    }
    return num
}

// @lc code=end

