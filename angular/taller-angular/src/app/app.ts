import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Tutoria {
  id: number;
  materia: string;
  estado: string; // Cambiado de 'completada' a 'estado' para que coincida con el HTML
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tutorias = signal<Tutoria[]>([
    { id: 1, materia: 'Bases de Datos', estado: 'Confirmada' },
    { id: 2, materia: 'Ingeniería de Software', estado: 'Pendiente' },
    { id: 3, materia: 'Aplicaciones Web', estado: 'Confirmada' }
  ]);

  agregar(nombreMateria: string) {
    if (!nombreMateria.trim()) return;
    const nuevaTutoria: Tutoria = {
      id: Date.now(),
      materia: nombreMateria,
      estado: 'Pendiente' // Estado inicial por defecto
    };
    this.tutorias.update(lista => [...lista, nuevaTutoria]);
  }

  cambiarEstado(id: number) {
    this.tutorias.update(lista =>
      lista.map(t => {
        if (t.id === id) {
          // Alterna el estado entre Pendiente y Confirmada
          const nuevoEstado = t.estado === 'Pendiente' ? 'Confirmada' : 'Pendiente';
          return { ...t, estado: nuevoEstado };
        }
        return t;
      })
    );
  }
}