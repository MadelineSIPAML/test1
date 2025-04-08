adivinanzas=0
intentos=0

while adivinanzas!=6 and intentos >5:
    adivinanzas=int(input("adivina el numero:"))
    intentos+=1
if adivinanzas!=6:

    
    print("te quedaste sin intentos")
else:
    print("adivinaste")

  