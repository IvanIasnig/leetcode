public class Unoseiseidue {
    public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
        String one = String.join("", word1);
        String two = String.join("", word2);

        return one.equals(two);
    }

    public static void main(String[] var0) {
        String[] a = {"a", "bc"};
        String[] b = {"ab", "c"};
        Unoseiseidue tester = new Unoseiseidue();
        System.out.println(tester.arrayStringsAreEqual(a, b));
    }

}
