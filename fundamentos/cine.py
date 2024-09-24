# Diana - Vivir en CDMX
# Ximena - Haya boletos disponibles
# Regina - Tener tiempo libre
# Brenda - Invite las palomitas
# Faty - Tener billullo

def veremosAlGuason():
    respuesta=input("Vives en la CDMX? (True/False)").lower()
    
    if respuesta == "true":
        vivir_en_cdmx = True
    elif respuesta == "false":
        vivir_en_cdmx = False
    
    boletos_disponibles = True
    tener_tiempo_libre = True
    invite_palomitas = True
    tener_billullo = True
    
    if vivir_en_cdmx:
        print("Si podremos ir ...")
        if boletos_disponibles:
            print("Compramos boletos")
            if tener_tiempo_libre and tener_billullo:
                print("Puedo programar mi ida al cine")
                if invite_palomitas:
                    print("Voy a poder yo comprar las crepas")
                else:
                    print("Meto hamburguesas de contrabando")
            else:
                print("Bucar otro día para ir al cine")
        else:
            print("Esperar a que haya boletos")
    else:
        print("No podremos ir ...")

def veremosAlBromas():
    vivir_en_madrid = True
    ticketes_disponibles = True
    hostia_tio_tengolibre = True
    invite_rosetas = True
    tener_pesetas = True
    
    if vivir_en_madrid and ticketes_disponibles and hostia_tio_tengolibre and invite_rosetas and tener_pesetas:
        print("Iremos a ver al bromas")
    else:
        print("No podremos ir a ver al bromas")
        
veremosAlGuason()
veremosAlBromas()