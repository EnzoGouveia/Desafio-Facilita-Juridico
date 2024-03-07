function calcularDistancia(ponto1, ponto2) {
    const distanciaX = ponto2.coordinates.x - ponto1.coordinates.x;
    const distanciaY = ponto2.coordinates.y - ponto1.coordinates.y;
    return Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);
}

function calcularDistanciaTotal(rota) {
    let distanciaTotal = 0;
    for (let i = 0; i < rota.length - 1; i++) {
        distanciaTotal += calcularDistancia(rota[i], rota[i + 1]);
    }
    distanciaTotal += calcularDistancia(rota[rota.length - 1], { id: 0, coordinates: { x: 0, y: 0 } });
    return distanciaTotal;
}

async function encontrarRotaMaisCurta(clientes) {
    const fila = [[{ id: 0, coordinates: { x: 0, y: 0 } }]];
    let melhorRota = null;
    let menorDistancia = Infinity;

    while (fila.length > 0) {
        const rotaAtual = fila.shift();

        if (rotaAtual.length === clientes.length + 1) {
            const distanciaAtual = calcularDistanciaTotal(rotaAtual);
            if (distanciaAtual < menorDistancia) {
                menorDistancia = distanciaAtual;
                melhorRota = rotaAtual.slice(1).map(cliente => cliente.id);
            }
        } else {
            for (const cliente of clientes) {
                if (!rotaAtual.find(item => item.id === cliente.id)) {
                    const novaRota = [...rotaAtual, cliente];
                    fila.push(novaRota);
                }
            }
        }
    }

    return melhorRota;
}

module.exports = encontrarRotaMaisCurta;
