# anotações de reforço

## import de fontes do google fonts

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
