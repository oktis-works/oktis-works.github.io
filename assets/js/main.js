// Oktis Works — Digital Alchemy & Modern Occult
// Site institucional — Hub de projetos

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
  }

  // Carrega repositórios públicos da organização via GitHub API
  const projectsList = document.getElementById("projects-list");
  if (!projectsList) return;

  async function loadProjects() {
    try {
      const res = await fetch(
        "https://api.github.com/orgs/oktis-works/repos?per_page=100&sort=updated&direction=desc",
        {
          headers: { Accept: "application/vnd.github+json" },
          cache: "no-store",
        }
      );
      if (!res.ok) throw new Error("Falha ao carregar repositórios");
      const repos = await res.json();

      const visible = repos.filter(
        (r) => !r.archived && r.name !== "oktis-works.github.io"
      );

      projectsList.innerHTML = visible
        .map(
          (repo) => `
        <article class="project-card high">
          <div class="project-row">
            <img src="${repo.owner.avatar_url}&s=200" alt="${escapeHtml(repo.name)}" class="project-avatar">
            <div class="project-info">
              <h3 class="chamber-title">${escapeHtml(repo.name)}</h3>
              <p class="body-sm" style="color:var(--ds-on-surface-variant); margin-bottom:var(--ds-space-md);">
                ${escapeHtml(repo.description || "Sem descrição")}
              </p>
              <div class="project-meta">
                <span class="chip">${escapeHtml(repo.language || "—")}</span>
                <span class="chip" style="border-color:var(--ds-border-level1); color:var(--ds-on-surface-variant);">⭐ ${repo.stargazers_count}</span>
                <span class="chip" style="border-color:var(--ds-border-level1); color:var(--ds-on-surface-variant);">🍴 ${repo.forks_count}</span>
              </div>
            </div>
          </div>
          <div class="project-actions">
            <a href="${repo.html_url}" target="_blank" class="btn btn-outline">Abrir no GitHub</a>
          </div>
        </article>
      `
        )
        .join("") ||
        '<p class="body-md">Nenhum repositório público encontrado.</p>';
    } catch (err) {
      console.error(err);
      projectsList.innerHTML =
        '<p class="body-md">Não foi possível carregar os projetos no momento.</p>';
    }
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  loadProjects();
});
