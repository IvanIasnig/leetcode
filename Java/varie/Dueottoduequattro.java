import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Dueottoduequattro {
    public int countPairs(List<Integer> nums, int target) {

        int ans = 0;
        for(int i=0; i<nums.size();i++){
            for(int k=i+1; k<nums.size(); k++){
                if(nums.get(i) + nums.get(k) < target){
                    ans++;
                }
            }
        }
        return ans;
    }

        public static void main(String[] var0) {

            List<Integer> prova = new ArrayList<>(Arrays.asList(2, 3, 4, 5));
            int x = 6;
            Dueottoduequattro var1 = new Dueottoduequattro();
            System.out.println(var1.countPairs(prova , x));

        }

}
