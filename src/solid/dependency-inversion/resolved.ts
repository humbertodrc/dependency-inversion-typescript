interface StorageProvider {
	guardar(datos: string): void;
}

class ArchivoDeSistema implements StorageProvider {
	guardar(datos: string): void {
		// fileWriter.write()
		console.log(`se guardaron con exito los ${datos}`);
	}
}

class CloudProvider implements StorageProvider {
	guardar(datos: string): void {
		//googleCloud.save()
		console.log(`se guardaron con exito los ${datos}`);
	}
}

class Operador{
  guardarDatos(db: StorageProvider, datos: string): void{
    db.guardar(datos)
  }
}

export default Operador;

const googleCloud = new CloudProvider();
const operador = new Operador;

operador.guardarDatos(googleCloud, "hola mundo")