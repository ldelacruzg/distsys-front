import Blockquote from "../components/Blockquote";
import Paragraph from "../components/Paragraph";

export const posts = [
	{
		id: "1",
		date: "Junio 02, 2022",
		title: "POST TITLE",
		weekNumber: 5,
		description:
			"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
		content: (
			<>
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
				<Blockquote text="Contenido" cite="Luis De La Cruz" />
			</>
		), // tiene que ser un componente usando Paragraph, Blockquote, etc...
		image: "work-table.jpg", // de momento no sirve para el detalle del post
	},
];
