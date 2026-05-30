import indiaGate from "./assets/india-gate.jpg"
import jaipur from "./assets/jaipur.jpg"
import tajMahal from "./assets/tajmahal.jpg"
import varanasi from "./assets/varnasi.jpg"

export default [
    {
        id: 1,
        img: {
            src: indiaGate,
            alt: "India Gate"
        },
        title: "India Gate",
        country: "India",
        googleMapsLink: "https://maps.google.com/?q=India+Gate+New+Delhi",
        dates: "14 Jan, 2024 - 16 Jan, 2024",
        text: "India Gate is a historic war memorial located in New Delhi."
    },

    {
        id: 2,
        img: {
            src: jaipur,
            alt: "Jaipur Hawa Mahal"
        },
        title: "Jaipur",
        country: "India",
        googleMapsLink: "https://maps.google.com/?q=Jaipur+Rajasthan",
        dates: "22 Feb, 2024 - 25 Feb, 2024",
        text: "Jaipur is famous for its forts, palaces, and vibrant culture."
    },

    {
        id: 3,
        img: {
            src: tajMahal,
            alt: "Taj Mahal"
        },
        title: "Taj Mahal",
        country: "India",
        googleMapsLink: "https://maps.google.com/?q=Taj+Mahal+Agra",
        dates: "10 Mar, 2024 - 12 Mar, 2024",
        text: "The Taj Mahal is one of the Seven Wonders of the World."
    },

    {
        id: 4,
        img: {
            src: varanasi,
            alt: "Varanasi Ghats"
        },
        title: "Varanasi",
        country: "India",
        googleMapsLink: "https://maps.google.com/?q=Varanasi+Uttar+Pradesh",
        dates: "02 Apr, 2024 - 08 Apr, 2024",
        text: "Varanasi is one of the oldest and most spiritual cities in India."
    }
]