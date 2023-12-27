import json



action = input("Add(1)/Delete(2)?")
filepath = 'SoloVidscopy.json'
if(action == "2"):
    with open(filepath, 'r') as fp:
        data = json.load(fp)
        name = input("What video do you want to remove? ")

       
        updated_data = [x for x in data if name != x["title"]]


    with open(filepath, 'w') as fp:
        json.dump(updated_data, fp, indent=2)

