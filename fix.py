import re
import json
import nbformat
from nbformat.v4 import new_notebook, new_code_cell, new_markdown_cell

# Input (corrupted file) and output (repaired file) paths
input_file = "QuickBasket_Complete_Analysis (1).ipynb"
output_file = "QuickBasket_Complete_Analysis_repaired.ipynb"

# Read raw file content
with open(input_file, "r", encoding="utf-8", errors="ignore") as f:
    raw_content = f.read()

# Regex patterns to capture code and markdown cells
code_pattern = re.compile(r'"cell_type":\s*"code".*?"source":\s*(\[[^\]]*\])', re.S)
markdown_pattern = re.compile(r'"cell_type":\s*"markdown".*?"source":\s*(\[[^\]]*\])', re.S)

def clean_source(src_text):
    """Convert JSON-like array of strings into a clean string."""
    try:
        src = json.loads(src_text)
        if isinstance(src, list):
            return "".join(src)
    except:
        pass
    return src_text

cells = []

# Extract code cells
for match in code_pattern.finditer(raw_content):
    cells.append(new_code_cell(clean_source(match.group(1))))

# Extract markdown cells
for match in markdown_pattern.finditer(raw_content):
    cells.append(new_markdown_cell(clean_source(match.group(1))))

# Rebuild notebook
rebuilt_nb = new_notebook(cells=cells, metadata={})

# Save repaired notebook
with open(output_file, "w", encoding="utf-8") as f:
    nbformat.write(rebuilt_nb, f)

print(f"Repaired notebook saved as: {output_file}")
print(f"Recovered {len(cells)} cells.")
