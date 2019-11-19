# microservice-csv
microservice-csv

1)discovery

2)student-service [used to download csv and generate csv]

CSV generate by opencsv ..

<dependency>
  <groupId>com.opencsv</groupId>
  <artifactId>opencsv</artifactId>
  <version>4.5</version>
</dependency>

Download CSV ..

by specific location so we can change.


please refer images 
1)Screenshot from 2019-11-18 20-25-19.png
2)Screenshot from 2019-11-18 20-25-48.png

Postgres SQL -> "university.sql".

--> http://localhost:9200/api/files/classpath/users


For run
1) run discovery

2) run student-service

3) csv-download-demo-FE
-npm install 
-npm start
