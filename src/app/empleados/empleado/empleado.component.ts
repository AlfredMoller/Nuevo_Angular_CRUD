import { Component, OnInit } from "@angular/core";
import { EmpleadoService } from "../../shared/empleado.service";
import { NgForm } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-empleado",
  templateUrl: "./empleado.component.html",
  styleUrls: ["./empleado.component.css"]
})
export class EmpleadoComponent implements OnInit {
  constructor(
    private service: EmpleadoService,
    private firestore: AngularFirestore,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) form.resetForm();
    this.service.formData = {
      id: null,
      nombreCompleto: "",
      puesto: "",
      cedula: "",
      telefono: ""
    };
  }

  onSubmit(form: NgForm) {
    let data = form.value;
    this.firestore.collection("empleados").add(data);
    this.resetForm(form);
    this.toastr.success("Registrado Añadido", "Exito!!!");
  }
}
