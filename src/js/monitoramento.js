document.addEventListener('DOMContentLoaded', () => {
  const hamburguer = document.getElementById('hamburguer');
  const navMenu = document.getElementById('nav-menu');

  hamburguer.addEventListener('click', () => {
    navMenu.classList.toggle('ativo');
    hamburguer.classList.toggle('ativo');
  });

  // Detecta qual link está ativo com base no caminho
  const links = document.querySelectorAll('.header-menu a');
  const currentPage = window.location.pathname.split('/').pop();

  links.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});

 // Inicia o mapa centralizado em Porto Alegre, RS
const map = L.map("map").setView([-30.0346, -51.2177], 10);

// Adiciona camada do OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// Simulação de zonas de enchente no RS
const floodZones = [
  {
    name: "Porto Alegre - Bairro Sarandi",
    coords: [-29.9976, -51.1326],
    level: "Alto",
    timestamp: "06/06/2025 14:32",
  },
  {
    name: "Eldorado do Sul",
    coords: [-30.0860, -51.6224],
    level: "Crítico",
    timestamp: "06/06/2025 14:28",
  },
  {
    name: "Canoas - Mathias Velho",
    coords: [-29.9181, -51.1865],
    level: "Médio",
    timestamp: "06/06/2025 14:22",
  },
  {
    name: "Novo Hamburgo - Bairro Canudos",
    coords: [-29.7092, -51.1407],
    level: "Alto",
    timestamp: "06/06/2025 14:18",
  },
  {
    name: "São Leopoldo - Bairro Feitoria",
    coords: [-29.7753, -51.1365],
    level: "Crítico",
    timestamp: "06/06/2025 14:10",
  }
];

// Adiciona marcadores no mapa e lista lateral
floodZones.forEach(zone => {
  const marker = L.marker(zone.coords).addTo(map);
  marker.bindPopup(`
    <strong>${zone.name}</strong><br />
    Nível: ${zone.level}<br />
    Atualizado: ${zone.timestamp}
  `);

  const li = document.createElement("li");
  li.textContent = `${zone.name} - Nível ${zone.level} (${zone.timestamp})`;
  document.getElementById("alert-list").appendChild(li);
});
