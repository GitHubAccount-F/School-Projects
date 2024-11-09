import java.util.*;
import java.lang.*;
public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(1);
        list.add(1);
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(3);
        list.add(1);
        list.add(1);
        list.add(1);
        list.add(1);
        list.add(1);
        list.add(1);
        list.add(3);
        list.add(3);
        list.add(3);
        list.add(4);
        list.add(4);

        sequence(list, 1);
    }

    public static void sequence(List<Integer> list, int value) {
        int leftLongest = 0;
        int rightLongest = 0;
        int longest = 0;
        int subLongest = 0;
        for(int i = 0; i < list.size(); i++) {
            if(list.get(i) == value) {
                leftLongest++;
            } else {
                break;
            }
        }
        for(int i = list.size()-1; i >= 0; i--) {
            if(list.get(i) == value) {
                rightLongest++;
            } else {
                break;
            }
        }
        for(int i = 0; i < list.size(); i++) {
            if(list.get(i) == value) {
                subLongest++;
            } else {
                if(subLongest > longest) {
                    longest = subLongest;
                }
                subLongest = 0;
            }
        }
        //case for when we reach outside the loop before reaching the else-case
        if(subLongest > longest) {
            longest = subLongest;
        }
        System.out.println("LongestLeft: " + leftLongest);
        System.out.println("LongestRight: " + rightLongest);
        System.out.println("Longest: " + longest);
    }

}