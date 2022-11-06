# Project 1 report

This is the project 1 for Designing and building scalable web applications.
It is in two folders, bitly_deno_vanilla, which is done using vanilla Deno, and bitly, which is
done using deno with Oak framework.

You can get the different implementations up and running by using the command docker-compose up inside the folder.
Note that they are using the same port, 7777.

Scripts are found in the scripts folder, which is using k6. You can install k6 here: https://k6.io/docs/get-started/installation/

The scripts are run by running the command k6 run "FILE_NAME.js" in the scripts folder. Make sure you are running either of the implementations before running a script.

!NOTE! When you run the "script-redirect.js" script, make sure to add the shortening to the variable bitly.
You have to use the implementation at localhost:7777 and add a shortening.


RESULTS
  - Deno Vanilla Main page results:
      + Average requests: 12.48 ms
      + Median: 12.17 ms
      + 99th:   16.97 ms
      + 95th: 14.33 ms

  - Deno Oak Main page results:
      + Average requests: 12.31 ms
      + Median: 12.08 ms
      + 99th:   16.28 ms
      + 95th: 14.36 ms

  - Deno Vanilla POST form results:
      + Average requests: 23.02 ms
      + Median: 22.88 ms
      + 99th:   46.48 ms
      + 95th: 42.48 ms
  
  - Deno Oak POST form results:
      + Average requests: 24.17 ms
      + Median: 25.42 ms
      + 99th:   49.45 ms
      + 95th: 44.51 ms

  - Deno Vanilla REDIRECT results:
      + Average requests: 249.32 ms
      + Median: 184.15 ms
      + 99th:   796.48 ms
      + 95th: 610.92 ms

   Deno OAK REDIRECT results:
      + Average requests: 246.73 ms
      + Median: 185.77 ms
      + 99th:   765.54 ms
      + 95th: 608.86 ms

CONCLUSION
    Almost in all cases vanilla/native deno is faster than Oak framework. The reason for this is because Oak is built over vanilla so there is no reason why it would perform faster.
    However, in this case the time differences are but a few milliseconds, having Oak is a better choice in the big picture because of the features and libraries it offers. 
