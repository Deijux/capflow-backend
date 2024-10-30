const notFoundMessages = ['Producto no encontrado en la base de datos']
const loginMessages = [
  'Credenciales incorrectas',
  'El usuario ya existe',
  'Acceso denegado. No hay token',
  'Token no válido o expirado',
]

const handleError = (res, error, status) => {
  let statusMessage = () => {
    if (status) return status
    if (notFoundMessages.includes(error.message)) {
      return 404
    }
    if (loginMessages.includes(error.message)) {
      return 401
    }
    return 500
  }

  console.error('New error generated:')
  console.log(error)
  return res.status(statusMessage()).send({ errors: error })
}

module.exports = { handleError }
