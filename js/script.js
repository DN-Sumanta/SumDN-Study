document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to SumDn Study 🚀");

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

  console.log("SumDn Study - Questions Page Loaded ✅");

  const viewBtn = document.getElementById("viewBtn");
  const resultContainer = document.getElementById("resultContainer");

  // DEPENDENT DROPDOWN FEATURE
  const classSelect = document.getElementById("classSelect");
  const boardSelect = document.getElementById("boardSelect");
  const yearSelect = document.getElementById("yearSelect");

  const boardsByClass = {
    "3": ["cbse", "icse", "wbbse", "tbse"],
    "4": ["cbse", "icse", "wbbse", "tbse"],
    "5": ["cbse", "icse", "wbbse", "tbse"],
    "6": ["cbse", "icse", "wbbse", "tbse"],
    "7": ["cbse", "icse", "wbbse", "tbse",],
    "8": ["cbse", "icse", "wbbse", "tbse"],
    "9": ["cbse", "icse", "wbbse", "tbse"],
    "10": ["cbse", "icse", "wbbse", "tbse"],
    "11": ["cbse", "icse", "wbbse", "tbse"],
    "12": ["cbse", "icse", "wbbse", "tbse"]
  };

  boardSelect.disabled = true;
  yearSelect.disabled = true;

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

    yearSelect.disabled = true;
    yearSelect.value = "";
  });

  boardSelect?.addEventListener("change", () => {
    if (boardSelect.value) {
      yearSelect.disabled = false;
    } else {
      yearSelect.disabled = true;
      yearSelect.value = "";
    }
  });

  // PAPERS DATA ACCORDING TO CLASS + BOARD + YEAR
  const papersData = {
	"3": {
      "tbse": {
        "2024": [
          { subject: "Bengali", view: "links/class3/tbse/2024/bengali.pdf", download: "links/class3/tbse/2024/hy-bengali.pdf" },
          { subject: "English", view: "links/class3/tbse/2024/english.pdf", download: "links/class3/tbse/2024/hy-english.pdf" },
		  { subject: "Mathematics", view: "links/class3/tbse/2024/mathematics.pdf", download: "links/class3/tbse/2024/hy-mathematics.pdf" },
		  { subject: "Environmental Studies", download: "links/class3/tbse/2024/hy-environmental studies.pdf" }
        ],
        "2023": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      },
      "": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      }
    },
	"4": {
      "tbse": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ],
        "2023": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      },
      "": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      }
    },
	"5": {
      "tbse": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ],
        "2023": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      },
      "": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      }
    },
	"6": {
      "tbse": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ],
        "2023": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      },
      "": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      }
    },
	"7": {
      "tbse": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ],
        "2023": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      },
      "": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      }
    },
	"8": {
      "tbse": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ],
        "2023": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      },
      "": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      }
    },
	"9": {
      "tbse": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ],
        "2023": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      },
      "": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      }
    },
	"10": {
      "tbse": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ],
        "2023": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      },
      "": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      }
    },
	"11": {
      "tbse": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ],
        "2023": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      },
      "": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      }
    },
    "12": {
      "tbse": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ],
        "2023": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      },
      "": {
        "2024": [
          { subject: "", view: "", download: "" },
          { subject: "", view: "", download: "" }
        ]
      }
    }
    // Add other classes, boards, and years similarly
  };

  viewBtn?.addEventListener("click", () => {
    const cls = classSelect.value;
    const board = boardSelect.value;
    const year = yearSelect.value;

    if (!cls || !board || !year) {
      resultContainer.innerHTML = `<p style="color:red; text-align:center;">⚠️ Please select class, board, and year.</p>`;
      return;
    }

    let html = `<h2 style="color:#003366; text-align:center;">${board.toUpperCase()} - Class ${cls} (${year})</h2>`;
    html += `<div style="margin-top:20px;">`;

    if (papersData[cls] && papersData[cls][board] && papersData[cls][board][year]) {
      papersData[cls][board][year].forEach(paper => {
        html += `
          <div class="paper-box">
            <h3>${paper.subject}</h3>
            <p>📄 <a href="${paper.view}" target="_blank">Annual Question Paper</a></p>
            <p>✅ <a href="${paper.download}" target="_blank">Half-Yearly Question Paper</a></p>
          </div>
        `;
      });
    } else {
      html += `<p style="text-align:center; color:gray;">No papers available for this selection.</p>`;
    }

    html += `</div>`;
    resultContainer.innerHTML = html;
  });
});
