import { Component, OnInit } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor() { }

  async ngOnInit() {
    await this.loadMap();
  }

  async loadMap() {
    const apiKey = 'AIzaSyBFuEEEgRcMQQ_UoK5di0fLqw1MqZC8UFQ'; // Reemplaza con tu clave de API de Google Maps
    const mapRef = document.getElementById('map');

    // Verifica que el elemento con ID 'map' exista
    if (mapRef) {
      try {
        const newMap = await GoogleMap.create({
          id: 'my-map', // Identificador único para esta instancia del mapa
          element: mapRef, // Referencia al elemento capacitor-google-map
          apiKey: apiKey, // Tu clave de API de Google Maps
          config: {
            center: {
              // La posición inicial a ser renderizada por el mapa
              lat: -33.36344,
              lng: -70.6807601,
            },
            zoom: 8, // El nivel de zoom inicial a ser renderizado por el mapa
          },
        });




        const markerId = await newMap.addMarker({
          coordinate: {
            lat: -33.42989813081174,
            lng: -70.62056584688855
          }
        });

      } catch (error) {
        console.error('Error al crear el mapa:', error);
      }
    } else {
      console.error('Elemento con ID "map" no encontrado en el DOM.');
    }


  }
}
