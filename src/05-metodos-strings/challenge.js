// ============================================
// Reto: Métodos esenciales de strings en JavaScript
// ============================================
// Practica length, slice, split, trim, toLowerCase, includes,
// startsWith, endsWith y replace. Los strings son inmutables.
// Ejecuta los tests con: npx vitest src/05-metodos-strings
// ============================================

// --- Reto 1: Contar caracteres con length ---
// Recibe un string "texto". Retorna la cantidad de caracteres (usa la propiedad length).
function contarCaracteres(texto) {
  return texto.length;
}

// --- Reto 2: Extraer porción con slice ---
// Recibe "texto", "inicio" y "fin" (índices). Retorna la porción desde inicio hasta fin (sin incluir fin).
// Si fin no se pasa o es undefined, extrae hasta el final del string.
// Usa el método slice.
function extraerConSlice(texto, inicio, fin) {
  if (fin === undefined) {
    return texto.slice(inicio);
  }
  return texto.slice(inicio, fin);
}

// --- Reto 3: Extraer desde el final con slice (índice negativo) ---
// Recibe "texto" y "n" (número). Retorna los últimos "n" caracteres del string.
// Usa slice con índice negativo: slice(-n).
function extraerDesdeFinal(texto, n) {
  return texto.slice(-n);
}

// --- Reto 4: Dividir en array con split ---
// Recibe "texto" y "separador" (string). Retorna un array con las partes del texto
// divididas por el separador. Usa el método split.
function dividirEnPartes(texto, separador) {
  return texto.split(separador);
  return texto.split(separador);
}

// --- Reto 5: Limpiar espacios con trim ---
// Recibe un string "texto" que puede tener espacios al inicio y/o al final.
// Retorna el mismo texto sin espacios al inicio ni al final. Usa trim.
function limpiarEspacios(texto) {
  return texto.trim();
}

// --- Reto 6: Normalizar a minúsculas ---
// Recibe un string "texto". Retorna el texto en minúsculas usando toLowerCase.
// Útil para comparaciones sin importar mayúsculas/minúsculas.
function normalizarMinusculas(texto) {
  return texto.toLowerCase();
}

// --- Reto 7: Saber si incluye una subcadena con includes ---
// Recibe "texto" y "subcadena". Retorna true si el texto incluye la subcadena, false si no.
// Usa el método includes.
function incluyeSubcadena(texto, subcadena) {
  return texto.includes(subcadena);
  return texto.includes(subcadena);
}

// --- Reto 8: Validar inicio con startsWith ---
// Recibe "texto" y "prefijo". Retorna true si el texto empieza con el prefijo, false si no.
// Útil para validar prefijos (ej: nombre de archivo, protocolo).
function empiezaCon(texto, prefijo) {
  return texto.startsWith(prefijo);
}

// --- Reto 9: Validar fin con endsWith ---
// Recibe "texto" y "sufijo". Retorna true si el texto termina con el sufijo, false si no.
// Útil para validar extensiones de archivo (ej: "documento.md" termina con ".md").
function terminaCon(texto, sufijo) {
  return texto.endsWith(sufijo);
}

// --- Reto 10: Reemplazar sin mutar con replace ---
// Recibe "texto", "buscar" y "reemplazo". Retorna un NUEVO string donde la primera
// ocurrencia de "buscar" se sustituye por "reemplazo". El original no se modifica (inmutabilidad).
// Usa el método replace.
function reemplazarPrimera(texto, buscar, reemplazo) {
  return texto.replace(buscar, reemplazo);
}

export {
  contarCaracteres,
  extraerConSlice,
  extraerDesdeFinal,
  dividirEnPartes,
  limpiarEspacios,
  normalizarMinusculas,
  incluyeSubcadena,
  empiezaCon,
  terminaCon,
  reemplazarPrimera,
};
