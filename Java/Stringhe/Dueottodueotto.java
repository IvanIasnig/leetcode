import java.util.ArrayList;
import java.util.List;

public class Dueottodueotto {

        public boolean isAcronym(List<String> words, String s) {
            

            char[] str = s.toCharArray();

            if(words.size() !=str.length) return false; 

            for(int i=0; i<words.size(); i++){
                
                if(words.get(i).charAt(0) != str[i] ) return false;
            }

            return true;
    }

    public static void main(String[] var0){
        List<String> words = new ArrayList<>();
        words.add("Hello");
        words.add("World");
        words.add("Patata");
        String s = "HWP";

        Dueottodueotto tester = new Dueottodueotto();
        tester.isAcronym(words, s);
    }

}
