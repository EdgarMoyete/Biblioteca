/// <reference path="jquery-1.9.1.js" />
$(document).ready(function () {
    Existencias();
    obtenerIDLibros();
    obtenerIDAlumnos();
    obtenerIDLibros2();
    obtenerIDAlumnos2();
    $("#btnAgregarLibros").click(function () {
        var l = {
            id_libro: $("#txtIDLibro").val(),
            nombre: $("#txtNombreLibro").val(),
            autor: $("#txtAutor").val(),
            editorial: $("#txtEditorial").val(),
            anoEdicion: $("#txtAnoEdicion").val(),
            existencia: $("#txtExistencia").val()
        }
        $.ajax({
            type: "POST",
            url: "Operaciones/AgregarLibros",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: "{l:" + JSON.stringify(l) + "}",
            success: function (res) {
                alert(res);
            },
            error: function (e) {
                alert(e.error);
            }
        });
    });

    $("#btnAgregarAlumnos").click(function () {
        var a = {
            id_alumno: $("#txtIDAlumno").val(),
            apePat: $("#txtApePat").val(),
            apeMat: $("#txtApeMat").val(),
            nombre: $("#txtNombreAlumno").val(),
            edad: $("#txtEdad").val(),
            sexo: $("#cmbSexo").val(),
            telefono: $("#txtTelefono").val(),
            correo: $("#txtCorreo").val(),
            direccion: $("#txtDireccion").val()
        }
        $.ajax({
            type: "POST",
            url: "Operaciones/AgregarAlumnos",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: "{a:" + JSON.stringify(a) + "}",
            success: function (res) {
                alert(res);
            },
            error: function (e) {
                alert(e.error);
            }
        });
    });

    $("#btnAgregarPrestamos").click(function () {
        var p = {
            id_prestamo: $("#txtIDPrestamo").val(),
            fechaDevolucion: $("#dtpFechaPre").val(),
            id_alumno: $("#txtIDAluP").val(),
            id_libro: $("#txtIDLibP").val()
        }
        $.ajax({
            type: "POST",
            url: "Operaciones/AgregarPrestamos",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: "{p:" + JSON.stringify(p) + "}",
            success: function (res) {
                alert(res);
            },
            error: function (e) {
                alert(e.error);
            }
        });
    });

    $("#btnAgregarDevoluciones").click(function () {
        var d = {
            id_devolucion: $("#txtIDDevolucion").val(),
            fechaDevolucion: $("#dtpFechaDev").val(),
            id_alumno: $("#txtIDAluD").val(),
            id_libro: $("#txtIDLibD").val()
        }
        $.ajax({
            type: "POST",
            url: "Operaciones/AgregarDevoluciones",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: "{d:" + JSON.stringify(d) + "}",
            success: function (res) {
                alert(res);
            },
            error: function (e) {
                alert(e.error);
            }
        });
    });

    $("#btnLimpiarLibros").click(function () {
        $("#txtIDLibro").val("");
        $("#txtNombreLibro").val("");
        $("#txtAutor").val("");
        $("#txtEditorial").val("");
        $("#txtAnoEdicion").val("");
        $("#txtExistencia").val("");
    });

    $("#btnLimpiarAlumnos").click(function () {
        $("#txtIDAlumno").val("");
        $("#txtApePat").val("");
        $("#txtApeMat").val("");
        $("#txtNombreAlumno").val("");
        $("#txtEdad").val("");
        $("#cmbSexo").val("");
        $("#txtTelefono").val("");
        $("#txtCorreo").val("");
        $("#txtDireccion").val("");
    });

    $("#btnLimpiarPrestamos").click(function () {
        $("#txtIDPrestamo").val("");
        $("#dtpFechaPre").val("");
        $("#txtIDAluP").val("");
        $("#txtIDLibP").val("");
    });

    $("#btnLimpiarDevoluciones").click(function () {
        $("#txtIDDevolucion").empty();
        $("#dtpFechaDev").empty();
        $("#txtIDAluD").val("");
        $("#txtIDLibD").val("");
    });


});

function Existencias() {
    $.ajax({
        type: "POST",
        url: "Operaciones/ConsultarExistencias",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        data: "",
        success: function (res) {
            var cadena = "";
            $.each(res, function (index, val) {
                cadena +=
                    "<a href='#' class='list-group-item'>"
                    + "<span class='glyphicon glyphicon-book'></span>"
                    + val.Nombre
                    + "<span class='badge'>" +
                    val.Existencia
                    + "</span>" +
	                "</a>";
            });
            cadena += "";
            $("#existencia").append(cadena);
        },
        error: function (er) {
            alert(er.error);
        }
    });
}

function obtenerIDAlumnos() {
    $.ajax({
        type: "POST",
        url: "Operaciones/ObtenerIDAlumnos",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        data: "",
        success: function (res) {
            var cadena = "";
            for (var i = 0; i < res.length; i++) {
                cadena += "<option value='" + res[i].id_alumno + "'>" + res[i].nombre + "</option>";
            }
            $("#txtIDAluP").append(cadena);
        },
        error: function (er) {
            alert(er.error);
        }
    });
}

function obtenerIDLibros() {
    $.ajax({
        type: "POST",
        url: "Operaciones/ObtenerIDLibros",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        data: "",
        success: function (res) {
            var cadena = "";
            for (var i = 0; i < res.length; i++) {
                cadena += "<option value='" + res[i].id_libro + "'>" + res[i].nombre + "</option>";
            }
            $("#txtIDLibP").append(cadena);
        },
        error: function (er) {
            alert(er.error);
        }
    });
}

function obtenerIDAlumnos2() {
    $.ajax({
        type: "POST",
        url: "Operaciones/ObtenerIDAlumnos",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        data: "",
        success: function (res) {
            var cadena = "";
            for (var i = 0; i < res.length; i++) {
                cadena += "<option value='" + res[i].id_alumno + "'>" + res[i].nombre + "</option>";
            }
            $("#txtIDAluD").append(cadena);
        },
        error: function (er) {
            alert(er.error);
        }
    });
}

function obtenerIDLibros2() {
    $.ajax({
        type: "POST",
        url: "Operaciones/ObtenerIDLibros",
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        data: "",
        success: function (res) {
            var cadena = "";
            for (var i = 0; i < res.length; i++) {
                cadena += "<option value='" + res[i].id_libro + "'>" + res[i].nombre + "</option>";
            }
            $("#txtIDLibD").append(cadena);
        },
        error: function (er) {
            alert(er.error);
        }
    });
}