import java.util.Arrays;
import java.util.List;

public class Unosettesettetre {

    public int countMatches(List<List<String>> items, String ruleKey, String ruleValue) {


        int key = 0;
        if(ruleKey.equals("type")) key = 0;
        if(ruleKey.equals("color")) key = 1;
        if(ruleKey.equals("name")) key = 2;

        int ans = 0;

        for(int i=0; i<items.size(); i++ ){
            if(items.get(i).get(key).equals(ruleValue)) ans++;
        }

        return ans;
    }

    public static void main(String[] var0) {
        List<List<String>> items = Arrays.asList(
            Arrays.asList("phone","blue","pixel"),
            Arrays.asList("computer","silver","lenovo"),
            Arrays.asList("phone", "gold", "iphone")
        );
        
        String ruleKey = "color";
        String ruleValue = "silver";
        
        Unosettesettetre tester = new Unosettesettetre();
        System.out.println(tester.countMatches(items, ruleKey, ruleValue));
    }

}
