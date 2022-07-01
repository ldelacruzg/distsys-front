import Blockquote from "../components/Blockquote";
import Image from "../components/Image";
import Paragraph from "../components/Paragraph";
import Tabs from "../components/Tabs";

export const tabsHeader = [{ id: 1, itemName: "Recientes", active: true }];

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
		date: "Junio 07, 2022",
		title: "El paradigma Cliente/Servidor",
		weekNumber: 3,
		unitsNumber: 2,
		description:
			"Para la explicación de este paradigma debemos tener en claro la definición de lo que se refiere a cliente y lo que es servidor.",
		content: (
			<>
				<Image src="image-3.png" right={true} />
				<Paragraph>
					<ul>
						<li>
							<strong>Cliente:</strong> Es el que inicia un requerimiento
							de servicio. El requerimiento inicial puede convertirse en
							múltiples requerimientos de trabajo a través de redes LAN o WAN.
							La ubicación de los datos o de las aplicaciones es totalmente
							transparente para el cliente.
						</li>
						<li>
							<strong>Servidor:</strong> Es cualquier recurso de cómputo dedicado a responder a los requerimientos del cliente. Los servidores pueden estar conectados a los clientes a través de redes LANs o WANs, para proveer de múltiples servicios a los clientes y ciudadanos tales como impresión, acceso a bases de datos, fax, procesamiento de imágenes, etc
						</li>
					</ul>
				</Paragraph>
				<Paragraph>
					Una vez teniendo la definición de los dos términos, podemos especificar la definición del modelo Cliente/Servidor: El modelo Cliente/Servidor es un modelo de aplicación distribuida en el que las tareas se reparten entre los proveedores de recursos o servicios, llamados servidores, y los demandantes, llamados clientes. Las aplicaciones (Clientes) realizan peticiones a una o varias aplicaciones (Servidores), que deben encontrarse en ejecución para atender dichas demandas.
				</Paragraph>
				<Paragraph>
					El modelo Cliente/Servidor permite diversificar el trabajo que realiza cada aplicación, de forma que los Clientes no se sobrecarguen, cosa que ocurriría si ellos mismos desempeñan las funciones que le son proporcionadas de forma directa y transparente. En esta arquitectura la capacidad de proceso está repartida entre los clientes y los servidores, aunque son más importantes las ventajas de tipo organizativo debidas a la centralización de la gestión de la información y la separación de responsabilidades, lo que facilita y clarifica el diseño del sistema. Tanto el Cliente como el Servidor son entidades abstractas que pueden residir en la misma máquina o en máquinas diferentes
				</Paragraph>
			</>
		),
		image: "work-table.jpg",
	},
	{
		id: 2,
		date: "Junio 10, 2022",
		title: "Modelo Cliente/Servidor de 2 capas",
		weekNumber: 3,
		unitsNumber: 2,
		description:
			"Uno de los objetivos de las aplicaciones de 2 capas es separar la lógica de acceso a los datos de lo que es la interfaz de usuario y trasladarla al servidor.",
		content: (
			<>
				<Paragraph dropcap={true}>
					Uno de los objetivos de las aplicaciones de 2 capas es separar la lógica de acceso a los datos de lo que es la interfaz de usuario y trasladarla al servidor. Habitualmente, se implementan servicios como procedimientos almacenados en el sistema gestor de datos, con esto se pretende reducir la carga de los clientes y centralizar las operaciones comunes de acceso a los datos.
				</Paragraph>
				<Paragraph>El Sistema Gestor de Datos también suele incorporar la funcionalidad necesaria para trabajar en entornos multiusuarios. En este modelo intervienen únicamente dos entidades:</Paragraph>
				<ul>
					<li>El cliente</li>
					<li>El servidor</li>
				</ul>

				<Image src="image-4.jpg" size={400} />
				<Paragraph>
					<strong>El papel de Cliente</strong> lo desempeña la aplicación final del usuario, que implementará todas las funciones correspondientes a la lógica de presentación, más algunas de las funciones relacionadas con la lógica del negocio, como pueden ser determinadas validaciones de datos y condiciones de recuperación.
				</Paragraph>
				<Paragraph>
					<strong>El papel de Servidor</strong> lo desempeña el propio SGBD, el cual se ocupará de todas las funciones correspondientes a la lógica de datos, más las restantes funciones correspondientes a la lógica del negocio, mediante la codificación de Procedimientos Almacenados.
				</Paragraph>
				<Paragraph>
					Este es el modelo Cliente/Servidor más sencillo y más utilizado habitualmente. En la mayor parte de los casos, el desarrollador de una aplicación de este tipo, desarrolla únicamente la aplicación Cliente y utiliza al propio motor de BD como aplicación servidora, de modo que no se codifica la aplicación Servidora propiamente dicha.
				</Paragraph>
			</>
		),
		image: "work-table.jpg",
	},
	{
		id: 3,
		date: "Junio 10, 2022",
		title: "Modelo Cliente/Servidor multicapa",
		weekNumber: 3,
		unitsNumber: 2,
		description:
			"La arquitectura Cliente/Servidor genérica tiene dos tipos de nodos en la red: clientes y servidores. Consecuentemente, estas arquitecturas genéricas se refieren a veces como arquitecturas de dos niveles o dos capas.",
		content:
			<>
				<Paragraph>
					La arquitectura Cliente/Servidor genérica tiene dos tipos de nodos en la red: clientes y servidores. Consecuentemente, estas arquitecturas genéricas se refieren a veces como arquitecturas de dos niveles o dos capas
				</Paragraph>
				<Paragraph>Algunas redes disponen de tres tipos de nodos: </Paragraph>
				<ul>
					<li>Clientes que interactúan con los usuarios finales.</li>
					<li>Servidores de aplicación que procesan los datos para los clientes.</li>
					<li>Servidores de la base de datos que almacenan los datos para los servidores de aplicación.</li>
				</ul>
				<Paragraph>
					Esta configuración se llama una arquitectura de tres capas.
				</Paragraph>
				<Image src="image-5.gif" size={400} />
				<Paragraph>
					Este modelo aporta una flexibilidad adicional en la construcción de aplicaciones ya que cuando la construcción aumenta su complejidad, influye tanto en el modelo de aplicación como en la distribución de los servicios. El modelo conceptual de una aplicación establece sus definiciones, reglas y relaciones, así como su estructura.
				</Paragraph>
				<Paragraph>
					Hay partes de la lógica que residen en el cliente, normalmente las que se refieren a la interfaz de usuario, mientras que las del negocio y de datos suelen residir en los servidores, que proporcionan los mecanismos necesarios para el trabajo en entornos multiusuarios. En este tipo de modelo se aplica íntegramente el modelo de servicios ya que, cada una de las capas se corresponde con cada una de las lógicas descritas
				</Paragraph>
			</>,
		image: "work-table.jpg",
	},
	{
		id: 4,
		date: "Junio 21, 2022",
		title: "Sockets en java",
		weekNumber: 5,
		unitsNumber: 3,
		description:
			"El sistema de Entrada/Salida de Unix sigue el paradigma que normalmente se designa como Abrir-Leer-Escribir-Cerrar.",
		content:
			<>
				<Paragraph>
					El sistema de Entrada/Salida de Unix sigue el paradigma que normalmente se designa como Abrir-Leer-Escribir-Cerrar. Antes de que un proceso de usuario pueda realizar operaciones de entrada/salida, debe hacer una llamada a Abrir (open) para indicar, y obtener los permisos del fichero o dispositivo que se desea utilizar.
				</Paragraph>
				<Paragraph>
					Una vez que el fichero o dispositivo se encuentra abierto, el proceso de usuario realiza una o varias llamadas a Leer o a Escribir, para la lectura y escritura de los datos.
				</Paragraph>
				<Image src="image-6.gif" size={400} />
				<Paragraph>
					El proceso de lectura toma los datos desde el objeto y los transfiere al proceso de usuario, mientras que el de escritura los transfiere desde el proceso de usuario al objeto. Una vez concluido el intercambio de información, el proceso de usuario llamará a Cerrar para informar al sistema operativo que ha finalizado la utilización del fichero o dispositivo.
				</Paragraph>
				<Paragraph>
					En Unix, un proceso tiene un conjunto de descriptores de entrada/salida desde donde leer y por donde escribir. Estos descriptores pueden estar referidos a ficheros, dispositivos, o canales de comunicaciones sockets.
				</Paragraph>
				<Paragraph>
					En conclusión, el ciclo de vida de un descriptor, aplicado a un canal de comunicación, está determinado por tres fases:
				</Paragraph>
				<ul>
					<li>Creación, apertura del socket</li>
					<li>Lectura y Escritura, recepción y envío de datos por el socket</li>
					<li>Destrucción, cierre del socket</li>
				</ul>
			</>,
		image: "work-table.jpg",
	},
	{
		id: 5,
		date: "Junio 21, 2022",
		title: "Clases para las comunicaciones de red en java y java.net",
		weekNumber: 5,
		unitsNumber: 3,
		description:
			"TCP proporciona un canal de comunicación fiable punto a punto, lo que utilizan para comunicarse las aplicaciones cliente-servidor en Internet.",
		content:
			<>
				<Paragraph>
					TCP proporciona un canal de comunicación fiable punto a punto, lo que utilizan para comunicarse las aplicaciones cliente-servidor en Internet. Las clases Socket y ServerSocket del paquete java.net proporcionan un canal de comunicación independiente del sistema utilizando TCP, cada una de las cuales implementa el lado del cliente y el servidor respectivamente.
				</Paragraph>
				<Paragraph>
					Así el paquete java.net proporciona, entre otras, las siguientes clases:
				</Paragraph>
				<ul>
					<li><strong>Socket:</strong> Implementa un extremo de la conexión TCP</li>
					<li><strong>ServerSocket:</strong> Se encarga de implementar el extremo Servidor de la conexión en la que se esperarán las conexiones de los clientes</li>
					<li><strong>DatagramSocket:</strong> Implementa tanto el servidor como el cliente cuando se utiliza UDP</li>
					<li><strong>DatagramPacket:</strong> Implementa un datagram packet, que se utiliza para la creación de servicios de reparto de paquetes sin conexión</li>
					<li><strong>InetAddress:</strong> Se encarga de implementar la dirección IP</li>
				</ul>
				<h3>DatagramSocket</h3>
				<Paragraph>
					Es el más simple, lo único que se hace es enviar los datos, mediante la creación de un socket y utilizando los métodos de envío y recepción apropiados. Se trata de un servicio de transporte sin conexión, son más eficientes que TCP, pero no está garantizada la fiabilidad: los datos se envían y reciben en paquetes, cuya entrega no está garantizada; los paquetes pueden ser duplicados, perdidos o llegar en un orden diferente al que se envió
				</Paragraph>
				<Paragraph>
					El protocolo de comunicaciones con datagramas UDP, es un protocolo sin conexión, es decir, cada vez que se envíen datagramas es necesario enviar el descriptor del socket local y la dirección del socket que debe recibir el datagrama. Como se puede ver, hay que enviar datos adicionales cada vez que se realice una comunicación
				</Paragraph>
				<h3>DatagramPacket</h3>
				<Paragraph>Un DatagramSocket envía y recibe los paquetes y un DatagramPacket contiene la información relevante. Cuando se desea recibir un datagrama, éste deberá almacenarse bien en un búfer o un array de bytes. Y cuando preparamos un datagrama para ser enviado, el DatagramPacket no sólo debe tener la información, sino que además debe tener la dirección IP y el puerto de destino, que puede coincidir con un puerto TCP</Paragraph>
			</>,
		image: "work-table.jpg",
	},
	{
		id: 6,
		date: "Junio 10, 2022",
		title: "WebSockets",
		weekNumber: 6,
		unitsNumber: 3,
		description:
			"Un WebSocket es un vínculo entre dos puntos con un servidor y un navegador, de tal forma que ambas partes puedan enviar y recibir datos sin necesidad de una petición Ajax y que se mantiene activo por más tiempo.",
		content:
			<>
				<Image src="image-7.png" size={450} />
				<Paragraph>
					Un WebSocket es un vínculo entre dos puntos con un servidor y un navegador, de tal forma que ambas partes puedan enviar y recibir datos sin necesidad de una petición Ajax y que se mantiene activo por más tiempo. En un navegador que soporte HTML5 permite una comunicación constante hacia o desde un servidor web sin la necesidad de cargar una nueva página.
				</Paragraph>
				<Paragraph>
					Los WebSockets son esencialmente para las aplicaciones web que crean contenido en tiempo real, como por ejemplos los juegos multijugador, bolsas de comercio, herramientas colaborativas o aplicaciones de subastas.
				</Paragraph>
				<Paragraph>
					La implementación de los WebSockets está dirigida a las aplicaciones en tiempo real, aquellas en las que el navegador o cliente está al tanto de todo lo que sucede en la aplicación en el instante en el que sucede. Algunos ejemplos son: juegos multijugador, aplicaciones de monitorización, chats, herramientas de trabajo colaborativo, etc
				</Paragraph>
				<h3>Características de los web sockets</h3>
				<ul>
					<li>Crean una comunicación o enlace entre las páginas con un servidor remoto</li>
					<li>Pasa a través de proxies, routers y seguridad de firewalls</li>
					<li>Comparte el mismo puerto que el de HTTP</li>
					<li>Reduce de forma drástica el OverHead o uso innecesario de ancho de banda, que es gracias a la información adicional que tiene que viajar además de los datos que se requieren</li>
					<li>La conexión se crea a través del Upgrade o la actualización del protocolo HTTP al protocolo WebSocket usando la misma conexión</li>
					<li>Utiliza una única conexión TCP para las dos direcciones</li>
				</ul>
				<h3>Ventajas de los WebSockets</h3>
				<ul>
					<li>WebSockets brinda un enlace punto a punto entre el navegador y el servidor</li>
					<li>La parte del servidor puede enviar datos a todos los clientes que se encuentren conectados a ese socket, siempre y cuando exista una conexión abierta del socket</li>
					<li>Los retardos mínimos o imperceptibles para el ser humano en las comunicaciones es otro de los beneficios de utilizar WebSockets</li>
					<li>Los datos que se transfieren se logran minimizar excesivamente, permitiendo así transmitir lo más necesario</li>
					<li>La implementación de WebSocket es capaz de repartir mil millones de mensajes por hora</li>
					<li>La agrupación de servidores WebSocket ofrece escalabilidad, alta disponibilidad, actualizaciones sucesivas, así como el apoyo para las topologías distribuidas geográficamente</li>
					<li>El protocolo WebSocket provee una conexión estable entre cliente y servidor</li>
				</ul>
				<h3>Requerimientos del protocolo WebSocket</h3>
				<ul>
					<li>El protocolo de WebSocket debe ejecutarse por encima de la capa de transporte</li>
					<li>El protocolo de WebSocket tiene que estar en la capacidad de fragmentar los mensajes en frames de un tamaño especificado</li>
					<li>Se debe poder enviar un mensaje, aunque su longitud desconozca o sobrepase un límite preestablecido</li>
					<li>La codificación debe ser UTF-8 para los protocolos en texto plano</li>
					<li>El protocolo debe diferenciar entre binarios y basados en texto plano</li>
					<li>El protocolo tiene que permitir responder a solicitudes tanto de WebSocket como de HTTP en el mismo puerto</li>
				</ul>
				<h3>Requerimientos de los clientes</h3>
				<ul>
					<li>El cliente o navegador tiene que ser capaz de definir una conexión WebSocket mediante una negociación bien establecida</li>
					<li>Se debe tener un método que permita cerrar la conexión</li>
					<li>El protocolo debe estar preparado para imprevistos de cierres de conexión de todo tipo</li>
					<li>El cliente debe poder especificar al servidor un subprotocolo específico durante el intercambio</li>
					<li>Tiene que estar preparado para enviar y recibir tanto datos binarios como en texto plano</li>
				</ul>
				<h3>Requerimientos para los servidores</h3>
				<ul>
					<li>El servidor que recibe confirma peticiones de WebSocket por parte del navegador necesita utilizar una negociación bien definida</li>
					<li>Necesita enviar y recibir tanto datos binarios como en texto plano</li>
				</ul>
			</>,
		image: "work-table.jpg",
	}
];
