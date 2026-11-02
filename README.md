# Oktis Works — Site institucional

Este repositório hospeda o site público da organização **Oktis Works**, servido via GitHub Pages em:

👉 https://oktis-works.github.io/

## Design System

O site segue rigorosamente o design system **Digital Alchemy & Modern Occult**:

- **Superfícies:** obsidian (`#131313`), tons de câmara (`#141414`, `#1A1A1A`, `#201F1F`, `#2A2A2A`, `#353534`)
- **Primária:** Solar Gold (`#E5C158` / `#FFDE82`)
- **Secundária:** Raw Bronze / Tarnished Brass (`#EDC060` / `#826000`)
- **Terciária:** Astral Radiance (`#F4E0A5`)
- **Tipografia:** Syne (display/headlines) + Space Grotesk (body/technical/labels)
- **Shape:** cantos 0 (sharp), bordas de cabelo (hairline 1px), sem sombras suaves
- **Elevação:** tonalidades obsidian + bordas em ouro/latão, aura difusa em hover
- **Grid:** 8-point baseline; 12-col desktop, 8-col tablet, 4-col mobile

## Estrutura

```
oktis-works.github.io/
├── index.html              # Home institucional
├── docs/
│   ├── index.html          # Documentação principal do OkCMS
│   ├── boas-praticas/      # Segurança, desempenho, operação
│   └── referencia/         # Referência da API
├── assets/
│   ├── css/design-system.css
│   └── js/main.js
├── .github/workflows/pages.yml
└── README.md
```

## Publicação

O site é publicado automaticamente pelo **GitHub Pages** a partir da branch `main`.

Para ativar:
1. Vá em **Settings → Pages** do repositório `oktis-works/oktis-works.github.io`
2. Em **Build and deployment → Source**, selecione **Deploy from a branch**
3. Escolha a branch `main` e a pasta `/ (root)`
4. Salve. O site estará disponível em https://oktis-works.github.io/

## Tecnologia

- HTML semântico + CSS (sem framework, sem vibecoding)
- JavaScript vanilla (carrega repositórios públicos da org via GitHub API)
- Hospedagem estática no GitHub Pages

## Licença

MIT — veja o repositório principal do [OkCMS](https://github.com/oktis-works/cms) para detalhes dos pacotes publicados.
