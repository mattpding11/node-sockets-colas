# **Web Socket NodeJS** aplicación de **colas con tickets**.

Esta aplicación te permite generar tiquetes, atender los tiquetes en cola y también visualizar los turnos en pantalla

Para probarla online ente a este enlace** <https://node-sockets-colas-mpd.herokuapp.com>**

Para usarla en su local por favor descargue el repositorio y luego dentro de la carpeta cree el archivo **.env** dentro de este agregue lo siguiente:

PORT=8080

Después de esto vaya a la consola de comandos en la ruta raíz del proyecto y ejecute el comando `npm i` para instalar las dependencias de node, y a continuación escriba el comando `npm start` para lanzar el servicio

Posterior a esto prueba lo siguiente:

**Recuerde que si abrió el servidor virtual solo debe abrir ese mismo enlace en el navegador, en incognito y en el teléfono con la misma dinámica de pruebas del siguiente tutorial**

---


ingrese al servidor **local""

![imagen](https://res.cloudinary.com/drbotbbjb/image/upload/v1653981908/Screenshot_150_jqe72d.png)

En el botón que dice **crear tickets** presiónelo y lo llevara a la siguiente vista (cree varios tiquetes, al menos 10)

![imagen](https://res.cloudinary.com/drbotbbjb/image/upload/v1653981908/Screenshot_153_vschhi.png)

Después haga click ir **atrás** y en escritorio escriba **escritorio #1** (puede ser cualquier otro nombre) y dele ingresar

![imagen](https://res.cloudinary.com/drbotbbjb/image/upload/v1653981908/Screenshot_154_o9thbh.png)

Le saldrá esta interfaz y aquí presione varias veces atender tickets, unas 3 0 4 para atender los turnos 

![imagen](https://res.cloudinary.com/drbotbbjb/image/upload/v1653981908/Screenshot_155_v9ylaw.png)

Luego dele ir atrás y presione el botón **pantalla publica **que le mostrara como van los turnos, muestra el actual que es el mas grande y a la derecha los turnos que ya fueron atentados 

![imagen](https://res.cloudinary.com/drbotbbjb/image/upload/v1653981908/Screenshot_156_yhx3g8.png)

Para probar que si se pueden conectar otros sockets por favor
abra una **ventana de incognito** y diríjase al link del menú principal (la primera
pantalla), entre como un **escritorio #2 **puesto que le quede algo así con diferentes escritorios 

![imagen](https://res.cloudinary.com/drbotbbjb/image/upload/v1653981908/Screenshot_157_toatgy.png)

También para abrir un tercer socket lo puede hacer desde su **teléfono**:

1.	 primero abra el **cmd** en su pc de y ejecute el comando `ipconfig` para ver su **ipv4** local de la red que este usando sea wifi o ethernet (t)

2.	Esa ip la va a escribir en su navegador de Google de su **teléfono** tal cual y al final agréguele dos puntos y el puerto que esta usando en este caso el **8080** de tal manera que le quede algo así **`192.168.1.57:8080`** como me aparece a mi **(Tenga en cuenta que dispositivo móvil debe estar conectado a la misma red que su de internet de su pc para que esto funcione )**
-	
Después escriba otro escritorio, esta vez **escritorio #3
**
![imagen](https://res.cloudinary.com/drbotbbjb/image/upload/v1653983225/WhatsApp_Image_2022-05-31_at_2.18.05_AM_1_yx3mhe.jpg)


Atienda mas tickets y vera como en los **3 clientes** abiertos simultáneamente va cambiando el número de los que están en cola 


![imagen](https://res.cloudinary.com/drbotbbjb/image/upload/v1653983225/WhatsApp_Image_2022-05-31_at_2.18.05_AM_xudu1w.jpg)

Vaya otra vez a la pantalla y verifique los turnos actuales y los pasados que son los 3 anteriores 

![imagen](https://res.cloudinary.com/drbotbbjb/image/upload/v1653983225/WhatsApp_Image_2022-05-31_at_2.18.04_AM_fsly1k.jpg)

---

### Contact
 
🌐 Portafolio web: https://mattpding11.github.io/mateo 
  
🌐 LinkedIn: https://www.linkedin.com/in/mateo-pe%C3%B1aranda-diaz-fullstack-developer/
  
✉️ Correo: mateo_1999_7@outlook.es


