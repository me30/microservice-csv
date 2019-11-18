DROP TABLE "public"."student";
CREATE TABLE "public"."student" ("id" UUID NOT NULL, "name" CHARACTER VARYING(255), PRIMARY KEY ("id"));
INSERT INTO "public"."student" ("id", "name") VALUES ('eb233e05-e6b3-45b0-87ff-b538a272debf', 'TEST1');
INSERT INTO "public"."student" ("id", "name") VALUES ('70bb2e83-e3b1-416e-8714-019ac9a04e22', 'TEST2');
INSERT INTO "public"."student" ("id", "name") VALUES ('a8347f58-62c6-4d59-886f-2ead3be06c91', 'TEST3');
INSERT INTO "public"."student" ("id", "name") VALUES ('826147c2-0c34-40da-9bc1-2d769f693220', 'TEST4');
