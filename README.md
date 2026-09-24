# Instituto Florescer — prévia institucional

Site de uma página, responsivo, criado para avaliação do proprietário antes da aprovação final. É um projeto estático: `index.html`, `styles.css`, `script.js` e imagens em `assets/`.

## Prévia

Endereço planejado para GitHub Pages: <https://marcosmieli9658-cell.github.io/instituto-florescer/>.

Esta versão usa `noindex, nofollow` para desencorajar indexação antes da aprovação. O repositório e a URL do GitHub Pages ainda são públicos e acessíveis por quem tiver o endereço.

## Conteúdo e fontes

- Logomarca, foto da Jeane, biografia e informações das cerimônias fornecidas pelo solicitante.
- [Instagram oficial do Instituto](https://www.instagram.com/ayahuascalds/): identidade pública, modalidades divulgadas e endereço de Laranjeiras do Sul.
- [Publicação do Instituto com o telefone de contato](https://www.instagram.com/ayahuascalds/p/DdZQPQ1Rdiw/). O solicitante confirmou usar esse número: **(42) 99933-3027**.
- [Instituto Alpha](https://institutoalpha.org/) usado somente como referência de organização editorial. O texto do Florescer foi redigido para este projeto; dados do Alpha não foram transferidos.
- As imagens de floresta e rosa em `assets/images/` foram geradas para este projeto. A foto da Jeane e a logomarca vieram do solicitante.

## Plano de ação

1. **Prévia:** implementar página institucional, testar desktop e celular, publicar no GitHub Pages e enviar o link para avaliação.
2. **Reunião com o proprietário:** confirmar texto institucional, credenciais, permissões de uso de imagem, endereço divulgado, local exato das cerimônias, horários, contato e eventual página oficial no Facebook.
3. **Revisão:** ajustar conteúdo e design com o retorno recebido; incluir fotos reais do espaço e depoimentos apenas se autorizados e fornecidos.
4. **Aprovação final:** remover `noindex` quando o proprietário aprovar a publicação definitiva; decidir domínio próprio e manter contatos atualizados.

## Pontos para validar na reunião

- O Instagram divulga Rua Barão do Rio Branco, 2961, em Laranjeiras do Sul; as cerimônias foram informadas como realizadas na Casa Cielo de Los Abuelos, no alagado do Rio Bonito do Iguaçu. O site diferencia os dois locais.
- A localização da Casa Cielo é apresentada como região de busca no mapa; o ponto exato de chegada deve ser confirmado pelo Instituto.
- Nenhuma página de Facebook oficial foi identificada com segurança, então não há link de Facebook nesta prévia.
- O texto evita promessas de cura ou resultados de saúde e recomenda conversa individual antes da participação.

## Rodar localmente

Como é um site estático, basta abrir `index.html` no navegador. Para testar pelo servidor local:

```powershell
python -m http.server 8000
```

Depois acesse <http://localhost:8000/>.
