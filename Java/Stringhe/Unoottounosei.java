public class Unoottounosei {
    public String truncateSentence(String s, int k) {
        String[] x = s.split(" ");

        String[] ans = new String[k];

        for(int i=0; i<k; i++){
            ans[i] = x[i];
        }

        return String.join(" ", ans);
    }

    public static void main(String[] var0) {
        String b = "Ciao sono Ivan come stai?";
        int par = 4;
        Unoottounosei tester = new Unoottounosei();
        System.out.println(tester.truncateSentence(b, par));
    }


}