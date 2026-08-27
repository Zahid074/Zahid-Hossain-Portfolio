import { jsPDF } from "jspdf";

export function downloadCV(content) {
  const profile = content?.profile || {};
  const cvConfig = profile.cv || { mode: "auto", manualPdfUrl: "" };

  if (cvConfig.mode === "manual" && cvConfig.manualPdfUrl) {
    const a = document.createElement("a");
    a.href = cvConfig.manualPdfUrl;
    a.download = `${(profile.name || "Resume").replace(/\s+/g, "_")}_CV.pdf`;
    a.click();
    return;
  }

  generateAutoCV(content);
}

function generateAutoCV(content) {
  const profile = content?.profile || {};
  const about = content?.about;
  const education = content?.education;
  const experience = content?.experience;
  const skills = content?.skills;
  const publications = content?.publications;
  const achievements = content?.achievements;

  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const marginX = 48;
  let y = 56;
  const pageWidth = doc.internal.pageSize.getWidth();
  const maxWidth = pageWidth - marginX * 2;

  const accent = [37, 99, 235];

  function addHeading(text) {
    if (y > 760) {
      doc.addPage();
      y = 56;
    }
    y += 10;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(...accent);
    doc.text(text.toUpperCase(), marginX, y);
    y += 4;
    doc.setDrawColor(...accent);
    doc.setLineWidth(1);
    doc.line(marginX, y + 4, pageWidth - marginX, y + 4);
    y += 18;
    doc.setTextColor(20, 20, 20);
  }

  function addParagraph(text, size = 10) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(text, maxWidth);
    lines.forEach((line) => {
      if (y > 780) {
        doc.addPage();
        y = 56;
      }
      doc.text(line, marginX, y);
      y += size + 4;
    });
  }

  function addBullet(text, size = 10) {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(text, maxWidth - 14);
    lines.forEach((line, idx) => {
      if (y > 780) {
        doc.addPage();
        y = 56;
      }
      doc.text(idx === 0 ? `\u2022 ${line}` : `  ${line}`, marginX + 4, y);
      y += size + 4;
    });
  }

  // Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(20, 20, 20);
  doc.text(profile.name || "Resume", marginX, y);
  y += 22;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(90, 90, 90);
  doc.text((profile.titles || []).join(" | "), marginX, y);
  y += 16;

  const contactLine = [profile.email, profile.phone, profile.location].filter(Boolean).join("   \u2022   ");
  doc.setFontSize(9.5);
  doc.text(contactLine, marginX, y);
  y += 10;

  if (about?.paragraphs?.length) {
    addHeading("Summary");
    about.paragraphs.forEach((p) => addParagraph(p));
  }

  if (education?.items?.length) {
    addHeading("Education");
    education.items.forEach((ed) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.text(`${ed.degree}`, marginX, y);
      doc.setFont("helvetica", "normal");
      doc.text(ed.period || "", pageWidth - marginX, y, { align: "right" });
      y += 13;
      addParagraph(`${ed.institution}${ed.details ? " \u2014 " + ed.details : ""}`, 9.5);
      y += 4;
    });
  }

  if (experience?.items?.length) {
    addHeading("Experience");
    experience.items.forEach((ex) => {
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10.5);
      doc.text(ex.title, marginX, y);
      doc.setFont("helvetica", "normal");
      doc.text(ex.period || "", pageWidth - marginX, y, { align: "right" });
      y += 13;
      addParagraph(ex.organization, 9.5);
      if (ex.description) addBullet(ex.description, 9.5);
      y += 4;
    });
  }

  if (publications?.items?.length) {
    addHeading("Publications");
    publications.items.forEach((pub) => {
      addBullet(`${pub.title} \u2014 ${pub.venue}`, 9.5);
    });
  }

  if (skills?.categories?.length) {
    addHeading("Skills");
    skills.categories.forEach((cat) => {
      addParagraph(`${cat.title}: ${(cat.items || []).join(", ")}`, 9.5);
    });
  }

  if (achievements?.awards?.items?.length) {
    addHeading("Achievements");
    achievements.awards.items.forEach((a) => addBullet(`${a.title}${a.meta ? " (" + a.meta + ")" : ""}`, 9.5));
    achievements.extracurricular?.items?.forEach((a) => addBullet(`${a.title}${a.meta ? " (" + a.meta + ")" : ""}`, 9.5));
  }

  const fileName = (profile.name || "Resume").replace(/\s+/g, "_");
  doc.save(`${fileName}_CV.pdf`);
}