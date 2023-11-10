import React from "react";

export default function InvoicesPage() {
    // Datos de ejemplo
    const data = [
        {
            id: 1,
            image: "https://via.placeholder.com/150",
            title: "Titulo 1",
            subtitle: "Subtitulo 1",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150",
            title: "Titulo 2",
            subtitle: "Subtitulo 2",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150",
            title: "Titulo 2",
            subtitle: "Subtitulo 2",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150",
            title: "Titulo 2",
            subtitle: "Subtitulo 2",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150",
            title: "Titulo 2",
            subtitle: "Subtitulo 2",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150",
            title: "Titulo 2",
            subtitle: "Subtitulo 2",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150",
            title: "Titulo 2",
            subtitle: "Subtitulo 2",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150",
            title: "Titulo 2",
            subtitle: "Subtitulo 2",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150",
            title: "Titulo 2",
            subtitle: "Subtitulo 2",
        },
        {
            id: 2,
            image: "https://via.placeholder.com/150",
            title: "Titulo 2",
            subtitle: "Subtitulo 2",
        },
        // Puedes agregar más datos aquí
    ];
    const title = "pablo";
    // Función para manejar el clic en el botón "Ver más"
    const handleMoreClick = () => {
        console.log(`Ver más sobre: ${title}`);
    };

    return (
        <div className="flex flex-wrap justify-center">
            {data.map(({ id, image, title, subtitle }) => (
                <div
                    key={id}
                    
                    className="max-w-xl rounded overflow-hidden shadow-lg m-4"
                >
                    <img className="w-full" src={image} alt={title} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base">{subtitle}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button
                            //   onClick={() => handleMoreClick()}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Ver más
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
