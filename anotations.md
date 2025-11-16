# anotações de reforço

## 1. Variaveis e setups

### import de fontes do google fonts

assim como recomenda o google fonts e todo ecossistema do M3, as fontes importadas devem ser enxutas, somente os pesos e fontes que serão utilizadas no projeto, ser carregadas no head do site utilizando o `<link>` de carregamento das fontes assim como outros links de preconnect do `fonts.google` e `gstatic` para melhor carregamento da página.

o projeto então feito na fonte Raleway do google fonts deve importar o seguinte código no head da página

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap"
  rel="stylesheet"
/>
```

algo a se considerar é o display da fonte, escolhemos como swap mas caso quisessemos mais velocidade de página poderia ser fallback:

1. swap : muda a fonte quando carregar sempre
2. optional : carrrega se não demorar muito
3. fallback : carrega só se não demorar quase nada

### Cores e temas

Agora o principal estudo dessa parte é criar variaveis dinamicas para temas e setar configurações basicas, começamos então a usar cores em esquema moderno, o `oklch`

- L: luminicencia real
- C: Chroma
- H: Hue

baseado nisso podemos confirmar que é possivel usar esse sistema de um jeito mais inteligente em temas, criando variaveis de l, c, h para alterar hover apenas em modelos primario e com intenão de CTA clara. Com isso em mente alterei os valores para criar temas de botão primario, secundario e terciario.

- primario com hover apenas em luminosidade
- secundario para hover no modo outline
- terciario com botão fantasma, apenas com texto quando hover

vamos então utilizar uma função do css chamada `color-mix` que nos ajudará a "clarear" as cores no hover primario, e vamos dividir o css em arquivos para organizar o código:

```
project/
│
├─ index.html
│
└─ styles/
   ├─ base.css          ← Reset + tipografia + estruturas globais
   ├─ tokens.css        ← Variáveis: cores OKLCH, espaçamentos…
   ├─ components.css    ← Botões, cards, inputs…
   └─ theme.css         ← Light / Dark Modes
```

## criação de script de troca de temas

Apos organizar cores oklch de botões e fundos, criamos os scripts de troca de tema, salvando variavel de navevegador para cada tema, o escuro e o claro.

## Acessibilidade com o color-contrast

Nova feature para criar cores ponderadas baseadas no contraste com o fundo. Isso é definido automaticamente e pode inclusive se misturar com color-mix para cores de alto nivel com oklch, tendo certeza de hovers e acessibilidade de botões.

```css
color: color-contrast(var(--btn-bg) vs white, black);
```

esse script faz com que comparemos a cor do fundo e adicionemos ao texto a cor branca se o contraste for melhor com o fundo ou cor preta se não. temos ainda o nivel de acessibilidade que vamos utilizar, por exemplo:

- to AA se contraste for 4.5:1 que é o minimo
- to AAA se o contraste for 7:1 o maximo de acessibilidade
- to x com x = numero escolhido para um contraste personalizado: por exemplo to wcga1.2 4.5

## cards de vidro

utilizando o `backdrop-filter` podemos criar um efeito de blur e background semitgransparente para um efeito de vidro usando apenas css. E com a ajuda de `text-elipsis` podemos melhorar isso ainda mais.
