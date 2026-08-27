# NoReaction-BOT
 
Bot de Discord muy sencillo para un servidor personal que añade automáticamente reacciones de ⬆️ (upvote) y ⬇️ (downvote) a los mensajes que contienen un enlace, en un canal concreto del servidor,
para que sea más fácil votar contenido sin tener que reaccionar a mano.
 
Proyecto pequeño hecho por diversión / para practicar con `discord.js`, sin mas.
 
## Funcionalidades
 
- Detecta mensajes que contienen una URL en un canal específico (por defecto, `🤣◥haha-funny◤🤣`).
- Añade automáticamente las reacciones ⬆️ y ⬇️ a esos mensajes para que la comunidad pueda votarlos.
- Ignora los mensajes del propio bot y los de cualquier otro canal.
## Tecnologías
 
- [Node.js](https://nodejs.org/)
- [discord.js](https://discord.js.org/) v14
- [dotenv](https://www.npmjs.com/package/dotenv)
## Requisitos previos
 
- Node.js instalado (v18 o superior recomendado).
- Una aplicación de Discord creada en el [Developer Portal](https://discord.com/developers/applications), con el bot añadido a tu servidor y con los siguientes permisos:
  - Leer mensajes / ver canales
  - Añadir reacciones
  - Intent de contenido de mensajes (*Message Content Intent*) habilitado en el portal de desarrolladores
## Instalación
 
```bash
git clone https://github.com/Alvariill0/NoReaction-BOT.git
cd NoReaction-BOT
npm install
```
 
## Configuración
 
Crea un archivo `.env` en la raíz del proyecto con el token de tu bot:
 
```env
DISCORD_TOKEN=tu_token_aqui
```
 
Si quieres que el bot reaccione en otro canal, cambia el valor de `TARGET_CHANNEL` en `index.js` por el nombre exacto de tu canal:
 
```js
const TARGET_CHANNEL = 'nombre-de-tu-canal';
```
 
## Uso
 
```bash
node index.js
```
 
El bot se conectará a Discord y, a partir de ese momento, añadirá automáticamente las reacciones ⬆️ y ⬇️ a cualquier mensaje con un enlace que se publique en el canal configurado.
 
## Estado del proyecto
 
Proyecto experimental pensado para un servidor propio. No está pensado para uso en producción ni a gran escala.
 
