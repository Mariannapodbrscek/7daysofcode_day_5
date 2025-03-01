// Declaración de variables 
let idioma = "";
let nombre = "";
let saludo = "";
const listaCompras = {};
let agregarMas = true;

const seccionesSupermercado = {
    "produce": { english: "produce", spanish: "frutas y verduras" },
    "dairy": { english: "dairy", spanish: "lácteos" },
    "frozen": { english: "frozen", spanish: "congelados" },
    "bakery": { english: "bakery", spanish: "panadería" },
    "meat": { english: "meat", spanish: "carnes" },
    "seafood": { english: "seafood", spanish: "mariscos" },
    "beverages": { english: "beverages", spanish: "bebidas" },
    "snacks": { english: "snacks", spanish: "bocadillos" },
    "household": { english: "household", spanish: "hogar" },
    "personal care": { english: "personal care", spanish: "cuidado personal" },
    "stationery": { english: "stationery", spanish: "productos de librería" },
    "clothing": { english: "clothing", spanish: "ropa" },
    "electronics": { english: "electronics", spanish: "electrónica" },
    "toys": { english: "toys", spanish: "juguetes" },
    "pet supplies": { english: "pet supplies", spanish: "suministros para mascotas" },
    "pharmacy": { english: "pharmacy", spanish: "farmacia" },
    "makeup": { english: "makeup", spanish: "maquillaje" },
    "others": { english: "others", spanish: "otros" }
};

const productosSupermercado = {
    "produce": {
        english: ["eggs", "lettuce", "spinach", "carrots", "peppers", "apples", "avocados", "corn", "honey", "oranges", "strawberries", "blueberries", "bananas", "grapes", "cucumbers"],
        spanish: ["huevos", "lechuga", "espinaca", "zanahorias", "pimientos", "manzanas", "paltas", "choclos", "miel", "naranjas", "fresas", "arándanos", "plátanos", "uvas", "pepinos"]
    },
    "dairy": {
        "english": ["milk", "yogurt", "provolone cheese", "swiss cheese", "butter", "cream", "parmesan cheese", "mozzarella cheese", "cheddar cheese", "cottage cheese"],
        "spanish": ["leche", "yogur", "queso provolone", "queso suizo", "mantequilla", "crema", "queso parmesano", "queso mozzarella", "queso cheddar", "requesón"]
    },
    "bakery": {
        "english": ["bread", "croissants", "bagels", "muffins", "cookies", "donuts", "pita bread", "brioche", "ciabatta", "whole wheat bread"],
        "spanish": ["pan de molde", "croissants", "bagels", "magdalenas", "galletas", "donas", "pan pita", "brioche", "ciabatta", "pan integral"]
    },
    "meat": {
        "english": ["chicken", "beef", "fish", "pork", "turkey", "bacon", "ham", "sausages", "duck", "lamb"],
        "spanish": ["pollo", "carne", "pez", "cerdo", "pavo", "tocino", "jamón", "salchichas", "pato", "cordero"]
    },
    "frozen": {
        "english": ["ice cream", "frozen pizza", "vegetables", "frozen berries", "frozen meals", "shrimp", "frozen fries", "frozen waffles", "frozen dumplings", "ice cubes"],
        "spanish": ["helados", "pizza congelada", "verduras congeladas", "frutas congeladas", "comidas congeladas", "camarones congelados", "papas fritas congeladas", "waffles congelados", "empanadillas congeladas", "hielo"]
    },
    "beverages": {
        "english": ["water", "soda", "juice", "coffee", "tea", "energy drinks", "sports drinks", "almond milk", "coconut water", "kombucha"],
        "spanish": ["agua", "refresco", "jugo", "café", "té", "bebidas energéticas", "bebidas deportivas", "leche de almendra", "agua de coco", "kombucha"]
    },
    "snacks": {
        "english": ["popcorn", "chips", "nuts", "granola bars", "chocolate", "pretzels", "crackers", "trail mix", "fruit snacks", "candy"],
        "spanish": ["palomitas de maíz", "papas fritas", "frutos secos", "barras de granola", "chocolate", "pretzels", "galletitas saladas", "mezcla de frutos secos", "bocadillos de frutas", "caramelos"]
    },
    "household": {
        "english": ["toilet paper", "cleaning spray", "sponges", "detergent", "trash bags", "disinfectant", "laundry softener", "air fresheners", "aluminum foil", "plastic wrap"],
        "spanish": ["papel higiénico", "spray de limpieza", "esponjas", "detergente", "bolsas de basura", "desinfectante", "suavizante", "aromatizantes", "papel aluminio", "film plástico"]
    },
    "clothing": {
        "english": ["t-shirts", "pants", "underwear", "socks", "jackets", "hats", "scarves", "gloves", "dresses", "shoes"],
        "spanish": ["polos", "pantalones", "ropa interior", "medias", "casacas", "sombreros", "bufandas", "guantes", "vestidos", "zapatos"]
    },
    "electronics": {
        "english": ["headphones", "chargers", "batteries", "USB cables", "smartphones", "tablets", "laptops", "monitors", "printers", "gaming consoles"],
        "spanish": ["audífonos", "cargadores", "pilas", "cables USB", "teléfonos inteligentes", "tabletas", "computadoras portátiles", "monitores", "impresoras", "consolas de videojuegos"]
    },
    "toys": {
        "english": ["squeeze cheese toy", "action figures", "dolls", "puzzles", "board games", "stuffed animals", "toy cars", "building blocks", "educational toys", "yo-yos"],
        "spanish": ["juguete squeeze cheese", "figuras de acción", "muñecas", "rompecabezas", "juegos de mesa", "peluches", "autos de juguete", "bloques de construcción", "juguetes educativos", "yo-yos"]
    },
    "pet supplies": {
        "english": ["dog food", "cat food", "guinea pig food", "hay for guinea pig", "cat litter", "dog breath treats", "bird seeds", "fish food", "pet shampoo", "scratching posts"],
        "spanish": ["comida de perro", "comida de gato", "comida de guinea pig", "hay para guinea pig", "arena de gato", "treats para el buen aliento del perro", "semillas para pájaros", "comida para peces", "shampoo para mascotas", "rascadores para gatos"]
    },
    "pharmacy": {
        "english": ["vitamin B12", "vitamin D", "magnesium", "iron", "pain relievers", "antihistamines", "cough syrup", "band-aids", "thermometers", "eye drops"],
        "spanish": ["vitaminas B12", "vitamina D", "magnesio", "hierro", "analgésicos", "antihistamínicos", "jarabe para la tos", "curitas", "termómetros", "gotas para los ojos"]
    },
    "makeup": {
        "english": ["skin cream", "vitamin serum", "sunscreen", "mascara", "makeup remover", "concealer", "liquid eyeliner", "nail polish", "blush", "foundation", "lipstick", "eyeshadow", "highlighter", "bronzer", "setting spray"],
        "spanish": ["crema para la piel", "serum con vitamina", "bloqueador", "rimel", "removedor de maquillaje", "corrector", "lápiz líquido de ojos", "esmalte de uñas", "rubor", "base de maquillaje", "labial", "sombra de ojos", "iluminador", "bronceador", "fijador de maquillaje"]
    }
};
    

// Función para verificar si el producto existe
function verificarProducto(producto) {
    let encontrado = false;
    for (let categoria in productosSupermercado) {
        if (productosSupermercado[categoria].english.includes(producto.toLowerCase()) || productosSupermercado[categoria].spanish.includes(producto.toLowerCase())) {
            encontrado = true;
            return categoria; // Retorna la categoría en la que está el producto
        }
    }
    return "others"; // Si no se encuentra el producto, asignarlo a "otros"
}

// Preguntar por el idioma
saludo = prompt("Do you prefer to continue in English or Spanish? / ¿Prefieres continuar en inglés o en español?");
while (!["english", "ingles", "inglés", "espanol", "español", "spanish"].includes(saludo.toLowerCase().replace('ñ', 'n').trim())) {
    saludo = prompt("Invalid input. Please try again. / Entrada inválida. Por favor, intenta de nuevo. Do you prefer to continue in English or Spanish? / ¿Prefieres continuar en inglés o en español?");
}

if (["english", "ingles", "inglés"].includes(saludo.toLowerCase().replace('ñ', 'n').trim())) {
    idioma = "english";
    console.log("You prefer English. / Prefieres inglés.");
} else {
    idioma = "spanish";
    console.log("Prefieres español.");
}

// Preguntar nombre
nombre = prompt(idioma === "english" ? "What is your name?" : "¿Cuál es tu nombre?");
console.log(idioma === "english" ? `Hello, ${nombre}.` : `Hola, ${nombre}.`);

// Agregar productos
while (agregarMas) {
    let producto = prompt(idioma === "english" ? "What product do you want to add?" : "¿Qué producto deseas agregar?");
    let categoria = verificarProducto(producto);
    if (!listaCompras[categoria]) {
        listaCompras[categoria] = [];
    }
    listaCompras[categoria].push(producto);
    
    agregarMas = confirm(idioma === "english" ? "Do you want to add another product?" : "¿Quieres agregar otro producto?");
}

// Mostrar la lista de compras
console.log(idioma === "english" ? "Your shopping list / Tu lista de compras:" : "Tu lista de compras: ");
for (let categoria in listaCompras) {
    console.log(`${seccionesSupermercado[categoria][idioma]}:`);
    listaCompras[categoria].forEach(producto => console.log(`- ${producto}`));
}