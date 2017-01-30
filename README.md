K-Shift-Means<br/>
<br/>
Currently, a 7 dimension K-Shift-Means: find,use,expect,tools,loads,frq,gender,age<br/>
<br/>
point count: 332<br/>
dimensions: 8<br/>
<br/>
After 20 iterations, the clusters are:<br/>
0    46<br/>
2    22<br/>
3    45<br/>
4    39<br/>
5    54<br/>
6    3<br/>
7    65<br/>
8    30<br/>
9    28<br/>
Clustered 332 into 10 clusters<br/>
<br/>
-----------------------------------------------------------<br/>
<br/>
Use data_prep.py to get create data.psv from Feedback.sqlite DB.<br/>
<br/>
The Feedback table has this schema: <br/>
<br/>
CREATE TABLE feedback(TOPIC STRING, BEST_DESC STRING,DT_RCVD	STRING,	INFO_EASE_FIND	STRING,	INFO_EASE_USE	STRING,	INFO_EXPECT	STRING,	INCLUDES_TOOLS	STRING,	SITE_LD	SITE	STRING,	FDBK_SUBJECT	STRING,	VISIT_PURPOSE	STRING,	FIND	STRING,	SITE_VISIT_FRQ	STRING,	GENDER	STRING,	AGE_CAT	STRING,	PERSON_ID	STRING,	EMAIL	STRING,		PREV_PAGE	STRING,				COMMENTS	STRING)<br/>