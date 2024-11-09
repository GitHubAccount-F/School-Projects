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

package gsonDemo;

import com.google.gson.Gson;

public class GsonDemo {

    public static void main(String[] args) {
        Gson gson = new Gson();
        SchoolInfo sInfo = new SchoolInfo();
        String json = gson.toJson(sInfo);
        System.out.println(json);
    }
}