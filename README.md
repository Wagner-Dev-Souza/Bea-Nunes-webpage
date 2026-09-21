# 🐾 Beatriz Nunes — Veterinária a Domicílio

> Página institucional para divulgação do atendimento veterinário domiciliar de cães e gatos, no Rio de Janeiro e Baixada Fluminense.

🔗 **Publicada via GitHub Pages** · ⚠️ **Projeto de cliente** — a licença cobre **apenas o código** (ver *Direitos de imagem e conteúdo*)

![stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS%20puro-yellow)
![deploy](https://img.shields.io/badge/deploy-GitHub%20Pages-success)
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

Seções: apresentação, sobre, serviços, depoimentos e contato — com galeria de fotos em *lightbox*.

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
