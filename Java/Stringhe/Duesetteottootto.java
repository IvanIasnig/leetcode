import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Duesetteottootto {

    public List<String> splitWordsBySeparator(List<String> words, char separator) {
        List<String> nm=new ArrayList<>();
        for(int i=0;i<words.size();i++)
        {
            String arr[]=words.get(i).split("["+separator+"]");
            for(int j=0;j<arr.length;j++)
            {
                
                if(arr[j].length()>0)
                {
                    nm.add(arr[j]);
                }
            }
        }
        return nm;
    }

    public static void main(String[] var0) {
        List<String> ans = new ArrayList<>();
        ans.add("one.two.three");
        ans.add("four.five");
        ans.add("six");
        char sep = '.';
        Duesetteottootto tester = new Duesetteottootto();
        System.out.println(tester.splitWordsBySeparator(ans, sep));
    }
}
