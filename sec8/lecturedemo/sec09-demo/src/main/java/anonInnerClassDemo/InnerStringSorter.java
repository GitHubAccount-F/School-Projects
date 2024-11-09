/*
 * Copyright (C) 2020 Hal Perkins.  All rights reserved.  Permission is
 * hereby granted to students registered for University of Washington
 * CSE 331 for use solely during Winter Quarter 2021 for purposes of
 * the course.  No other use, copying, distribution, or modification
 * is permitted without prior written consent. Copyrights for
 * third-party components of this work must be honored.  Instructors
 * interested in reusing these course materials should contact the
 * author.
 */

package anonInnerClassDemo;

import java.util.Arrays;
import java.util.Comparator;

public class InnerStringSorter {

    public static void main(String[] args) {
        String[] strings = new String[]{"CSE331", "UW", "React", "Java"};
        Arrays.sort(strings, new InnerLengthComparator());
        System.out.println(Arrays.toString(strings));
    }

    public static class InnerLengthComparator implements Comparator<String> {

        @Override
        public int compare(String s1, String s2) {
            return Integer.compare(s1.length(), s2.length());
        }
    }

}
