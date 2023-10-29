public class Unoottotredue {
    public boolean checkIfPangram(String sentence) {
        String[]arr = sentence.split("");

        int ans = 0;

        for(int i=0; i<arr.length; i++){
            for(int k=i+1; k<arr.length; k++){
                if(arr[i].equals(arr[k])){
                    break;
                }

                if(k == arr.length -1){ans++;}
            }
        }
        return ans + 1 == 26;
    }

    public static void main(String[] var0) {
        String b = "abcdefghijklmnopqrstuvwxyz";
        Unoottotredue tester = new Unoottotredue();
        System.out.println(tester.checkIfPangram(b));
    }

}
