import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class millenovecentoventi {

    public int[] buildArray(int[] nums) {
        List<Integer> ans = new ArrayList<>();

        for(int i=0; i<nums.length; i++){
            int pos = nums[i];
            ans.add(nums[pos]);
        }
        
        int[] result = ans.stream().mapToInt( i -> i).toArray();
        
        return result;
        }
     
        public static void main(String[] var0) {

            int[] prova = {4,0,2,1,3};
            millenovecentoventi var1 = new millenovecentoventi();
            System.out.println(Arrays.toString(var1.buildArray(prova)));

        }
     
}

// public int[] buildArray(int[] nums) {
// 	int[] ans = new int[nums.length];
// 	for(int i = 0; i < nums.length; i++)
// 		ans[i] = nums[nums[i]];
// 	return ans;
// }
