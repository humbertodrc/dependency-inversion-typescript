class ArchivoDeSistema {
  guardarArchivo(datos: string): void {
    // fileWriter.write()
    console.log(`se guardaron con exito los ${datos}`)
  }
}

class CloudProvider {
  guardarEnNube(datos: string): void {
    //googleCloud.save()
    console.log(`se guardaron con exito los ${datos}`)
  }
}

class Operador {
  guardarDatos(
    db: typeof ArchivoDeSistema | typeof CloudProvider,
    datos: string
  ): void {
    if (db instanceof ArchivoDeSistema) {
      db.guardarArchivo(datos);
    }

    if (db instanceof CloudProvider) {
      db.guardarEnNube(datos);
    }
  }
}

export default Operador;