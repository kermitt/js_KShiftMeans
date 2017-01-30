K-Shift-Means<br/>
<br/>
Currently, a 7 dimension K-Shift-Means: find,use,expect,tools,loads,frq,gender,age<br/>
<br/>
point count: 332<br/>
dimensions: 8<br/>
<br/>
After 20 iterations, the clusters are:<br/>

:	point count: 332<br/>
:	dimensions: 8<br/>
update feedback set topic=1 where rowid in (26,28,32,36,61,62,63,83,93,106,123,125,126,132,134,140,172,174,193,218,231,243,249,264,268,275,279,304,310,323,327,334,347,363);<br/>
update feedback set topic=2 where rowid in (6,44,74,75,91,95,97,113,178,209,314,344,361);<br/>
update feedback set topic=4 where rowid in (18,38,39,41,45,47,76,94,115,120,121,141,166,176,183,203,220,252,278,280,299,302,306,308,317,322,326,330,341);<br/>
update feedback set topic=10 where rowid in (29,33,42,66,101,118,162,215,219,229,261,262,263,281,293,301,307,342);<br/>
update feedback set topic=11 where rowid in (13,21,22,23,27,30,31,52,53,60,70,71,72,84,92,105,108,109,116,119,122,124,128,135,149,150,151,157,163,164,167,180,190,194,196,197,198,204,206,208,210,211,228,230,232,233,238,255,258,259,269,271,284,291,296,298,300,305,312,315,324,328,331,332,338,346,348,349,350,358,362,365,368);<br/>
update feedback set topic=14 where rowid in (2,3,8,9,82,87,100,103,104,130,146,147,188,216,242,282,289,311);<br/>
update feedback set topic=15 where rowid in (1,161,207,221,222,227,244,250,251,253,297,318,320,339,343,352,354,369);<br/>
update feedback set topic=16 where rowid in (7,12,15,16,19,24,40,54,55,56,58,68,81,85,86,89,90,99,107,110,114,127,129,133,136,137,148,154,155,159,160,165,169,170,173,184,186,189,192,199,205,212,213,214,217,224,225,226,234,246,248,254,257,260,266,270,276,285,303,319,321,325,329,335,337,340,351,357);<br/>
update feedback set topic=18 where rowid in (5,17,51,57,96,98,112,143,144,158,182,191,201,202,223,235,241,256,265,288,333,356,364);<br/>
update feedback set topic=19 where rowid in (4,11,14,25,34,43,46,48,49,59,64,79,80,102,111,131,138,139,145,152,153,156,177,187,195,200,236,237,239,245,309,313,316,355,359,360,366,367);<br/>
<br/>
<br/>
<br/>
MEMBER_COUNT | Location vector<br/>
34   | 1 | 1.1 |      1.1 |      1.2 |      1.1 |      3.9 |      1.1 |      1.5 |      5.0 |       <br/>
13   | 2 | 1.2 |      1.1 |      1.0 |      1.1 |      3.9 |      0.6 |      0.5 |      0.0 |       <br/>
29   | 4 | 3.2 |      2.8 |      2.6 |      2.9 |      3.9 |      2.5 |      1.6 |      4.4 |       <br/>
18   | 10 | 1.2 |      1.3 |      1.2 |      1.2 |      4.4 |      1.8 |      1.9 |      2.4 |       <br/>
73   | 11 | 0.9 |      0.9 |      0.9 |      0.8 |      1.8 |      4.5 |      1.7 |      4.8 |       <br/>
18   | 14 | 0.2 |      0.2 |      0.2 |      0.2 |      0.2 |      3.4 |      1.4 |      0.8 |       <br/>
18   | 15 | 1.7 |      1.7 |      1.6 |      2.2 |      1.4 |      3.0 |      1.4 |      4.2 |       <br/>
68   | 16 | 1.0 |      1.0 |      0.9 |      0.9 |      0.8 |      0.3 |      0.3 |      0.4 |       <br/>
23   | 18 | 2.5 |      2.5 |      2.3 |      2.3 |      3.3 |      4.6 |      1.5 |      2.0 |       <br/>
38   | 19 | 0.6 |      0.5 |      0.6 |      0.5 |      0.6 |      1.0 |      1.5 |      5.2 |       <br/>
:	Clustered 332 into 10 clusters<br/>
:	The end<br/>
<br/>
<br/>
<br/>
<br/>
<br/>





<br/>
-----------------------------------------------------------<br/>
<br/>
Use data_prep.py to get create data.psv from Feedback.sqlite DB.<br/>
<br/>
The Feedback table has this schema: <br/>
<br/>
CREATE TABLE feedback(TOPIC STRING, BEST_DESC STRING,DT_RCVD	STRING,	INFO_EASE_FIND	STRING,	INFO_EASE_USE	STRING,	INFO_EXPECT	STRING,	INCLUDES_TOOLS	STRING,	SITE_LD	SITE	STRING,	FDBK_SUBJECT	STRING,	VISIT_PURPOSE	STRING,	FIND	STRING,	SITE_VISIT_FRQ	STRING,	GENDER	STRING,	AGE_CAT	STRING,	PERSON_ID	STRING,	EMAIL	STRING,		PREV_PAGE	STRING,				COMMENTS	STRING)<br/>