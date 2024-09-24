def operadores():
    # Declaración de Variable
    edad = 18
    nacionalidad_mexicana = False

    # AND
    if edad >= 18 and nacionalidad_mexicana:
        print('Puede entregarse la INE')
    else:
        print('No se podrá entregar la INE')
        
    # OR
    if edad >= 18 or nacionalidad_mexicana:
        print('Puede pasar al antro')
    else:
        print('No puede pasar al antro')
    
    # NOT
    if not (edad >=18 or nacionalidad_mexicana):
        print('No puede pasar al antro')
    else:
        print('Puede pasar al antro')
        
operadores()