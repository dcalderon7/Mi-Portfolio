// 1. Menú móvil
const menuMovil = document.getElementById("menuMovil");
const navEnlaces = document.getElementById("navEnlaces");
const cerrarMenu = () => {
  navEnlaces.classList.remove("abierto");
  menuMovil.querySelector("i").className = "bi bi-list";
};
menuMovil.addEventListener("click", () => {
  navEnlaces.classList.toggle("abierto");
  menuMovil.querySelector("i").className = navEnlaces.classList.contains(
    "abierto",
  )
    ? "bi bi-x-lg"
    : "bi bi-list";
});
document
  .querySelectorAll(".nav-enlaces a")
  .forEach((a) => a.addEventListener("click", cerrarMenu));

// 2. Animaciones al desplazarse
const animados = document.querySelectorAll(
  ".sobre-texto, .intereses, .foto-estudio, .proyecto-card, .habilidad, .formacion-card, .objetivos-card, .contacto",
);
animados.forEach((el) => {
  el.classList.add("animar");
  const i = [...el.parentElement.children].indexOf(el);
  el.style.setProperty("--d", (i % 5) * 0.07 + "s");
});
document
  .querySelectorAll(".proyectos-grid, .habilidades-grid")
  .forEach((grid) =>
    [...grid.children].forEach((c, i) =>
      c.style.setProperty("--d", i * 0.09 + "s"),
    ),
  );
const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("mostrar");
        observador.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);
animados.forEach((el) => observador.observe(el));

// 3. Botón volver arriba
const volverArriba = document.getElementById("volverArriba");
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
  document
    .querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 10);
  volverArriba.classList.toggle("visible", window.scrollY > 400);
});
volverArriba.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" }),
);

// 4. Año automático
document.getElementById("anio").textContent = new Date().getFullYear();

// 5. Navegación activa
const enlacesNav = document.querySelectorAll(".nav-enlaces a");
const observadorNav = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        enlacesNav.forEach((a) =>
          a.classList.toggle(
            "activo",
            a.getAttribute("href") === "#" + e.target.id,
          ),
        );
      }
    });
  },
  { rootMargin: "-25% 0px -65% 0px" },
);
document
  .querySelectorAll("section[id]")
  .forEach((s) => observadorNav.observe(s));
