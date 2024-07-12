limit=int(input("enter the limit"))
def getinitialParameter(limit):
    initialparameter=int((limit * (limit+1)  )/2)
    return initialparameter

for i in range(limit,0,-1):
    initialparameter=getinitialParameter(i)
    for j in range(i,0,-1):
        print(initialparameter-j+1,end=" ")
    print("\n")

