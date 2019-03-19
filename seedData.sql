
USE cocotech; -- use this db for subsequent use (make this primary/active) 

-- seed data to insert into DL (email groups) table -- 


INSERT INTO emailgroups(dl_name) VALUES ('@peter paul and mary');
INSERT INTO emailgroups(dl_name) VALUES ('@zombie town');
INSERT INTO emailgroups(dl_name) VALUES ('@firewall');
INSERT INTO emailgroups(dl_name) VALUES ('@BAAN ERP');
INSERT INTO emailgroups(dl_name) VALUES ('@webMethods Platform Operations');
INSERT INTO emailgroups(dl_name) VALUES ('@CocoTech DNS Support');
INSERT INTO emailgroups(dl_name) VALUES ('@CocoTech VPN Support');
INSERT INTO emailgroups(dl_name) VALUES ('@CocoTech Outlook Support');
INSERT INTO emailgroups(dl_name) VALUES ('@SMAX ERP');
INSERT INTO emailgroups(dl_name) VALUES ('@Informatica support team');
INSERT INTO emailgroups(dl_name) VALUES ('@L3 Unix team');
INSERT INTO emailgroups(dl_name) VALUES ('@Servers and Storage');



INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (55,717188177,'Doe, Mark (CoCoTech)','@CocoTech VPN Support','ACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (2,777671368,'Fer, Robert (CoCoTech)','@CocoTech VPN Support','ACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (3,773177777,'Key, Sai (CoCoTech)','@CocoTech VPN Support','ACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (4,711173746,'Mc, Alan (CoCoTech)','@CocoTech VPN Support','INACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (5,711176671,'Mont, Bill (CoCoTech)','@CocoTech VPN Support','INACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (6,777737737,'Mur, David (CoCoTech)','@CocoTech VPN Support','INACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (7,717777698,'Pi, Patrick (CoCoTech)','@CocoTech VPN Support','INACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (8,777611797,'Sim, Nu (CoCoTech)','@CocoTech VPN Support','INACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (9,717374378,'Beg, Ashma (CoCoTech)','@CocoTech Outlook Support','ACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (10,713178787,'Cha, Eresh (CoCoTech)','@CocoTech Outlook Support','ACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (11,713197717,'Das, So (CoCoTech)','@CocoTech Outlook Support','ACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (12,713169777,'Huss, Wa (CoCoTech)','@CocoTech Outlook Support','ACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (13,717698791,'Ku, Anil (CoCoTech)','@CocoTech Outlook Support','INACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (14,713178777,'R, Giri (CoCoTech)','@CocoTech Outlook Support','INACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (15,713713918,'R, Kart (CoCoTech)','@CocoTech Outlook Support','INACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (16,713147836,'Ram, Ha (CoCoTech)','@CocoTech Outlook Support','INACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (17,71371737,'Rao, Na (CoCoTech)','@CocoTech Outlook Support','INACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (18,713717379,'V, Ni (CoCoTech)','@CocoTech Outlook Support','ACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (19,717347364,'Var, Bi (CoCoTech)','@CocoTech DNS Support','ACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (20,717777336,'Vin, Ka (CoCoTech)','@CocoTech DNS Support','ACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (21,717777839,'Hock, Ches (CoCoTech)','@CocoTech DNS Support','ACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (22,717786666,'Arms, Dany (CoCoTech)','@CocoTech DNS Support','INACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (23,717847387,'Bary, Scott (CoCoTech)','@CocoTech DNS Support','INACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (24,713134887,'Dec, Brian (CoCoTech)','@CocoTech DNS Support','INACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (25,717979763,'Mar, Amy (CoCoTech)','@CocoTech DNS Support','INACTIVE');
INSERT INTO technicians(ID,SSO,NAME,GROUP_NAME,STATUS) VALUES (26,717773719,'Srin, Kart (CoCoTech)','@CocoTech DNS Support','INACTIVE');

INSERT INTO requesters(ID,REQUESTER_SSO,REQUESTER_NAME,PHONE,CATEGORY, DESCRIPTIONS, TICKET) VALUES (1,123,'Smith, Wolf (CoCoTech)','770-123-1234','DNS Service Case','Add xyz.com to 192.1.2.4','CASE111');
