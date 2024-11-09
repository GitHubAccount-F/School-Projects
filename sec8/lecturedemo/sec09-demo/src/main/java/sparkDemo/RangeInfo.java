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

package sparkDemo;

import java.util.ArrayList;
import java.util.List;

/**
 * A class containing info about a range between two integers,
 * designed for transformation into JSON to be sent as a response
 * to a server request.
 */
public class RangeInfo {

    /**
     * The beginning of the range.
     */
    private int start;

    /**
     * The end of the range.
     */
    private int end;

    /**
     * All the integers between start and end.
     */
    private List<Integer> range;

    /**
     * All the prime numbers between start and end.
     */
    private List<Integer> primes;

    /**
     * The average of start and end.
     */
    private double average;

    /**
     * Creates a new object containing fields that have interesting info about the
     * range of numbers [start, end].
     *
     * @param start The beginning of the range.
     * @param end   The end of the range, inclusive.
     */
    public RangeInfo(int start, int end) {
        this.start = start;
        this.end = end;
        this.average = start + (((double) end) - ((double) start)) / 2.0D;
        this.range = createRangeList(start, end);
        this.primes = createPrimeList(start, end);
    }

    /**
     * @param start The beginning of the range.
     * @param end   The end of the range.
     * @return The list of all integers in the range [start, end] inclusive.
     */
    private static List<Integer> createRangeList(int start, int end) {
        List<Integer> range = new ArrayList<>();
        for(int i = start; i <= end; i++) {
            range.add(i);
        }
        return range;
    }

    /**
     * Creates a list of all prime numbers between integers start and end, where start < end.
     *
     * @param start The beginning of the range to search.
     * @param end   The end of the range to search.
     * @return The list of primes between start and end.
     */
    private static List<Integer> createPrimeList(int start, int end) {
        List<Integer> primes = new ArrayList<>();
        for(int i = start; i <= end; i++) {
            if(isPrime(i)) {
                primes.add(i);
            }
        }
        return primes;
    }

    /**
     * Determines whether a number is prime. Note that this
     * is average-case O(n), not meant for large numbers.
     *
     * @param n A number to query.
     * @return true if and only if n is prime.
     */
    private static boolean isPrime(int n) {
        if(n == 2) {
            return true; // 2 is the only even prime.
        } else if(n % 2 == 0) {
            return false; // All other even numbers are not prime.
        }
        // Very basic prime algorithm, just check all the reasonable factors.
        for(int i = 3; i < n; i++) {
            if(n % i == 0) {
                return false;
            }
        }
        return true;
    }

}
