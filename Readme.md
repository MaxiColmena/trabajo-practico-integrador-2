# API de Usuarios - Proyecto Integrador

Este proyecto es una API RESTful para la gestión de usuarios, artículos y comentarios, desarrollada con Node.js y MongoDB. Incluye endpoints protegidos para administración y operaciones CRUD sobre usuarios.

## Endpoints de Usuarios (solo admin)

### Listar todos los usuarios
**GET** `/api/users`
Retorna todos los usuarios registrados, incluyendo sus artículos y comentarios asociados.

**Ejemplo de respuesta:**
```json
{
	"ok": true,
	"message": "Usuarios encontrados exitosamente",
	"data": [
		{
			"_id": "...",
			"username": "admin",
			"Articles": [...],
			"Comments": [...]
		}
	]
}
```

### Obtener usuario por ID
**GET** `/api/users/:id`
Retorna el usuario específico, con sus artículos y comentarios.

**Ejemplo de respuesta:**
```json
{
	"ok": true,
	"data": {
		"_id": "...",
		"username": "usuario1",
		"Articles": [...],
		"Comments": [...]
	}
}
```

### Actualizar usuario
**PUT** `/api/users/:id`
Actualiza los datos de un usuario. Solo accesible por administradores.

**Body ejemplo:**
```json
{
	"username": "nuevoNombre",
	"email": "nuevo@email.com"
}
```

**Respuesta exitosa:**
```json
{
	"ok": true,
	"msg": "Usuario actualizado correctamente",
	"data": {
		"_id": "...",
		"username": "nuevoNombre",
		"email": "nuevo@email.com"
	}
}
```

### Eliminar usuario
**DELETE** `/api/users/:id`
Elimina físicamente un usuario de la base de datos.

**Respuesta exitosa:**
```json
{
	"ok": true,
	"message": "Usuario eliminado completamente con exito"
}
```

## Ejemplo de error
Si el usuario no existe:
```json
{
	"ok": false,
	"msg": "Usuario no encontrado"
}
```

## Otros casos de uso
- **Autenticación:** Registro, login y logout de usuarios.
- **Artículos:** CRUD de artículos, asociación de etiquetas y comentarios.
- **Comentarios:** Crear, listar y eliminar comentarios en artículos.

## Instalación y ejecución
1. Clona el repositorio.
2. Instala dependencias:
	 ```powershell
	 npm install
	 ```
3. Configura las variables de entorno en `.env`.
4. Ejecuta la app:
	 ```powershell
	 node app.js
	 ```

## Tecnologías usadas
- Node.js
- Express
- MongoDB (Mongoose)

## Autores
MaxiColmena

---
Para dudas o sugerencias, abre un issue en el repositorio.
