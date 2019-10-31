using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Examen3_Rec.Controllers
{
    public class OperacionesController : Controller
    {
        BD_BibliotecaEntities1 objModelo = new BD_BibliotecaEntities1();
        [HttpPost]
        public JsonResult AgregarLibros(Libros l)
        {
            objModelo.Libros.Add(l);
            objModelo.SaveChanges();
            return Json("Insertado");
        }

        [HttpPost]
        public JsonResult AgregarAlumnos(Alumnos a)
        {
            objModelo.Alumnos.Add(a);
            objModelo.SaveChanges();
            return Json("Insertado");
        }

        public JsonResult AgregarPrestamos(Prestamos p)
        {
            objModelo.Prestamos.Add(p);
            objModelo.SaveChanges();
            return Json("Insertado");
        }

        public JsonResult AgregarDevoluciones(Devoluciones d)
        {
            objModelo.Devoluciones.Add(d);
            objModelo.SaveChanges();
            return Json("Insertado");
        }

        public JsonResult ConsultarExistencias()
        {
            objModelo.Configuration.ProxyCreationEnabled = false;
            return Json(objModelo.Libros.Select(x => new {
                Nombre = x.nombre,
                Existencia = x.existencia
            }).ToList());
        }

        public JsonResult ObtenerIDLibros()
        {
            objModelo.Configuration.ProxyCreationEnabled = false;
            return Json(objModelo.Libros.ToList());
        }

        public JsonResult ObtenerIDAlumnos() {
            objModelo.Configuration.ProxyCreationEnabled = false;
            return Json(objModelo.Alumnos.ToList());
        }
    }
}