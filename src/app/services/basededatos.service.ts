import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Rol } from './rol';
import { Usuario } from './usuario';
import { Tipo_P } from './tipo_p';
import { Producto } from './producto';
import { Venta } from './venta';
import { Detalle } from './detalle';


@Injectable({
  providedIn: 'root'
})
export class BasededatosService {

  public database!: SQLiteObject;

  tablaRol: string = "CREATE TABLE IF NOT EXISTS rol (id_rol INTEGER PRIMARY KEY autoincrement,nombre_rol TEXT NOT NULL);";
  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario (id_usuario INTEGER PRIMARY KEY autoincrement,nombre_usuario VARCHAR(25) NOT NULL,apellido_usuario VARCHAR(25) NOT NULL,telefono_usuario INTEGER NOT NULL,direccion_usuario VARCHAR(40) NOT NULL,correo_usuario VARCHAR(40) NOT NULL,clave_usuario VARCHAR(9) NOT NULL,rol_id_rol INTEGER NOT NULL,FOREIGN KEY (rol_id_rol) REFERENCES rol (id_rol));";
  tablaTipoP: string = "CREATE TABLE IF NOT EXISTS tipo_p (id_tipo INTEGER PRIMARY KEY autoincrement,nombre_tipo_p TEXT NOT NULL);";
  tablaProducto: string = "CREATE TABLE IF NOT EXISTS producto (cod_producto INTEGER PRIMARY KEY autoincrement,nombre_producto TEXT NOT NULL,f_emision DATE NOT NULL,f_vencimiento DATE NOT NULL,descripcion_p TEXT NOT NULL,foto_p BLOB NOT NULL,precio_p REAL NOT NULL,stock_p INTEGER NOT NULL,tipo_p_id_tipo INTEGER NOT NULL,FOREIGN KEY (tipo_p_id_tipo) REFERENCES tipo_p (id_tipo));";
  tablaVenta: string = "CREATE TABLE IF NOT EXISTS venta (id_venta INTEGER PRIMARY KEY autoincrement,f_venta DATE NOT NULL,f_entrega DATE NOT NULL,estado_venta TEXT NOT NULL,total_venta REAL NOT NULL,carrito_venta TEXT NOT NULL,usuario_id_usuario INTEGER NOT NULL,FOREIGN KEY (usuario_id_usuario) REFERENCES usuario (id_usuario));";
  tablaDetalle: string = "CREATE TABLE IF NOT EXISTS detalle (id_detalle INTEGER PRIMARY KEY autoincrement,cantidad_d INTEGER NOT NULL,subtotal_d REAL NOT NULL,venta_id_venta INTEGER NOT NULL, producto_cod_producto INTEGER NOT NULL,FOREIGN KEY (producto_cod_producto) REFERENCES producto (cod_producto),FOREIGN KEY (venta_id_venta) REFERENCES venta (id_venta));";

  registroRol: string = "INSERT or IGNORE INTO rol (nombre_rol) VALUES ('Administrador');";
  registroUsuario: string = "INSERT or IGNORE INTO usuario (id_usuario,nombre_usuario, apellido_usuario, telefono_usuario, direccion_usuario, correo_usuario, clave_usuario, rol_id_rol) VALUES (1,'Nombre del Usuario', 'Apellido del Usuario', 123456789, 'Dirección del Usuario', 'correo@example.com', 'clave123', 1);";
  registroTipo: string = "INSERT or IGNORE INTO tipo_p (nombre_tipo_p) VALUES ('Tipo de Producto');";
  registroProducto: string = "INSERT or IGNORE INTO producto (cod_producto,nombre_producto, f_emision, f_vencimiento, descripcion_p, foto_p, precio_p, stock_p, tipo_p_id_tipo) VALUES (1,'Producto 1', '24-09-2023', '24-10-2023', 'Descripción del Producto 1', 'imagen1.jpg', 19.99, 100, 1);";
  registroVenta: string = "INSERT INTO venta (f_venta, f_entrega, estado_venta, total_venta, carrito_venta, usuario_id_usuario) VALUES ('2023-09-24', '2023-09-30', 'Pendiente', 99.99, '1,2,3', 1);";
  registroDetalle: string = "INSERT INTO detalle (cantidad_d, subtotal_d, venta_id_venta, producto_cod_producto) VALUES (5, 49.95, 1, 1);";

  listaRol = new BehaviorSubject([]);
  listaUsuario = new BehaviorSubject([]);
  listaTipoP = new BehaviorSubject([]);
  listaProducto = new BehaviorSubject([]);
  listaVenta = new BehaviorSubject([]);
  listaDetalle = new BehaviorSubject([]);

  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private toastController: ToastController, private sqlite: SQLite, private platform: Platform, private alertController: AlertController) {
    this.crearBD();
  }

  dbState() {
    return this.isDBReady.asObservable();
  }

  fetchRol(): Observable<Rol[]> {
    return this.listaRol.asObservable();
  }

  fetchUsuario(): Observable<Usuario[]> {
    return this.listaUsuario.asObservable();
  }

  fetchTipo(): Observable<Tipo_P[]> {
    return this.listaTipoP.asObservable();
  }


  fetchProducto(): Observable<Producto[]> {
    return this.listaProducto.asObservable();
  }

  fetchVenta(): Observable<Venta[]> {
    return this.listaVenta.asObservable();
  }

  fetchDetalle(): Observable<Detalle[]> {
    return this.listaDetalle.asObservable();
  }


  buscarRol() {
    return this.database.executeSql('SELECT * FROM rol', []).then(res => {
      let items: Rol[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_rol: res.rows.item(i).id_rol,
            nombre_rol: res.rows.item(i).nombre_rol
          })
        }
      }
      this.listaRol.next(items as any);
    })
  }


  insertarRol(nombre_rol: any) {
    return this.database.executeSql('INSERT INTO rol (nombre_rol) VALUES (?)', [nombre_rol]).then(res => {
      this.buscarRol();
    }).catch(error => {
      console.error('Error al insertar en la tabla rol:', error);
    });
  }

  actualizarRol(id_rol: any, nombre_rol: any) {
    return this.database.executeSql('UPDATE rol SET nombre_rol = ? WHERE id_rol = ?', [nombre_rol, id_rol]).then(res => {
      this.buscarRol();
    }).catch(error => {
      console.error('Error al actualizar en la tabla rol:', error);
    });
  }

  borrarRol(id_rol: any) {
    return this.database.executeSql('DELETE FROM rol WHERE id_rol = ?', [id_rol]).then(res => {
      this.buscarRol();
    }).catch(error => {
      console.error('Error al eliminar de la tabla rol:', error);
    });
  }


  buscarUsuario() {
    return this.database.executeSql('SELECT * FROM usuario', []).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_usuario: res.rows.item(i).id_usuario,
            nombre_usuario: res.rows.item(i).nombre_usuario,
            apellido_usuario: res.rows.item(i).apellido_usuario,
            telefono_usuario: res.rows.item(i).telefono_usuario,
            direccion_usuario: res.rows.item(i).direccion_usuario,
            correo_usuario: res.rows.item(i).correo_usuario,
            clave_usuario: res.rows.item(i).clave_usuario,
            rol_id_rol: res.rows.item(i).rol_id_rol

          })
          //this.presentAlert("aaa: " + items[0].id_usuario);
        }
        //this.presentAlert("for");
      }
      //this.presentAlert("1");
      this.listaUsuario.next(items as any);
    })
  }

  insertarUsuario(nombre_usuario: any, apellido_usuario: any, telefono_usuario: any, direccion_usuario: any, correo_usuario: any, clave_usuario: any, rol_id_rol: any) {
    return this.database.executeSql('INSERT INTO usuario (nombre_usuario, apellido_usuario, telefono_usuario, direccion_usuario, correo_usuario, clave_usuario,rol_id_rol) VALUES (?, ?, ?, ?, ?, ?, ?)', [nombre_usuario, apellido_usuario, telefono_usuario, direccion_usuario, correo_usuario, clave_usuario, rol_id_rol]).then(res => {
      this.buscarUsuario();
    }).catch(error => {
      console.error('Error al insertar en la tabla usuario:', error);
    });
  }

  actualizarUsuario(id_usuario: any, nombre_usuario: any, apellido_usuario: any, telefono_usuario: any, direccion_usuario: any, correo_usuario: any, clave_usuario: any, rol_id_rol: any) {
    return this.database.executeSql('UPDATE usuario SET nombre_usuario = ?, apellido_usuario = ?, telefono_usuario = ?, direccion_usuario = ?, correo_usuario = ?, clave_usuario = ?, rol_id_rol = ? WHERE id_usuario = ?', [nombre_usuario, apellido_usuario, telefono_usuario, direccion_usuario, correo_usuario, clave_usuario, rol_id_rol, id_usuario]).then(res => {
      this.buscarUsuario();
    }).catch(error => {
      console.error('Error al actualizar en la tabla usuario:', error);
    });
  }

  eliminarUsuario(id_usuario: any) {
    return this.database.executeSql('DELETE FROM usuario WHERE id_usuario = ?', [id_usuario]).then(res => {
      this.buscarUsuario();
    }).catch(error => {
      console.error('Error al eliminar de la tabla usuario:', error);
    });
  }


  buscarTipoP() {
    return this.database.executeSql('SELECT * FROM tipo_p', []).then(res => {
      let items: Tipo_P[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_tipo: res.rows.item(i).id_tipo,
            nombre_tipo_p: res.rows.item(i).nombre_tipo_p
          });
        }
      }
      this.listaTipoP.next(items as any);
    });
  }

  insertarTipoP(nombre_tipo_p: any) {
    return this.database.executeSql('INSERT INTO tipo_p (nombre_tipo_p) VALUES (?)', [nombre_tipo_p]).then(res => {
      this.buscarTipoP();
    }).catch(error => {
      console.error('Error al insertar en la tabla Tipo Producto:', error);
    });
  }

  actualizarTipoP(id_tipo: any, nombre_tipo_p: any) {
    return this.database.executeSql('UPDATE tipo_p SET nombre_tipo_p = ?, WHERE id_tipo = ?', [nombre_tipo_p, id_tipo]).then(res => {
      this.buscarTipoP();
    })
  }

  borrarTipoP(id_tipo: any) {
    return this.database.executeSql('DELETE FROM tipo_p WHERE id_tipo = ?', [id_tipo]).then(res => {
      this.buscarTipoP();
    })
  }


  buscarProducto() {
    return this.database.executeSql('SELECT * FROM producto', []).then(res => {
      //variable para almacenar los registros
      let items: Producto[] = [];
      //validamos la cantidad de registros
      if (res.rows.length > 0) {
        //recorrer el resultado
        for (var i = 0; i < res.rows.length; i++) {
          //guardar dentro de mi variable
          items.push({
            cod_producto: res.rows.item(i).cod_producto,
            nombre_producto: res.rows.item(i).nombre_producto,
            f_emision: res.rows.item(i).f_emision,
            f_vencimiento: res.rows.item(i).f_vencimiento,
            descripcion_p: res.rows.item(i).descripcion_p,
            foto_p: res.rows.item(i).foto_p,
            precio_p: res.rows.item(i).precio_p,
            stock_p: res.rows.item(i).stock_p,
            tipo_p_id_tipo: res.rows.item(i).tipo_p_id_tipo



          })
        }
      }
      //actualizamos el observable
      this.listaProducto.next(items as any);


    })
  }

  insertarProducto(nombre_producto: any, f_emision: any, f_vencimiento: any, descripcion_p: any, foto_p: any, precio_p: any, stock_p: any, tipo_p_id_tipo: any) {
    return this.database.executeSql('INSERT INTO producto (nombre_producto,f_emision,f_vencimiento,descripcion_p, foto_p,precio_p,stock_p,tipo_p_id_tipo) VALUES (?,?,?,?,?,?,?,?)', [nombre_producto, f_emision, f_vencimiento, descripcion_p, foto_p, precio_p, stock_p, tipo_p_id_tipo]).then(res => {
      this.buscarProducto();
    })
  }

  actualizarProducto(cod_producto: any, nombre_producto: any, f_emision: any, f_vencimiento: any, descripcion_p: any, foto_p: any, precio_p: any, stock_p: any, tipo_p_id_tipo: any) {
    return this.database.executeSql('UPDATE producto SET nombre_producto = ?, f_emision = ?, f_vencimiento = ?, descripcion_p = ?, foto_p = ?, precio_p = ?, stock_p = ?, tipo_p_id_tipo = ? WHERE cod_producto = ?', [nombre_producto, f_emision, f_vencimiento, descripcion_p, foto_p, precio_p, stock_p, tipo_p_id_tipo, cod_producto]).then(res => {
      this.buscarProducto();
    }).catch(error => {
      console.error('Error al actualizar en la tabla producto:', error);
    });
  }

  borrarProducto(cod_producto: any) {
    return this.database.executeSql('DELETE FROM producto WHERE cod_producto = ?', [cod_producto]).then(res => {
      this.buscarProducto();
    })
  }

  private productos: Producto[] = [
    // ... tus datos de productos aquí
  ];

  getProductosById(id: string) {
    return {
      ...this.productos.filter(p => {
        return p.cod_producto === id
      })
    }
  }

  buscarProductoPorId(id: number): Promise<Producto | null> {
    return this.database.executeSql('SELECT * FROM producto WHERE cod_producto = ?', [id])
      .then(res => {
        if (res.rows.length > 0) {
          const producto = res.rows.item(0);
          return {
            cod_producto: producto.cod_producto,
            nombre_producto: producto.nombre_producto,
            f_emision: producto.f_emision,
            f_vencimiento: producto.f_vencimiento,
            descripcion_p: producto.descripcion_p,
            foto_p: producto.foto_p,
            precio_p: producto.precio_p,
            stock_p: producto.stock_p,
            tipo_p_id_tipo: producto.tipo_p_id_tipo
          };
        } else {
          return null;
        }
      })
      .catch(error => {
        console.error('Error al buscar producto por ID:', error);
        return null;
      });
  }


  obtenerImagenBase64PorId(id: number): Promise<string | null> {
    return this.sqlite.create({
      name: 'dbsupermercado2.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      return db.executeSql('SELECT foto_p FROM producto WHERE cod_producto = ?', [id])
        .then(data => {
          if (data.rows.length > 0) {
            // Convierte el BLOB a una cadena base64
            const blobData = data.rows.item(0).foto_p;
            const base64String = btoa(blobData);
            return 'data:image/jpeg;base64,' + base64String;
          } else {
            return null;
          }
        })
        .catch(error => {
          console.error('Error al obtener la imagen desde la base de datos:', error);
          return null;
        });
    });
  }



 // Modifica el método iniciarSesion para que devuelva el rol del usuario
iniciarSesion(correo: string, clave: string): Promise<string | null> {
  return this.database.executeSql('SELECT * FROM usuario WHERE correo_usuario = ? AND clave_usuario = ?', [correo, clave])
    .then(res => {
      if (res.rows.length > 0) {
        const usuario: Usuario = res.rows.item(0);
        return usuario.rol_id_rol; // Retorna el ID del rol
      } else {
        return null; // Retorna null si no se encuentra el usuario
      }
    })
    .catch(error => {
      console.error('Error al iniciar sesión:', error);
      return null; // Retorna null en caso de error
    });
}



  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'dbsupermercado2.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        this.crearTablas();
      }).catch(e => {
        this.presentToast("Error de crear BD: " + e);
      })
    })
  }


  async crearTablas() {
    try {
      await this.database.executeSql(this.tablaRol, []);
      //this.presentAlert("a");
      await this.database.executeSql(this.tablaUsuario, []);
      //this.presentAlert("b");
      await this.database.executeSql(this.tablaTipoP, []);
      //this.presentAlert("c");
      await this.database.executeSql(this.tablaProducto, []);
      //this.presentAlert("d");



      await this.database.executeSql(this.registroRol, []);
      //this.presentAlert("c");
      await this.database.executeSql(this.registroUsuario, []);
      //this.presentAlert("d");
      await this.database.executeSql(this.registroTipo, []);
      await this.database.executeSql(this.registroProducto, []);

      //this.presentToast("Tabla creada correctamente")
      this.isDBReady.next(true);

      this.buscarRol();
      this.buscarUsuario();
      this.buscarTipoP();
      this.buscarProducto();




    } catch (e) {
      this.presentToast("Error de crear Tablas: " + e);
    }
  }

  async presentToast(msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 3000,
      cssClass: 'custom-toast',
      buttons: [
        {
          text: 'Quitar',
          role: 'cancel',
        },
      ],
    });

    await toast.present();
  }

  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }




}
