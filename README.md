# 🐾 Beatriz Nunes — Veterinária a Domicílio

> Página institucional para divulgação do atendimento veterinário domiciliar de cães e gatos, no Rio de Janeiro e Baixada Fluminense.

🔗 **[Ver a página publicada](https://wagner-dev-souza.github.io/Bea-Nunes-webpage/)** · ⚠️ **Projeto de cliente** — a licença cobre **apenas o código** (ver *Direitos de imagem e conteúdo*)

[![CI](https://github.com/Wagner-Dev-Souza/Bea-Nunes-webpage/actions/workflows/ci.yml/badge.svg)](https://github.com/Wagner-Dev-Souza/Bea-Nunes-webpage/actions/workflows/ci.yml)
![stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS%20puro-yellow)
![deploy](https://img.shields.io/badge/deploy-GitHub%20Pages-success)
![testes](https://img.shields.io/badge/testes-Cypress%20(16%20testes)-success)
![license](https://img.shields.io/badge/license-MIT%20(somente%20c%C3%B3digo)-blue)

---

## 🎯 O problema

Profissional autônoma que atende em domicílio precisa de um endereço único na web para apresentar o serviço, mostrar como funciona o atendimento e concentrar o contato. Perfil em rede social não organiza essa informação nem transmite a mesma segurança de um site próprio.

## 💡 A solução

Uma página única, rápida e focada em conversão, com três objetivos:

- **Apresentar** a profissional e a proposta de atendimento humanizado
- **Detalhar** os serviços e a área de cobertura
- **Levar ao contato** por um caminho direto, com o público-alvo majoritariamente em celular

## 📸 Estrutura da página

Seções: **sobre**, **diferenciais**, **atendimento**, **galeria** (com visualização ampliada das fotos) e **contato**.

```
index.html                  # página única, com as seções e as metas de SEO
assets/
├── css/style.css           # estilos, animações de entrada e responsividade
├── js/main.js              # interações (menu mobile, header, reveal, lightbox)
└── img/                    # fotografias tratadas para a web
```

## 🧠 Decisões de implementação

| Decisão | Escolha | Por quê |
|---|---|---|
| Sem framework | HTML + CSS + JS puro | uma página institucional não justifica dependência |
| Sem etapa de build | arquivos servidos direto | publicar é subir arquivos; qualquer pessoa consegue manter |
| JavaScript sem biblioteca | API nativa do navegador | interações simples — rolagem, menu e lightbox |
| Foco em celular | layout responsivo e mídia otimizada | o acesso acontece por link em rede social, em tela pequena |

## 🔍 SEO e compartilhamento

A página traz os elementos necessários para ser encontrada e para não aparecer "crua" quando compartilhada:

- `<title>` e `meta description` orientados à busca local (*veterinária a domicílio*, *Rio de Janeiro*, *Baixada Fluminense*)
- **Open Graph** (`og:title`, `og:description`, `og:image`) — define o cartão exibido ao compartilhar o link
- Marcação semântica em português (`lang="pt-BR"`)

## ▶️ Como rodar localmente

```bash
python -m http.server 8000
```

E acesse `http://localhost:8000`. Também funciona abrindo o `index.html` diretamente, já que a página não faz requisições externas.

## 🧪 Testes

**16 testes ponta a ponta em Cypress**, rodando automaticamente a cada push pelo GitHub Actions.

```bash
npm install
npm run serve      # servidor local em http://localhost:8082
npm test           # roda a suíte (em outro terminal)
```

### O que a suíte cobre

**Estrutura e conteúdo** (`01-pagina.cy.js`) — título e idioma, descrição para busca e
cartão de compartilhamento (Open Graph), as cinco seções da página, o cabeçalho com a
navegação, a carga das imagens principais e o caminho de contato.

**Interações** (`02-interacoes.cy.js`):

- **Cabeçalho**: ganha sombra ao rolar e perde ao voltar ao topo
- **Revelação ao rolar**: os blocos entram marcados como visíveis conforme aparecem na tela
- **Galeria**: as fotos carregam quando entram na tela (elas usam carregamento tardio),
  abrem ampliadas ao clique, navegam entre si e fecham com `Esc` ou pelo botão
- **Menu no celular**: abre e fecha pelo botão, anuncia o estado para leitores de tela
  (`aria-expanded` e `aria-label`) e fecha ao escolher um item

### Por que testar uma página estática

Os três erros mais comuns neste tipo de página não aparecem em revisão de código: imagem
que não carrega por caminho errado, interação que quebra no celular e conteúdo que só
existe se o JavaScript rodar. É exatamente o que a suíte verifica — e o mesmo tipo de
defeito já foi encontrado em outro projeto desta conta (ícones com caminho absoluto
quebrando no site publicado).

## ⚠️ Limitações conhecidas

- Sem formulário próprio: o contato é direcionado para fora da página
- Sem testes automatizados nem pipeline de verificação
- Conteúdo e fotografias dependem de atualização manual

## ⚖️ Direitos de imagem e conteúdo

A licença **MIT** deste repositório se aplica **exclusivamente ao código-fonte** — HTML, CSS e JavaScript — de autoria de Wagner Silva Souza.

As **fotografias**, o **nome profissional** e todo o **conteúdo institucional** pertencem à profissional retratada e **não** estão cobertos por esta licença, não podendo ser reutilizados, redistribuídos ou republicados sem autorização expressa.

## 📄 Licença

MIT — veja [LICENSE](LICENSE), aplicável somente ao código.

---

**Wagner Silva Souza** · [LinkedIn](https://linkedin.com/in/wagner-silva-souza-3a840935) · [GitHub](https://github.com/Wagner-Dev-Souza)
