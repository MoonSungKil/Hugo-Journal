const journalHeader = document.querySelector(".journal_header");

const pdfBanner = document.querySelector(".single_journal_pdf_banner");

const journalHeaderHeight = journalHeader.offsetHeight;

window.addEventListener("scroll", () => {
  const scrollDistance = window.pageYOffset;

  if (scrollDistance > journalHeaderHeight + 48) {
    pdfBanner.classList.add("show_pdf_banner");
  } else {
    pdfBanner.classList.remove("show_pdf_banner");
  }
});
