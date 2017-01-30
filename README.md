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

SECONDARY ---------------<br/>
0   |   15<br/>
1   |   25<br/>
2   |   32<br/>
6   |   28<br/>
7   |   21<br/>
8   |   7<br/>
10   |   16<br/>
11   |   60<br/>
15   |   27<br/>
16   |   24<br/>
18   |   25<br/>
19   |   52<br/>
update feedback set centroid2=0 where rowid in (32,57,76,118,151,172,194,218,228,262,275,300,308,328,344);<br/>
update feedback set centroid2=1 where rowid in (18,41,53,109,112,121,126,155,157,183,208,223,230,238,241,250,252,261,288,297,307,326,330,341,364);<br/>
update feedback set centroid2=2 where rowid in (25,33,36,61,79,93,94,106,115,120,123,125,131,132,134,140,141,145,174,176,193,231,249,264,281,301,302,310,323,327,339,363);<br/>
update feedback set centroid2=6 where rowid in (2,8,9,27,52,70,71,72,103,104,108,116,124,130,146,147,163,188,191,202,221,222,296,311,333,348,349,356);<br/>
update feedback set centroid2=7 where rowid in (1,4,34,46,48,59,87,102,105,152,153,187,207,227,236,239,251,282,309,359,367);<br/>
update feedback set centroid2=8 where rowid in (3,22,23,82,100,216,289);<br/>
update feedback set centroid2=10 where rowid in (17,39,47,68,158,166,186,225,263,278,280,306,317,318,347,352);<br/>
update feedback set centroid2=11 where rowid in (11,13,14,21,26,28,31,38,43,49,60,62,63,64,80,83,84,92,111,119,122,138,139,150,156,167,177,180,190,195,198,200,204,232,233,237,243,245,255,258,259,268,269,271,279,284,304,313,316,324,331,338,346,355,358,360,365,366,368,369);<br/>
update feedback set centroid2=15 where rowid in (15,16,44,45,74,75,89,91,97,107,136,137,159,160,173,182,201,203,212,220,226,257,270,293,299,314,319);<br/>
update feedback set centroid2=16 where rowid in (30,128,135,149,161,164,206,210,211,242,244,253,265,291,298,305,312,315,320,332,343,350,354,362);<br/>
update feedback set centroid2=18 where rowid in (5,29,42,51,66,95,96,98,101,113,143,144,162,178,196,197,209,215,219,229,235,256,322,334,342);<br/>
update feedback set centroid2=19 where rowid in (6,7,12,19,24,40,54,55,56,58,81,85,86,90,99,110,114,127,129,133,148,154,165,169,170,184,189,192,199,205,213,214,217,224,234,246,248,254,260,266,276,285,303,321,325,329,335,337,340,351,357,361);<br/>
PRIMARY ---------------<br/>
48   | 0 | 1.2 |      1.3 |      1.1 |      1.2 |      4.4 |      2.2 |      1.6 |      4.3 |       <br/>
15   | 1 | 1.2 |      1.1 |      2.1 |      2.1 |      2.3 |      3.1 |      1.8 |      3.3 |       <br/>
51   | 2 | 0.3 |      0.2 |      0.1 |      0.2 |      0.3 |      0.2 |      0.1 |      0.5 |       <br/>
12   | 6 | 0.8 |      0.7 |      0.8 |      0.8 |      1.2 |      4.1 |      0.7 |      1.1 |       <br/>
25   | 7 | 0.2 |      0.1 |      0.1 |      0.1 |      0.1 |      1.3 |      1.6 |      4.7 |       <br/>
11   | 8 | 0.0 |      0.1 |      0.0 |      0.0 |      0.0 |      3.5 |      1.8 |      1.1 |       <br/>
31   | 10 | 3.8 |      3.5 |      3.3 |      3.6 |      3.7 |      3.0 |      1.5 |      4.3 |       <br/>
42   | 11 | 1.0 |      1.0 |      1.0 |      1.0 |      1.6 |      1.6 |      1.6 |      5.3 |       <br/>
17   | 15 | 2.6 |      2.5 |      2.2 |      2.2 |      3.6 |      1.2 |      1.9 |      1.1 |       <br/>
47   | 16 | 1.1 |      1.2 |      1.0 |      0.9 |      1.3 |      4.7 |      1.6 |      4.9 |       <br/>
18   | 18 | 1.5 |      1.7 |      1.6 |      1.4 |      4.0 |      3.8 |      1.4 |      1.6 |       <br/>
15   | 19 | 1.7 |      1.6 |      1.7 |      1.6 |      2.6 |      0.1 |      0.0 |      0.0 |       <br/>
update feedback set centroid1=0 where rowid in (26,28,33,36,42,53,62,63,66,83,93,101,106,120,123,132,134,135,140,149,157,162,193,196,197,208,219,230,243,249,261,264,268,279,281,293,301,304,312,315,323,327,334,341,342,347,362,363);<br/>
update feedback set centroid1=1 where rowid in (166,194,228,244,253,263,280,291,311,317,318,320,322,352,354);<br/>
update feedback set centroid1=2 where rowid in (7,12,19,24,38,39,40,47,54,55,56,58,76,81,85,86,90,99,110,114,127,129,133,154,165,169,170,184,189,192,199,205,214,217,224,234,246,248,254,260,266,276,285,321,325,329,335,340,343,351,357);<br/>
update feedback set centroid1=6 where rowid in (3,82,100,144,161,164,216,235,242,256,265,289);<br/>
update feedback set centroid1=7 where rowid in (11,14,43,49,64,80,111,138,139,150,156,177,195,200,232,237,245,313,316,331,346,355,358,360,366);<br/>
update feedback set centroid1=8 where rowid in (2,8,9,87,103,104,130,146,147,188,282);<br/>
update feedback set centroid1=10 where rowid in (18,41,45,51,94,96,98,107,115,121,126,137,141,155,160,173,176,182,183,203,220,241,252,270,299,302,308,326,330,339,356);<br/>
update feedback set centroid1=11 where rowid in (1,4,25,30,32,34,46,48,59,61,79,102,105,125,128,131,145,152,153,172,174,187,206,207,210,211,218,227,231,236,239,251,275,298,300,305,309,310,332,350,359,367);<br/>
update feedback set centroid1=15 where rowid in (5,29,68,113,143,148,186,209,213,215,225,229,278,303,306,337,361);<br/>
update feedback set centroid1=16 where rowid in (13,21,22,23,27,31,52,60,70,71,72,84,92,108,109,116,119,122,124,163,167,180,190,198,204,221,222,233,238,250,255,258,259,269,271,284,296,297,324,328,333,338,348,349,365,368,369);<br/>
update feedback set centroid1=18 where rowid in (6,17,44,57,112,118,151,158,191,201,202,223,262,288,307,314,344,364);<br/>
update feedback set centroid1=19 where rowid in (15,16,74,75,89,91,95,97,136,159,178,212,226,257,319);<br/>
<br/>
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
CREATE TABLE feedback(TOPIC STRING, BEST_DESC STRING,DT_RCVD	STRING,	INFO_EASE_FIND	STRING,	INFO_EASE_USE	STRING,	INFO_EXPECT	STRING,	INCLUDES_TOOLS	STRING,	SITE_LD	SITE	STRING,	FDBK_SUBJECT	STRING,	VISIT_PURPOSE	STRING,	FIND	STRING,	SITE_VISIT_FRQ	STRING,	GENDER	STRING,	AGE_CAT	STRING,	PERSON_ID	STRING,	EMAIL	STRING,		PREV_PAGE	STRING,				COMMENTS	STRING, centroid1 STRING, centroid2 STRING)<br/>