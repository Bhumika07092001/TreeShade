function formatText(command, value = null) {
  document.execCommand(command, false, value);
}
function handleDownload() {
  const leftMargin = document.getElementById("left-margin").value;
  const topMargin = document.getElementById("top-margin").value;
  const rightMargin = document.getElementById("right-margin").value;
  const bottomMargin = document.getElementById("bottom-margin").value;

  console.log("Left Margin:", leftMargin);
  console.log("Top Margin:", topMargin);
  console.log("Right Margin:", rightMargin);
  console.log("Bottom Margin:", bottomMargin);
}
function generatePDF() {
  const doc = new jsPDF();
  const text = document.getElementById("editor").innerHTML;

  doc.setMargins(leftMargin, topMargin, rightMargin, bottomMargin);
  doc.fromHTML(text, 15, 15);
  doc.save("formatted_text.pdf");
}
