--mysql workbench manual creation scripts to generate DB and DL table

-- DROP DATABASE IF EXISTS cocotech;
-- CREATE DATABASE cocotech;
USE u311cgkmmksb0cud;

CREATE TABLE emailgroups (
    id INTEGER AUTO_INCREMENT NOT Null,
    dl_name VARCHAR(60) NOT NULL,
    PRIMARY KEY (id)
);



CREATE TABLE requesters(
 ID INTEGER auto_increment primary key,
 REQUESTER_SSO INTEGER,
 REQUESTER_NAME VARCHAR(70),
 PHONE VARCHAR(20),
 CATEGORY VARCHAR(70),
 DESCRIPTIONS VARCHAR(500),
 TICKET VARCHAR(20)

 );


 CREATE TABLE technicians(
  ID INTEGER auto_increment primary key,
  SSO INTEGER,
  NAME VARCHAR(70),
  GROUP_NAME VARCHAR(70),
  STATUS VARCHAR(20),
  TICKET VARCHAR(20)

  );