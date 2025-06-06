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
// Coordenadas de Santa Cruz do Sul - RS
const santaCruzDoSul = { lat: -29.7226, lng: -52.4347 };

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: santaCruzDoSul,
    zoom: 13,
  });

  // Marcador personalizado
  const marker = new google.maps.Marker({
    position: santaCruzDoSul,
    map: map,
    title: "Nível do Rio - Santa Cruz do Sul",
    icon: {
      url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    }
  });

  // InfoWindow com dados simulados (pode ser atualizado com API real)
  const info = new google.maps.InfoWindow({
    content: "<b>Nível atual do rio:</b> 7.2m<br><b>Status:</b> Alerta"
  });

  marker.addListener("click", () => {
    info.open(map, marker);
  });
}
// Lista de pontos de monitoramento simulados (pode vir de API real no futuro)
const pontosDeMonitoramento = [
  {
    nome: "Rio Pardo - Ponto 1",
    coordenadas: { lat: -29.728, lng: -52.428 },
    nivel: 6.5,
    status: "Alerta",
    cor: "orange"
  },
  {
    nome: "Arroio Castelhano",
    coordenadas: { lat: -29.710, lng: -52.440 },
    nivel: 5.1,
    status: "Estável",
    cor: "green"
  },
  {
    nome: "Barragem da Corsan",
    coordenadas: { lat: -29.735, lng: -52.445 },
    nivel: 7.8,
    status: "Emergência",
    cor: "red"
  }
];

function initMap() {
  const centro = { lat: -29.7226, lng: -52.4347 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: centro,
    zoom: 13,
    mapId: "DEMO_MAP_ID", // Opcional, pode ser customizado via Google Cloud
    styles: [ // Personalização visual básica
      {
        featureType: "water",
        stylers: [{ color: "#b3d1ff" }]
      },
      {
        featureType: "landscape",
        stylers: [{ color: "#f2f2f2" }]
      },
      {
        featureType: "road",
        stylers: [{ visibility: "simplified" }]
      }
    ]
  });

  // Adiciona os marcadores
  pontosDeMonitoramento.forEach(ponto => {
    const marker = new google.maps.Marker({
      position: ponto.coordenadas,
      map: map,
      title: ponto.nome,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: ponto.cor,
        fillOpacity: 0.9,
        strokeWeight: 1,
        strokeColor: "#333"
      }
    });

    const info = new google.maps.InfoWindow({
      content: `
        <strong>${ponto.nome}</strong><br>
        Nível: ${ponto.nivel}m<br>
        Status: <b style="color:${ponto.cor}">${ponto.status}</b>
      `
    });

    marker.addListener("click", () => {
      info.open(map, marker);
    });
  });

  // (Simulação de camada meteorológica visual com tiles)
  const weatherLayer = new google.maps.ImageMapType({
    getTileUrl: function (coord, zoom) {
      return `https://tile.openweathermap.org/map/precipitation_new/${zoom}/${coord.x}/${coord.y}.png?appid=SEU_OPENWEATHER_API_KEY`;
    },
    tileSize: new google.maps.Size(256, 256),
    name: "Precipitação",
    opacity: 0.6
  });

  map.overlayMapTypes.insertAt(0, weatherLayer);
}

