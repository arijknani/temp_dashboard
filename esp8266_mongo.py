import pymongo as md
from datetime import date, datetime
import serial
import time


#date
day = date.today()
nday = day.strftime("%d-%m-%Y")


#création  communication arduino

port ="COM3"  #port serie
try:
    com = serial.Serial(port, 9600 , timeout=1)
except Exception:
    print(" problème de connexion serie ")

try:

    client = md.MongoClient("localhost", 27017, ServerSelectionTimeoutMS=5000)
    Dblist = client.list_database_names()
    print(Dblist)
    if 'hum_temp' in Dblist:

        #Dbclient = client.get_database("hum_temp")  #récupération base de données
        Dbclient = client.hum_temp
        print(Dbclient)
        listCollect = Dbclient.list_collection_names() #listes des tables
        #print(listCollect)
        if "hum_temp" in listCollect:
            table = Dbclient.get_collection("hum_temp") #recupération table

            #table.insert_one(datas)

            #afficher
            # docs = table.find()
            # for doc in docs:
            #     print(doc)
        else:
            print("table introuvable")
    else:
        print("base de données introuvable")

except Exception as e:
    print("erreur: ", str(e))

# finally:
    #client.close()
while True:

    #données du capteur
    data = com.readline()
    print(data.decode('ISO-8859-1'))
    # temps
    now = datetime.now()
    ctime = now.strftime("%H:%M:%S")
    datas = {"temp": data.decode('ISO-8859-1'), "date": nday, "heure": ctime}
    table.insert_one(datas)  #insetion dans la base de données
    time.sleep(5) #toute les 5 secondes