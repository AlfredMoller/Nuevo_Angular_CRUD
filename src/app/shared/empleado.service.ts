import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable({
  providedIn: "root"
})
export class EmpleadoService {
  formData: Empleado;
  constructor() {}
}
