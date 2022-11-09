interface StorageProvider{
  guardarDatos(datos:string):void
}

class ArchivoDeSistema implements StorageProvider{
  guardarDatos(datos: string): void {
    // fileWriter.write()
    console.log(`se guardaron con exito los ${datos}`)
  }
}
class CloudProvider implements StorageProvider{
  guardarDatos(datos: string): void {
    //googleCloud.save()
    console.log(`se guardaron con exito los ${datos}`)
  }
}
class Operador{
  guardarDatos(db: StorageProvider, datos: string) {
    db.guardarDatos(datos)
  }
}
const saveSistema = new ArchivoDeSistema();

const googleCloud = new CloudProvider();

const operador = new Operador()

operador.guardarDatos(googleCloud, "hola mundo")

export default Operador;