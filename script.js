### 3. `script.js`
```javascript
// Aguarda o carregamento completo da árvore DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // Executa as funcionalidades estruturais
    inicializarAccordion();
    inicializarAcessibilidade();
    inicializarFormularios();
});

/* ==========================================================================
   FUNCIONALIDADE: ACCORDION (EXPANSÍVEIS INTERATIVOS)
   ========================================================================== */
function inicializarAccordion() {
    const headers = document.querySelectorAll(".accordion-header");
    
    headers.forEach(header => {
        header.addEventListener("click", () => {
            const itemAtivo = header.parentElement;
            const content = header.nextElementSibling;
            const isAtivo = header.getAttribute("aria-expanded") === "true";
            
            // Inverte o estado atual do atributo aria do elemento clicado
            header.setAttribute("aria-expanded", !isAtivo);
            
            if (!isAtivo) {
                content.style.maxHeight = content.scrollHeight + "px";
                header.querySelector(".icon").textContent = "−";
                itemAtivo.style.borderLeftColor = "var(--cor-ouro)";
            } else {
                content.style.maxHeight = "0";
                header.querySelector(".icon").textContent = "+";
                itemAtivo.style.borderLeftColor = "var(--cor-verde)";
            }
        });
    });
}

/* ==========================================================================
   FUNCIONALIDADE: CONTROLES DE ACESSIBILIDADE (API DE FALA & ZOOM)
   ========================================================================== */
function inicializarAcessibilidade() {
    let tamanhoFonteAtual = 100; // Representa valor em porcentagem
    const corpoPagina = document.body;
    const conteudoLeitura = document.getElementById("conteudo-principal");

    // Seleção de Botões de Acessibilidade
    const btnAumentar = document.getElementById("btn-aumentar");
    const btnDiminuir = document.getElementById("btn-diminuir");
    const btnTema = document.getElementById("btn-tema");
    const btnOuvir = document.getElementById("btn-ouvir");
    const btnParar = document.getElementById("btn-parar");

    // Gerenciamento do Tamanho de Fonte
    btnAumentar.addEventListener("click", () => {
        if(tamanhoFonteAtual < 140) {
            tamanhoFonteAtual += 10;
            corpoPagina.style.fontSize = `${tamanhoFonteAtual}%`;
        }
    });

    btnDiminuir.addEventListener("click", () => {
        if(tamanhoFonteAtual