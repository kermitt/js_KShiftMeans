import sqlite3

cursor = sqlite3.connect("feedback.sqlite").cursor()
import re

sql = """
         select 
         rowid,
         INFO_EASE_FIND,
         INFO_EASE_USE,
         INFO_EXPECT,
         INCLUDES_TOOLS,
         SITE_LD,
         SITE_VISIT_FRQ,
         GENDER,
         AGE_CAT	
         from feedback; 
         """
cursor.execute(sql)
all_rows = cursor.fetchall()

def addFIND(x):
    if x != "":
        r = "{0}".format(x)
    else:
        r = "0"
    return r
    
def addUSE(x):
    if x != "":
        r = "{0}".format(x)
    else:
        r = "0"
    return r        
    
def addEXPECT(x):
    if x != "":
        r = "{0}".format(x)
    else:
        r = "0"
    return r        
    
def addTOOLS(x):
    if x != "":
        r = "{0}".format(x)
    else:
        r = "0"
    return r        
    
def addSITELOAD(x):
    if x != "":
        r = "{0}".format(x)
    else:
        r = "0"
    return r        
    
def addGENDER(x):
    r =x
    if "Male" in x:
        r = "1"
    elif "Female" in x:
        r = "2"
    elif x == "":
        r = "0"
    else:
        r = x
    return r        
    
def addFRQ(x):
    if x == "First-time visitor":
        r = "1"
    elif x == "Daily":
        r = "2"
    elif x == "Weekly":
        r = "3"
    elif x == "Monthly":
        r = "4"
    elif x == "Quarterly":
        r = "5"
    elif x == "Yearly":
        r = "6"
    elif x == "":
        r = "0"
    else:
        r = x
    return r


def addAGE_CAT(x):
    if x == "13-26":
        r = "1"
    elif x == "27-35":
        r = "2"
    elif x == "36-45":
        r = "3"
    elif x == "46-55":
        r = "4"
    elif x == "56-65":
        r = "5"
    elif x == "66-75":
        r = "6"
    elif x == "76-85":
        r = "7"
    elif x == "Older":
        r = "8"
    elif x == "":
        r = "0"
    else:
        r = x
    return r
i =0
for row in all_rows:
    id = row[0]
    find = addFIND(row[1]) 
    use= addUSE(row[2]) 
    expect= addEXPECT(row[3]) 
    tools= addTOOLS(row[4]) 
    loads = addSITELOAD(row[5])
    frq = addFRQ(row[6])
    gender= addGENDER(row[7])
    age= addAGE_CAT(row[8])
    
    isPoison = False
    if find == "0" or use == "0" or expect == "0" or tools == "0" \
    or loads == "0" or frq == "0" or gender == "0" or age == "0":
        isPoison = True
    out = "{0}|{1}|{2}|{3}|{4}|{5}|{6}|{7}|{8}|{9}".format(i, id,find,use,expect,tools,loads,frq,gender,age)
    if not isPoison or isPoison:
        print(out)
        with open("data.psv", 'a') as f:
            f.write(out)
            f.write("\n")
        i += 1
cursor.close();
