
var height, width, previousColor;

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {

    if (image[sr][sc] === newColor) {
        return image;
    }

    height = image.length;
    width = image[0].length;
    previousColor = image[sr][sc];
    floodFillWithDepthFirstSearch(image, sr, sc, newColor);

    return image;
};

function floodFillWithDepthFirstSearch(image, r, c, newColor) {
    image[r][c] = newColor;

    if (r - 1 >= 0 && image[r - 1][c] === previousColor) {
        floodFillWithDepthFirstSearch(image, r - 1, c, newColor);
    }

    if (r + 1 < height && image[r + 1][c] === previousColor) {
        floodFillWithDepthFirstSearch(image, r + 1, c, newColor);
    }

    if (c - 1 >= 0 && image[r][c - 1] === previousColor) {
        floodFillWithDepthFirstSearch(image, r, c - 1, newColor);
    }

    if (c + 1 < width && image[r][c + 1] === previousColor) {
        floodFillWithDepthFirstSearch(image, r, c + 1, newColor);
    }
}
