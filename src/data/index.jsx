import Blockquote from "../components/Blockquote";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";

export const tabsHeader = [
	{ id: 1, itemName: "Recientes", active: true },
];

export const units = [
	{ id: 1, name: "Aplicaciones Distribuidas - Una visión global" },
	{ id: 2, name: "El paradigma Cliente/Servidor" },
	{ id: 3, name: "Sockets" },
	{ id: 4, name: "Programación distribuida" },
	{ id: 5, name: "Hilos" },
	{ id: 6, name: "Arquitectura de aplicaciones" },
];

export const posts = [
	{
		id: 1,
		date: "Junio 31, 2022",
		title: "Introducción a la computación distribuidas",
		weekNumber: 2,
		unitsNumber: 1,
		description:
			"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
		content: (
			<>
				<Image src="36-min.jpg" />
				<Paragraph dropcap={true}>
					Aliquam fringilla, sapien eget scelerisque placerat, lorem libero
					cursus lorem, sed sodales lorem libero eu sapien. Nunc mattis feugiat
					justo vel faucibus. Nulla consequat feugiat malesuada. Ut justo nulla,{" "}
					<strong>facilisis vel molestie id</strong>, dictum ut arcu. Nunc ipsum
					nulla, eleifend non blandit quis, luctus quis orci. Cras blandit
					turpis mattis nulla ultrices interdum. Mauris pretium pretium dictum.
					Nunc commodo, felis sed dictum bibendum, risus justo iaculis dui, nec
					euismod orci sem eget neque. Donec in metus metus, vitae eleifend
					lorem. Ut vestibulum gravida venenatis. Vestibulum ante ipsum primis
					in faucibus orci luctus et ultrices posuere cubilia Curae;
					Pellentesque suscipit tincidunt magna non mollis. Fusce tempus
					tincidunt nisi, in luctus elit pellentesque quis. Sed velit mi,
					ullamcorper ut tempor ut, mattis eu lacus. Morbi rhoncus aliquet
					tellus, id accumsan enim sollicitudin vitae.
				</Paragraph>
				<Blockquote authorName="Simón Bolivar" right={true}>
					<Paragraph>Si la naturaleza se opone, lucharemos contra ella</Paragraph>
				</Blockquote>
			</>
		), // tiene que ser un componente usando Paragraph, Blockquote, etc...
		image: "work-table.jpg",
	},
	{
		id: 2,
		date: "Junio 03, 2022",
		title: "Paradigmas de la computación distribuida",
		weekNumber: 2,
		unitsNumber: 1,
		description:
			"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
		content: "",
		image: "work-table.jpg",
	},
	{
		id: 3,
		date: "Junio 03, 2022",
		title: "El paradigma Cliente/Servidor",
		weekNumber: 3,
		unitsNumber: 2,
		description:
			"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
		content: "",
		image: "work-table.jpg",
	}
];
