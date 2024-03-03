import a from './1.jpg'
import b from './2.jpg'
import c from './3.jpg'
import d from './4.jpg'
import e from './5.jpg'
import f from './6.jpg'
import g from './7.jpg'

import i from './9.jpg'
import j from './10.jpg'
import k from './11.jpg'
import w1 from './w1.jpg'
import w2 from './w2.jpg'
import w3 from './w3.jpg'
import w4 from './w4.jpg'
import w5 from './w5.jpg'
import w6 from './w6.jpg'
import w7 from './w7.jpg'
import w8 from './w8.jpg'
import w9 from './w9.jpg'
import w10 from './w10.jpg'
import w11 from './w11.jpg'
const menWatches = [
    {
        id: 1,
        brand: "Rolex",
        model: "Submariner",
        price: 10000,
        movement: "Automatic",
        case_material: "Stainless Steel",
        water_resistance: "300 meters",
        image_url : a
    },
    {
        id: 2,
        brand: "Omega",
        model: "Speedmaster Professional",
        price: 5000,
        movement: "Manual-Winding",
        case_material: "Stainless Steel",
        water_resistance: "50 meters",
        image_url : b
    },
    {
        id: 3,
        brand: "Tag Heuer",
        model: "Carrera",
        price: 3000,
        movement: "Automatic",
        case_material: "Steel",
        water_resistance: "100 meters",
        image_url : c 
    },
    // Add more watches as needed
    {
        id: 4,
        brand: "Seiko",
        model: "Presage",
        price: 400,
        movement: "Automatic",
        case_material: "Stainless Steel",
        water_resistance: "50 meters",
        image_url : d
    },
    {
        id: 5,
        brand: "Citizen",
        model: "Eco-Drive",
        price: 300,
        movement: "Solar",
        case_material: "Titanium",
        water_resistance: "100 meters",
       image_url : e
    },
    {
        id: 6,
        brand: "Hamilton",
        model: "Khaki Field",
        price: 700,
        movement: "Automatic",
        case_material: "Stainless Steel",
        water_resistance: "100 meters",
        image_url :f 
    },
    {
        id: 7,
        brand: "Tissot",
        model: "PRC 200",
        price: 500,
        movement: "Quartz",
        case_material: "Stainless Steel",
        water_resistance: "200 meters",
        image_url : g
    },
    {
        id: 8,
        brand: "Bulova",
        model: "Precisionist",
        price: 600,
        movement: "Quartz",
        case_material: "Stainless Steel",
        water_resistance: "300 meters",
        image_url :i 
    },
    {
        id: 9,
        brand: "Citizen",
        model: "Promaster Diver",
        price: 350,
        movement: "Eco-Drive",
        case_material: "Stainless Steel",
        water_resistance: "300 meters",
        image_url :j 
    },
    {
        id: 10,
        brand: "Casio",
        model: "G-Shock",
        price: 150,
        movement: "Quartz",
        case_material: "Resin",
        water_resistance: "200 meters",
        image_url : k
    },
    {
        id: 11,
        brand: "Timex",
        model: "Expedition",
        price: 100,
        movement: "Quartz",
        case_material: "Stainless Steel",
        water_resistance: "100 meters",
        image_url : a
    }
];

const topsell = [ {
    id: 1,
    brand: "Rolex",
    model: "Submariner",
    price: 10000,
    movement: "Automatic",
    case_material: "Stainless Steel",
    water_resistance: "300 meters",
    image_url : a
},
{
    id: 2,
    brand: "Omega",
    model: "Speedmaster Professional",
    price: 5000,
    movement: "Manual-Winding",
    case_material: "Stainless Steel",
    water_resistance: "50 meters",
    image_url : b
},
{
    id: 3,
    brand: "Tag Heuer",
    model: "Carrera",
    price: 3000,
    movement: "Automatic",
    case_material: "Steel",
    water_resistance: "100 meters",
    image_url : c 
},
// Add more watches as needed
{
    id: 4,
    brand: "Seiko",
    model: "Presage",
    price: 400,
    movement: "Automatic",
    case_material: "Stainless Steel",
    water_resistance: "50 meters",
    image_url : d
},]

const womenWatches = [
    {
        id: 1,
        brand: "Michael Kors",
        model: "Runway",
        price: 250,
        movement: "Quartz",
        case_material: "Stainless Steel",
        water_resistance: "50 meters",
        image_url: w1
    },
    {
        id: 2,
        brand: "Kate Spade",
        model: "Holland",
        price: 200,
        movement: "Quartz",
        case_material: "Stainless Steel",
        water_resistance: "30 meters",
        image_url: w2
    },
    {
        id: 3,
        brand: "Fossil",
        model: "Carlie Mini",
        price: 150,
        movement: "Quartz",
        case_material: "Stainless Steel",
        water_resistance: "30 meters",
        image_url: w3
    },
    // Add more watches as needed
    {
        id: 4,
        brand: "Bulova",
        model: "Diamond Gallery",
        price: 500,
        movement: "Quartz",
        case_material: "Stainless Steel",
        water_resistance: "30 meters",
        image_url: w4
    },
    {
        id: 5,
        brand: "Citizen",
        model: "Eco-Drive Silhouette",
        price: 300,
        movement: "Eco-Drive",
        case_material: "Stainless Steel",
        water_resistance: "50 meters",
        image_url: w5
    },
    {
        id: 6,
        brand: "Movado",
        model: "Museum Classic",
        price: 600,
        movement: "Quartz",
        case_material: "Stainless Steel",
        water_resistance: "30 meters",
        image_url: w6
    },
    {
        id: 7,
        brand: "Seiko",
        model: "Tressia Solar",
        price: 350,
        movement: "Solar",
        case_material: "Stainless Steel",
        water_resistance: "30 meters",
        image_url: w7
    },
    {
        id: 8,
        brand: "Skagen",
        model: "Anita",
        price: 180,
        movement: "Quartz",
        case_material: "Stainless Steel",
        water_resistance: "30 meters",
        image_url: w8
    },
    {
        id: 9,
        brand: "Guess",
        model: "Mini Phantom",
        price: 220,
        movement: "Quartz",
        case_material: "Stainless Steel",
        water_resistance: "30 meters",
        image_url: w9
    },
    {
        id: 10,
        brand: "Timex",
        model: "Fairfield Crystal",
        price: 120,
        movement: "Quartz",
        case_material: "Stainless Steel",
        water_resistance: "30 meters",
        image_url: w10
    },
    {
        id: 11,
        brand: "Emporio Armani",
        model: "Gianni T-Bar",
        price: 400,
        movement: "Quartz",
        case_material: "Stainless Steel",
        water_resistance: "30 meters",
        image_url: w11
    }
];

export {menWatches};
export {topsell};
export {womenWatches}