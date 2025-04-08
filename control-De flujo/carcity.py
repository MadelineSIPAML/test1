# Madeline Toledo FECHA:03-04-2025

altura=int(input("cual es tu altura(cm)?"))

#CREARON UNA Var para solicitar informacion al usuario

creditos=int(input("cuantos creditos tienes?"))

if altura >=137 and creditos>=10:
    print("Disfruta tu viaje")

elif altura< 137 and creditos >=10:
    print("no tienes la altura Suficiente para subir")
elif creditos< 10 and altura >=137 and creditos<10:
    print("Te falta creditos()")
else:
    print("no cumple con ningun requisito ")



