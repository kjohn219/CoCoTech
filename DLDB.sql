--mysql workbench manual creation scripts to generate DB and DL table

-- DROP DATABASE IF EXISTS cocotech;
-- CREATE DATABASE cocotech;
USE cocotech;

CREATE TABLE dlgroups (
    id INTEGER AUTO_INCREMENT NOT Null,
    dl_name VARCHAR(60) NOT NULL,
    PRIMARY KEY (id)
);
