import itertools
from itertools import combinations


n = 1
purls = []
while(n!=0):
        n = int(input())
        
        for i in range(0,n):
            a=list(map(int,input().split()))
            b=[]
            for j in range(1,len(a)):
                a[j]=10-a[j]
                
            purls.append(a)
        
#print (purls)  

cfsum=[]
count=[]
for item in purls:
    summ=0
    temp=[]
    for j in range(1,len(item)):
        summ+=item[j]
        temp.append(summ)
    cfsum.append(temp)
#print (cfsum)
     
profcount=[]   
for item in cfsum:
    high=max(item)
    indices = [i+1 for i,val in enumerate(item) if val==high]
    profcount.append([high,indices])
#print(profcount)
maxPro=[]
combi=[]
for item in profcount:
    if(item[0]>=0):
        maxPro.append(item[0])
        combi.append(item[1])
        
print(maxPro)  
print(combi)
totalcomb=[]
totalcomb2=[]
for element in itertools.product(*combi):
    totalcomb2.append(element)
print(totalcomb2)
for arr in combi:
    for j in range(1,len(arr)+1):
        totalcomb.append(tuple(itertools.combinations(arr,j)))
    
print(totalcomb)  
    
    
    
    


"""

sample input -
2
6 10 13 14 13 1 9
6 6 11 7 15 11 8
0

Sample Output
6
3 4 9
"""