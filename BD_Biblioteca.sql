create database BD_Biblioteca;
use BD_Biblioteca;

create table Libros(
	id_libro int constraint pk_idL primary key,
	nombre varchar(50),
	autor varchar(50),
	editorial varchar(50),
	anoEdicion int,
	existencia int
);

create table Alumnos(
	id_alumno int constraint pk_idA primary key,
	apePat varchar(30),
	apeMat varchar(30),
	nombre varchar(30),
	edad int,
	sexo varchar(1),
	telefono varchar(10),
	correo varchar(50),
	direccion varchar(50)
);

create table Prestamos(
	id_prestamo int constraint pk_idP primary key,
	fechaDevolucion varchar(50),
	id_alumno int constraint fk_idPA foreign key references Alumnos,
	id_libro int constraint fk_idPL foreign key references Libros
);

create table Devoluciones(
	id_devolucion int constraint pk_idD primary key,
	fechaDevolucion varchar(50),
	id_alumno int constraint fk_idDA foreign key references Alumnos,
	id_libro int constraint fk_idDL foreign key references Libros
);

select * from Libros
select * from Alumnos
select * from Prestamos
select * from Devoluciones

select nombre, existencia
from Libros

create trigger Suma
on Prestamos
for insert
as
	declare @id int
	declare @fecha varchar(50)
	declare @alumno int
	declare @libro int
	select @id=id_prestamo,@fecha=fechaDevolucion,@alumno=id_alumno,@libro=id_libro
	from inserted
	update Libros
	set existencia-=1
	where id_libro=@libro


create trigger Resta
on Devoluciones
for insert
as
	declare @id int
	declare @fecha varchar(50)
	declare @alumno int
	declare @libro int
	select @id=id_devolucion,@fecha=fechaDevolucion,@alumno=id_alumno,@libro=id_libro
	from inserted
	update Libros
	set existencia+=1
	where id_libro=@libro