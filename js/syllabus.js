document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to SumDn Study 🚀 - Syllabus Page Loaded ✅");

  // Simple scroll animation trigger
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fadeInUp 1s ease forwards";
      }
    });
  });
  elements.forEach(el => observer.observe(el));

  const viewBtn = document.getElementById("viewBtn");
  const resultContainer = document.getElementById("resultContainer");

  // DROPDOWN ELEMENTS
  const classSelect = document.getElementById("classSelect");
  const boardSelect = document.getElementById("boardSelect");

  const boardsByClass = {
    "3": ["cbse", "icse", "wbbse", "tbse"],
    "4": ["cbse", "icse", "wbbse", "tbse"],
    "5": ["cbse", "icse", "wbbse", "tbse"],
    "6": ["cbse", "icse", "wbbse", "tbse"],
    "7": ["cbse", "icse", "wbbse", "tbse"],
    "8": ["cbse", "icse", "wbbse", "tbse"],
    "9": ["cbse", "icse", "wbbse", "tbse"],
    "10": ["cbse", "icse", "wbbse", "tbse"],
    "11": ["cbse", "icse", "wbbse", "tbse"],
    "12": ["cbse", "icse", "wbbse", "tbse"]
  };

  boardSelect.disabled = true;

  classSelect?.addEventListener("change", () => {
    const selectedClass = classSelect.value;
    boardSelect.innerHTML = "";
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Select Board";
    boardSelect.appendChild(defaultOption);

    if (selectedClass && boardsByClass[selectedClass]) {
      boardsByClass[selectedClass].forEach(board => {
        const option = document.createElement("option");
        option.value = board;
        option.textContent = board.toUpperCase();
        boardSelect.appendChild(option);
      });
      boardSelect.disabled = false;
    } else {
      boardSelect.disabled = true;
    }
  });

  // SYLLABUS DATA (You can add links here)
  const syllabusData = {
    "3": {
      "tbse": [
        { subject: "Bengali", download: "links/syllabus/class3/tbse/bengali.pdf" },
        { subject: "English", download: "links/syllabus/class3/tbse/english.pdf" },
        { subject: "Mathematics", download: "links/syllabus/class3/tbse/mathematics.pdf" },
        { subject: "Environmental Studies", download: "links/syllabus/class3/tbse/evs.pdf" }
      ]
    },
    "10": {
      "cbse": [
        { subject: "Science", download: "links/syllabus/class10/cbse/science.pdf" },
        { subject: "Mathematics", download: "links/syllabus/class10/cbse/math.pdf" },
        { subject: "English", download: "links/syllabus/class10/cbse/english.pdf" },
        { subject: "Social Science", download: "links/syllabus/class10/cbse/sst.pdf" }
      ]
    },
    // Add more as needed
  };

  viewBtn?.addEventListener("click", () => {
    const cls = classSelect.value;
    const board = boardSelect.value;

    if (!cls || !board) {
      resultContainer.innerHTML = `<p style="color:red; text-align:center;">⚠️ Please select both class and board.</p>`;
      return;
    }

    let html = `<h2 style="color:#003366; text-align:center;">${board.toUpperCase()} - Class ${cls} Syllabus</h2>`;
    html += `<div style="margin-top:20px;">`;

    if (syllabusData[cls] && syllabusData[cls][board]) {
      syllabusData[cls][board].forEach(syl => {
        html += `
          <div class="paper-box">
            <h3>${syl.subject}</h3>
            <p>📘 <a href="${syl.download}" target="_blank">Download Syllabus</a></p>
          </div>
        `;
      });
    } else {
      html += `<p style="text-align:center; color:gray;">No syllabus available for this selection.</p>`;
    }

    html += `</div>`;
    resultContainer.innerHTML = html;
  });
});
