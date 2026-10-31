export const projects = [
  { slug: "subas-vatika", name: "Subas Vatika", location: "Berhampur", type: "Duplexes", image: "/projects/vatika/duplex-enhanced.png", description: "Duplexes, 2 & 3 BHK apartments, hospitality and everyday conveniences in one community.", status: "Duplexes & apartments", sample: false },
  { slug: "subas-classic", name: "Subas Classic", location: "Chandrasekharpur, Bhubaneswar", type: "Apartments", image: "/projects/classic/exterior-wide.png", description: "Two-bedroom apartments. Completed, with possession completed.", status: "Possession completed", sample: false },
];

export type ProjectDetail = {
  slug: string; name: string; location: string; subtitle: string; intro: string; image: string; status: string;
  facts: {label: string; value: string}[];
  features: {title: string; text: string}[];
  amenities: string[];
  plans: {name: string; image: string; description: string; rooms: string[]}[];
  specifications: {title: string; text: string}[];
  nearby: {label: string; distance: string}[];
  gallery: {image: string; caption: string}[];
  brochure: string; phone: string; phoneLabel: string;
};

export const projectDetails: Record<string, ProjectDetail> = {
  "subas-vatika": {
    slug: "subas-vatika", name: "Subas Vatika", location: "Haridakhandi Chaka, Berhampur", subtitle: "A new way to live in Berhampur.",
    intro: "Subas Vatika brings together duplexes and 2 & 3 BHK apartments across several blocks at Haridakhandi Chaka, Berhampur. With a fully functional hotel, restaurants, grocery shops, a supermarket, a park and play area, and 60-foot internal roads, the development is designed to raise the standard of everyday living.",
    image: "/projects/vatika/duplex-enhanced.png", status: "Homes, hospitality & retail",
    facts: [{label:"Homes",value:"Duplexes"},{label:"Apartments",value:"2 & 3 BHK"},{label:"Internal roads",value:"60 ft"},{label:"Location",value:"Berhampur"}],
    features: [{title:"A complete neighbourhood.",text:"Duplexes and 2 & 3 BHK apartments across several blocks offer different ways to make this community home."},{title:"Everyday needs, close to home.",text:"A hotel, restaurants, grocery shops and a supermarket bring hospitality and daily conveniences into the development."},{title:"Room to move and unwind.",text:"60-foot internal roads, a park and a play area create space for everyday journeys and time outdoors."},{title:"Space to come together.",text:"Drawing and dining areas on the ground floor bring daily life together, with a kitchen and bedroom on the same level."},{title:"A little room for yourself.",text:"The first-floor layout includes two bedrooms, a lobby, study, puja space and balcony."},{title:"Open up to the outdoors.",text:"The second-floor plan combines a bedroom and bathroom with an open terrace. A covered portico sits at the entrance."}],
    amenities: ["60-foot internal roads", "Park and play area", "Fully functional hotel", "Restaurants, grocery shops and supermarket", "24-hour water supply", "Reserved resident parking", "Intercom facility", "24-hour security and CCTV", "Power backup for common areas, pumps, lifts, flats and duplexes", "Community park and children’s play area", "Earthquake-resistant RCC structure"],
    plans: [
      {name:"Ground floor",image:"/projects/vatika/ground-floor.png",description:"Everyday living, with a bedroom on the entrance level.",rooms:["Drawing room", "Dining area & kitchen", "Bedroom & bathroom", "Covered portico"]},
      {name:"First floor",image:"/projects/vatika/first-floor.png",description:"Private rooms, shared moments, and space to focus.",rooms:["Two bedrooms", "Study & puja space", "Lobby & balcony", "Bathrooms & dressing area"]},
      {name:"Second floor",image:"/projects/vatika/second-floor.png",description:"A bedroom alongside the open terrace.",rooms:["Bedroom", "Bathroom", "Open terrace", "Internal staircase"]}
    ],
    specifications: [
      {title:"Structure",text:"Earthquake-resistant RCC frame with TMT 500 steel; 9-inch external walls and 5-inch internal walls."},
      {title:"Flooring & staircase",text:"Vitrified tiles for living, dining and bedrooms. Tile or granite staircase with stainless-steel railing; tiled portico."},
      {title:"Doors & windows",text:"Laminated flush doors with branded hinges and locks. UPVC sliding windows with safety MS grills."},
      {title:"Bathrooms",text:"Ceramic wall tiles up to 7 feet, with anti-skid floor tiles and fittings."},
      {title:"Electrical",text:"Modular switches and ISI-marked wires; points for telephone, internet, AC, geyser and water purifier."},
      {title:"Finishes",text:"Weather-coat exterior paint; interior plastic emulsion with putty and primer."}
    ],
    nearby: [{label:"Bada Bazar / market",distance:"500 m"},{label:"School",distance:"1 km"},{label:"Hospital",distance:"1 km"},{label:"Railway station",distance:"5 km"}],
    gallery: [{image:"/projects/vatika/duplex-front.jpg",caption:"Duplex front elevation · supplied architectural illustration"},{image:"/projects/vatika/duplex-enhanced.png",caption:"Duplex collection · enhanced architectural illustration"},{image:"/projects/vatika/apartments-evening-angle.jpg",caption:"2 & 3 BHK apartments · Evening perspective · architectural illustration"},{image:"/projects/vatika/apartments-landscape-view.jpg",caption:"2 & 3 BHK apartments · Landscaped exterior · architectural illustration"},{image:"/projects/vatika/apartments-day-front.jpg",caption:"2 & 3 BHK apartments · Front elevation by day · architectural illustration"},{image:"/projects/vatika/apartments-brick-exterior.jpg",caption:"2 & 3 BHK apartments · Brick facade perspective · architectural illustration"},{image:"/projects/vatika/apartments-evening-front.jpg",caption:"2 & 3 BHK apartments · Front elevation by evening · architectural illustration"},{image:"/projects/vatika/apartments-day-angle.jpg",caption:"2 & 3 BHK apartments · Daytime perspective · architectural illustration"}],
    brochure:"/brochures/subas-vatika.pdf",phone:"+919348144009",phoneLabel:"+91 93481 44009"
  },
  "subas-classic": {
    slug:"subas-classic",name:"Subas Classic",location:"Plot No. 474, Chandrasekharpur, Bhubaneswar",subtitle:"A chapter brought to life.",
    intro:"A completed collection of two-bedroom apartments in Chandrasekharpur, Bhubaneswar. With possession completed, Subas Classic forms part of our delivered portfolio.",
    image:"/projects/classic/exterior-enhanced.png",status:"Completed · Possession completed",
    facts:[{label:"Configuration",value:"2 BHK"},{label:"Type 1 · saleable",value:"1,344 sq ft"},{label:"Type 2 · saleable",value:"1,293 sq ft"},{label:"Status",value:"Completed"}],
    features:[{title:"Two ways to feel at home.",text:"Two-bedroom layouts in two saleable-area options, with living and dining spaces, a kitchen, bathrooms and balconies."},{title:"A shared space above it all.",text:"The brochure includes a common rooftop garden with seating, giving residents a place to pause outdoors."},{title:"A connected neighbourhood.",text:"Located in Chandrasekharpur, with schools, hospitals and the Infocity area nearby."}],
    amenities:["Intercom", "Security with CCTV", "Video door phone for each flat", "Power backup for common areas, pump and lift", "Common rooftop garden with seating", "24-hour water arrangement", "Earthquake-resistant RCC structure"],
    plans:[{name:"2 BHK · Type 1",image:"/projects/classic/type-1.png",description:"1,344 sq ft saleable area, as listed in the brochure.",rooms:["Two bedrooms", "Living & dining", "Kitchen", "Two bathrooms & balconies"]},{name:"2 BHK · Type 2",image:"/projects/classic/type-2.png",description:"1,293 sq ft saleable area, as listed in the brochure.",rooms:["Two bedrooms", "Living & dining", "Kitchen", "Two bathrooms & balconies"]}],
    specifications:[{title:"Structure & protection",text:"RCC framed earthquake-resistant structure with FE500 steel, 5-inch internal and 9-inch external walls. Waterproofing for wet areas and roof, with anti-termite treatment as required."},{title:"Living, dining & bedrooms",text:"Vitrified tiles, wooden flooring for the master bedroom, and acrylic emulsion paint on cement putty finish."},{title:"Kitchen",text:"Polished granite counter, ceramic tiles above the counter, stainless-steel sink and CP fittings."},{title:"Bathrooms",text:"Designer ceramic wall tiles up to 7 feet, anti-skid floor tiles, branded CP fittings, European WC and wash basin."},{title:"Doors & windows",text:"Moulded-skin doors with branded hinges and locks. UPVC sliding windows with safety grills."},{title:"Electrical & common areas",text:"Concealed copper wiring, modular switches and sockets, with points for essential appliances. Granite or high-strength tiles in staircases and corridors."}],
    nearby:[{label:"Utkal Hospital",distance:"1.4 km"},{label:"DAV Public School",distance:"1.5 km"},{label:"Buddha Park",distance:"1.5 km"},{label:"Infosys",distance:"2 km"}],
    gallery:[{image:"/projects/classic/exterior-enhanced.png",caption:"Subas Classic · brochure architectural illustration"}],
    brochure:"/brochures/subas-classic.pdf",phone:"+916371734881",phoneLabel:"+91 63717 34881"
  }
};
