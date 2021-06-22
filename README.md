
# SUPERHEROES - Alkemy Challenge

Este proyecto fue realizado como Challenge para Alkemy.
Se trata de una aplicación web construida con react para construir tu propio equipo de superheroes utilizando la API de https://superheroapi.com/ .



#### ¿Cómo funciona?
El proyecto inicia con un login que hace llamada a la api de Alkemy. Una vez que el logueo fue exitoso se guarda el token en el localstorage. En cada página se verifica si éste token está guardado, en el caso de que no, se redirecciona a la página de login.
Se buscan los superheroes que se desean en el equipo y se van agregando utilizando useContext.

Los formularios hacen verificaciones básicas utilizando la libreria Formik y cada petición http se realiza con axios.

Y el estilo fue dado con Bootstrap.

Vale destacar que se podrían haber refactorizado muchas partes del código como así tambien agregar más funcionalidades como la de guardar el equipo creado para que una vez que se salió de la página y se vuelva a entrar éste se cargue que por la falta de tiempo no pudo ser realizado.
## Environment Variables

Para ejecutar este proyecto es necesario realizar un archivo .env con la siguiente variable de entorno.

`REACT_APP_API_KEY`


  
## Ejecutar localmente

Clonar el proyecto

```bash
  git clone url-de-git
```

Ve al directorio del proyecto

```bash
  cd nombre-de-proyecto
```

Instala las dependencias

```bash
  npm install
```

Inicia el servidor

```bash
  npm run start
```

  