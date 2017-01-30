K-Shift-Means

Currently, a 7 dimension K-Shift-Means: find,use,expect,tools,loads,frq,gender,age

point count: 332
dimensions: 8

After 20 iterations, the clusters are:
0    46
2    22
3    45
4    39
5    54
6    3
7    65
8    30
9    28
Clustered 332 into 10 clusters

-----------------------------------------------------------

Use data_prep.py to get create data.psv from Feedback.sqlite DB.

The Feedback table has this schema: 

CREATE TABLE feedback(TOPIC STRING, BEST_DESC STRING,DT_RCVD	STRING,	INFO_EASE_FIND	STRING,	INFO_EASE_USE	STRING,	INFO_EXPECT	STRING,	INCLUDES_TOOLS	STRING,	SITE_LD	SITE	STRING,	FDBK_SUBJECT	STRING,	VISIT_PURPOSE	STRING,	FIND	STRING,	SITE_VISIT_FRQ	STRING,	GENDER	STRING,	AGE_CAT	STRING,	PERSON_ID	STRING,	EMAIL	STRING,		PREV_PAGE	STRING,				COMMENTS	STRING)