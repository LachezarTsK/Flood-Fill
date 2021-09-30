
public class Solution {

    int height;
    int width;
    int previousColor;

    public int[][] floodFill(int[][] image, int sr, int sc, int newColor) {

        if (image[sr][sc] == newColor) {
            return image;
        }

        height = image.length;
        width = image[0].length;
        previousColor = image[sr][sc];
        floodFillWithDepthFirstSearch(image, sr, sc, newColor);

        return image;
    }

    public void floodFillWithDepthFirstSearch(int[][] image, int r, int c, int newColor) {
        image[r][c] = newColor;

        if (r - 1 >= 0 && image[r - 1][c] == previousColor) {
            floodFillWithDepthFirstSearch(image, r - 1, c, newColor);
        }

        if (r + 1 < height && image[r + 1][c] == previousColor) {
            floodFillWithDepthFirstSearch(image, r + 1, c, newColor);
        }
        if (c - 1 >= 0 && image[r][c - 1] == previousColor) {
            floodFillWithDepthFirstSearch(image, r, c - 1, newColor);
        }

        if (c + 1 < width && image[r][c + 1] == previousColor) {
            floodFillWithDepthFirstSearch(image, r, c + 1, newColor);
        }
    }
}
