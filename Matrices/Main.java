public class Main {

    public static void main(String[] args){

        int[][] arrays = {{100, 200, 300}, {400, 500, 600}, {700, 800, 900}};
        int[][] arrays2 = {{100, 200, 300}, {600, 600, 600}, {700, 800, 900}};

        //printLine(arrays);
        //printColumn(arrays);
        //diagonally(arrays);
        //diagonallyInverted(arrays);
        System.out.println(isSameValue(arrays2, 1));
        
    }

    private static  void printLine(int[][] arrays){
        for (int i = 0; i < arrays.length; i++) {
            System.out.print(arrays[0][i] + " ");
        }
    }

     private static  void printColumn(int[][] arrays){
        for (int i = 0; i < arrays.length; i++) {
            System.out.print(arrays[i][0] + " ");
        }
    }

    private static void diagonally(int[][] arrays){
        int suma = 0;
        for (int i = 0; i < arrays.length; i++) {
            System.out.print(arrays[i][i] + " ");
            suma += arrays[i][i];
        }
        System.out.println(suma);
    }

    private static void diagonallyInverted(int[][] arrays){
        int suma = 0;
        for (int i = 0; i < arrays.length; i++) {
            for (int j = arrays.length -1; j >= 0; j--) {
                System.out.println(arrays[i][j]);
                suma += arrays[i][j];
                i++;
            }
        }
        System.out.println(suma);
    }

    private static boolean isSameValue(int[][] arrays, int line) {
    int temp = arrays[line][0];

    for (int j = 1; j < arrays[line].length; j++) {
        if (arrays[line][j] != temp) {
            return false;
        }
    }
    return true;
}

    
}

